import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SparePart } from '../types';

export const WarehouseView: React.FC<{ onSelectPart: (part: SparePart) => void }> = ({ onSelectPart }) => {
  const {
    currentUser,
    currentSeller,
    parts,
    categories,
    brands,
    models,
    partTypes,
    qualityTypes,
    saleAudits,
    addPart,
    updatePart,
    deletePart,
    adjustStock,
    recordSale,
    updateSellerProfile,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'parts' | 'sales' | 'settings'>('parts');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingPart, setEditingPart] = useState<SparePart | null>(null);
  const [searchFilter, setSearchFilter] = useState('');
  const [saleModalPart, setSaleModalPart] = useState<SparePart | null>(null);
  const [saleQuantity, setSaleQuantity] = useState(1);

  // Form State for Add / Edit
  const [formCategory, setFormCategory] = useState<number>(1);
  const [formBrand, setFormBrand] = useState<number>(1);
  const [formModel, setFormModel] = useState<number>(1);
  const [formPartType, setFormPartType] = useState<number>(1);
  const [formQuality, setFormQuality] = useState<number>(1);
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formSku, setFormSku] = useState('');
  const [formPrice, setFormPrice] = useState<number>(150);
  const [formDiscountPrice, setFormDiscountPrice] = useState<number | ''>('');
  const [formStock, setFormStock] = useState<number>(10);
  const [formMinOrder, setFormMinOrder] = useState<number>(1);
  const [formWarranty, setFormWarranty] = useState<number>(6);
  const [formImageUrl, setFormImageUrl] = useState('/images/images.jpg');

  // Settings State
  const [companyName, setCompanyName] = useState(currentSeller?.companyName || '');
  const [contactPerson, setContactPerson] = useState(currentSeller?.contactPerson || '');
  const [sellerPhone, setSellerPhone] = useState(currentSeller?.phone || '');
  const [sellerWhatsApp, setSellerWhatsApp] = useState(currentSeller?.whatsAppNumber || '');
  const [sellerAddress, setSellerAddress] = useState(currentSeller?.address || '');
  const [savedSettingsSuccess, setSavedSettingsSuccess] = useState(false);

  // Filter parts belonging to this user/seller or all parts if admin/test
  const sellerId = currentSeller?.id || 1;
  const myParts = parts.filter(p => p.sellerId === sellerId && !p.isDeleted);

  const displayedParts = myParts.filter(p => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return p.title.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
  });

  // Filter models based on formCategory and formBrand
  const availableModels = models.filter(
    m => m.categoryId === formCategory && m.brandId === formBrand
  );

  const handleOpenAddModal = () => {
    setEditingPart(null);
    setFormCategory(1);
    setFormBrand(1);
    setFormModel(1);
    setFormPartType(1);
    setFormQuality(1);
    setFormTitle('');
    setFormDescription('');
    setFormSku(`SKU-${Math.floor(1000 + Math.random() * 9000)}`);
    setFormPrice(120);
    setFormDiscountPrice('');
    setFormStock(10);
    setFormMinOrder(1);
    setFormWarranty(6);
    setFormImageUrl('/images/images.jpg');
    setShowAddModal(true);
  };

  const handleOpenEditModal = (part: SparePart) => {
    setEditingPart(part);
    setFormCategory(part.categoryId || 1);
    setFormBrand(part.brandId || 1);
    setFormModel(part.deviceModelId);
    setFormPartType(part.partTypeId);
    setFormQuality(part.qualityTypeId);
    setFormTitle(part.title);
    setFormDescription(part.description);
    setFormSku(part.sku);
    setFormPrice(part.price);
    setFormDiscountPrice(part.discountPrice || '');
    setFormStock(part.stockQuantity);
    setFormMinOrder(part.minOrderQuantity);
    setFormWarranty(part.warrantyMonths);
    setFormImageUrl(part.images[0]?.imageUrl || '/images/images.jpg');
    setShowAddModal(true);
  };

  const handleSavePart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    if (editingPart) {
      updatePart(editingPart.id, {
        categoryId: formCategory,
        brandId: formBrand,
        deviceModelId: formModel,
        partTypeId: formPartType,
        qualityTypeId: formQuality,
        title: formTitle,
        description: formDescription,
        sku: formSku,
        price: Number(formPrice),
        discountPrice: formDiscountPrice ? Number(formDiscountPrice) : null,
        stockQuantity: Number(formStock),
        minOrderQuantity: Number(formMinOrder),
        warrantyMonths: Number(formWarranty),
        images: [{ id: 1, imageUrl: formImageUrl, isMain: true, displayOrder: 1 }],
      });
    } else {
      addPart({
        sellerId,
        categoryId: formCategory,
        brandId: formBrand,
        deviceModelId: formModel,
        partTypeId: formPartType,
        qualityTypeId: formQuality,
        title: formTitle,
        description: formDescription,
        sku: formSku,
        price: Number(formPrice),
        discountPrice: formDiscountPrice ? Number(formDiscountPrice) : null,
        currency: 'AZN',
        stockQuantity: Number(formStock),
        minOrderQuantity: Number(formMinOrder),
        warrantyMonths: Number(formWarranty),
        images: [{ id: Date.now(), imageUrl: formImageUrl, isMain: true, displayOrder: 1 }],
      });
    }

    setShowAddModal(false);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentSeller) {
      updateSellerProfile(currentSeller.id, {
        companyName,
        contactPerson,
        phone: sellerPhone,
        whatsAppNumber: sellerWhatsApp,
        address: sellerAddress,
      });
      setSavedSettingsSuccess(true);
      setTimeout(() => setSavedSettingsSuccess(false), 3000);
    }
  };

  const handleExecuteSale = () => {
    if (!saleModalPart || saleQuantity <= 0) return;
    recordSale(saleModalPart.id, saleQuantity);
    setSaleModalPart(null);
  };

  const totalStockCount = myParts.reduce((acc, p) => acc + p.stockQuantity, 0);
  const activeCount = myParts.filter(p => p.isActive && p.moderationStatus === 2).length;
  const pendingCount = myParts.filter(p => p.moderationStatus === 1).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Header Card */}
      <div className="rounded-3xl bg-[#111814] border border-[#212d26] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a3ff12] animate-pulse"></span>
            <span className="text-[#a3ff12] text-xs font-bold uppercase tracking-wider">
              Anbardar & Usta İdarəetmə Paneli
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            {currentSeller?.companyName || `${currentUser?.firstName} ${currentUser?.lastName}`}
          </h1>
          <p className="text-xs text-[#8b9891] mt-0.5">
            Ehtiyat hissələrini idarə edin, stok miqdarını tənzimləyin və satışları qeydə alın.
          </p>
        </div>

        <button
          onClick={handleOpenAddModal}
          className="px-5 py-3 rounded-2xl bg-[#a3ff12] text-black font-extrabold text-sm hover:bg-[#b4ff3d] flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#a3ff12]/10"
        >
          <i className="bi bi-plus-lg font-black text-base"></i>
          <span>Yeni Elan Əlavə Et</span>
        </button>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-[#111814] border border-[#212d26]">
          <div className="text-xs text-[#8b9891] mb-1">Cəmi Elanlar</div>
          <div className="text-2xl font-black text-white">{myParts.length}</div>
          <div className="text-[11px] text-[#8b9891] mt-1">bütün kateqoriyalarda</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#111814] border border-[#212d26]">
          <div className="text-xs text-[#8b9891] mb-1">Aktiv Satışda</div>
          <div className="text-2xl font-black text-[#a3ff12]">{activeCount}</div>
          <div className="text-[11px] text-emerald-400 mt-1">vitrində görünür</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#111814] border border-[#212d26]">
          <div className="text-xs text-[#8b9891] mb-1">Moderasiyada</div>
          <div className="text-2xl font-black text-amber-400">{pendingCount}</div>
          <div className="text-[11px] text-[#8b9891] mt-1">təsdiq gözləyir</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#111814] border border-[#212d26]">
          <div className="text-xs text-[#8b9891] mb-1">Toplam Stok Ədədi</div>
          <div className="text-2xl font-black text-white">{totalStockCount}</div>
          <div className="text-[11px] text-[#8b9891] mt-1">mövcud hissə</div>
        </div>
      </div>

      {/* Nav Tabs */}
      <div className="flex border-b border-[#212d26] gap-4 text-sm font-semibold">
        <button
          onClick={() => setActiveTab('parts')}
          className={`pb-3 cursor-pointer flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'parts'
              ? 'border-[#a3ff12] text-[#a3ff12]'
              : 'border-transparent text-[#8b9891] hover:text-white'
          }`}
        >
          <i className="bi bi-box-seam"></i>
          <span>Elanlarım ({myParts.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('sales')}
          className={`pb-3 cursor-pointer flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'sales'
              ? 'border-[#a3ff12] text-[#a3ff12]'
              : 'border-transparent text-[#8b9891] hover:text-white'
          }`}
        >
          <i className="bi bi-receipt"></i>
          <span>Satış Tarixçəsi ({saleAudits.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`pb-3 cursor-pointer flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'settings'
              ? 'border-[#a3ff12] text-[#a3ff12]'
              : 'border-transparent text-[#8b9891] hover:text-white'
          }`}
        >
          <i className="bi bi-gear"></i>
          <span>Profil & Əlaqə Tənzimləmələri</span>
        </button>
      </div>

      {/* Tab 1: Parts Table */}
      {activeTab === 'parts' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                value={searchFilter}
                onChange={e => setSearchFilter(e.target.value)}
                placeholder="Elanlarımda axtar..."
                className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl py-2 pl-9 pr-3 text-xs outline-none focus:border-[#a3ff12]"
              />
              <i className="bi bi-search absolute left-3 top-2.5 text-[#8b9891] text-xs"></i>
            </div>
            <div className="text-xs text-[#8b9891] self-end sm:self-auto">
              Göstərilir: {displayedParts.length} elan
            </div>
          </div>

          <div className="rounded-2xl bg-[#111814] border border-[#212d26] overflow-x-auto">
            <table className="w-full text-left text-xs text-white">
              <thead className="bg-[#161e19] border-b border-[#212d26] text-[#8b9891] font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-3">Hissə</th>
                  <th className="p-3">SKU</th>
                  <th className="p-3">Qiymət</th>
                  <th className="p-3">Stok</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Əməliyyatlar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#212d26]">
                {displayedParts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-[#8b9891]">
                      Heç bir elan tapılmadı. "Yeni Elan Əlavə Et" düyməsinə klikləyin.
                    </td>
                  </tr>
                ) : (
                  displayedParts.map(part => {
                    const quality = qualityTypes.find(q => q.id === part.qualityTypeId);
                    return (
                      <tr key={part.id} className="hover:bg-[#161e19]/60 transition-colors">
                        <td className="p-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={part.images[0]?.imageUrl || '/images/images.jpg'}
                              alt={part.title}
                              className="w-12 h-12 object-contain rounded-lg bg-white/5 p-1 shrink-0"
                              onError={e => {
                                (e.currentTarget as HTMLImageElement).src = '/images/images.jpg';
                              }}
                            />
                            <div>
                              <div
                                onClick={() => onSelectPart(part)}
                                className="font-semibold text-white hover:text-[#a3ff12] cursor-pointer line-clamp-1"
                              >
                                {part.title}
                              </div>
                              <div className="text-[11px] text-[#8b9891] mt-0.5">
                                {quality?.name || 'Orijinal'} • {part.warrantyMonths} ay zəmanət
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="p-3 font-mono text-[#8b9891]">{part.sku}</td>

                        <td className="p-3 font-bold text-[#a3ff12] text-sm">
                          {part.price} AZN
                        </td>

                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <span className={`font-bold ${part.stockQuantity > 0 ? 'text-white' : 'text-red-400'}`}>
                              {part.stockQuantity} ədəd
                            </span>
                            <div className="flex items-center rounded border border-[#2a3830] bg-[#161e19]">
                              <button
                                onClick={() => adjustStock(part.id, -1)}
                                disabled={part.stockQuantity <= 0}
                                className="px-1.5 py-0.5 hover:bg-white/10 text-[#8b9891] hover:text-white disabled:opacity-40 cursor-pointer"
                                title="Stoku 1 ədəd azalt"
                              >
                                -
                              </button>
                              <button
                                onClick={() => adjustStock(part.id, 1)}
                                className="px-1.5 py-0.5 hover:bg-white/10 text-[#8b9891] hover:text-white cursor-pointer"
                                title="Stoku 1 ədəd artır"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </td>

                        <td className="p-3">
                          {part.moderationStatus === 2 ? (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                              Təsdiqlənib
                            </span>
                          ) : part.moderationStatus === 1 ? (
                            <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold">
                              Gözləmədə
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 text-[10px] font-bold">
                              İmtina
                            </span>
                          )}
                        </td>

                        <td className="p-3 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                setSaleModalPart(part);
                                setSaleQuantity(1);
                              }}
                              className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold cursor-pointer"
                              title="Satış qeyd et"
                            >
                              <i className="bi bi-cart-check me-1"></i> Satıldı
                            </button>

                            <button
                              onClick={() => handleOpenEditModal(part)}
                              className="p-1.5 rounded-lg bg-[#161e19] hover:bg-[#212d26] text-[#8b9891] hover:text-white cursor-pointer"
                              title="Redaktə et"
                            >
                              <i className="bi bi-pencil"></i>
                            </button>

                            <button
                              onClick={() => deletePart(part.id)}
                              className="p-1.5 rounded-lg bg-[#161e19] hover:bg-red-500/20 text-[#8b9891] hover:text-red-400 cursor-pointer"
                              title="Elanı sil"
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Sales Audit Log */}
      {activeTab === 'sales' && (
        <div className="rounded-2xl bg-[#111814] border border-[#212d26] p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">Son Satış Tarixçəsi</h3>
            <span className="text-xs text-[#8b9891]">{saleAudits.length} qeyd</span>
          </div>

          {saleAudits.length === 0 ? (
            <div className="text-center py-12 text-[#8b9891] text-xs">
              Hələ heç bir satış qeydə alınmayıb. Elanlar cədvəlindən "Satıldı" düyməsini istifadə edərək satış qeyd edə bilərsiniz.
            </div>
          ) : (
            <div className="divide-y divide-[#212d26]">
              {saleAudits.map(sale => {
                const part = parts.find(p => p.id === sale.sparePartId);
                return (
                  <div key={sale.id} className="py-3 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-white">
                        {part?.title || `Ehtiyat hissəsi #${sale.sparePartId}`}
                      </div>
                      <div className="text-[#8b9891] text-[11px] mt-0.5">
                        Tarix: {sale.timestamp}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-bold text-[#a3ff12]">
                        {sale.quantity} ədəd satıldı
                      </div>
                      <div className="text-[#8b9891] text-[11px]">
                        Əvvəlki stok: {sale.previousStock} → Yeni stok: {sale.newStock}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Settings */}
      {activeTab === 'settings' && (
        <div className="max-w-2xl rounded-2xl bg-[#111814] border border-[#212d26] p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">Satıcı & Servis Məlumatları</h3>
            <p className="text-xs text-[#8b9891] mt-0.5">
              Bu məlumatlar elanlarınızda və satıcı kataloqunda ustalara göstəriləcək.
            </p>
          </div>

          {savedSettingsSuccess && (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
              <i className="bi bi-check-circle-fill"></i>
              <span>Məlumatlar uğurla yadda saxlanıldı!</span>
            </div>
          )}

          <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
            <div>
              <label className="block text-[#8b9891] font-semibold mb-1">Şirkət / Servis Adı</label>
              <input
                type="text"
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 outline-none focus:border-[#a3ff12]"
                placeholder="Məs: TechMaster Servis"
                required
              />
            </div>

            <div>
              <label className="block text-[#8b9891] font-semibold mb-1">Məsul Şəxs</label>
              <input
                type="text"
                value={contactPerson}
                onChange={e => setContactPerson(e.target.value)}
                className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 outline-none focus:border-[#a3ff12]"
                placeholder="Ad və Soyad"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#8b9891] font-semibold mb-1">Əlaqə Nömrəsi (Zəng üçün)</label>
                <input
                  type="text"
                  value={sellerPhone}
                  onChange={e => setSellerPhone(e.target.value)}
                  className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 outline-none focus:border-[#a3ff12]"
                  placeholder="+994 50 123 45 67"
                  required
                />
              </div>

              <div>
                <label className="block text-[#8b9891] font-semibold mb-1">WhatsApp Nömrəsi</label>
                <input
                  type="text"
                  value={sellerWhatsApp}
                  onChange={e => setSellerWhatsApp(e.target.value)}
                  className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 outline-none focus:border-[#a3ff12]"
                  placeholder="+994 50 123 45 67"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#8b9891] font-semibold mb-1">Faktiki Ünvan</label>
              <input
                type="text"
                value={sellerAddress}
                onChange={e => setSellerAddress(e.target.value)}
                className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 outline-none focus:border-[#a3ff12]"
                placeholder="Bakı, Nəsimi ray., 28 May küç."
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#a3ff12] text-black font-bold text-xs hover:bg-[#b4ff3d] cursor-pointer transition-colors"
            >
              Yadda saxla
            </button>
          </form>
        </div>
      )}

      {/* Add / Edit Part Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#111814] border border-[#212d26] rounded-3xl max-w-2xl w-full p-6 space-y-5 my-8">
            <div className="flex items-center justify-between border-b border-[#212d26] pb-3">
              <h3 className="text-lg font-bold text-white">
                {editingPart ? 'Elanı Redaktə Et' : 'Yeni Ehtiyat Hissəsi Əlavə Et'}
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-[#8b9891] hover:text-white p-1 cursor-pointer"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <form onSubmit={handleSavePart} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[#8b9891] font-semibold mb-1">Kateqoriya</label>
                  <select
                    value={formCategory}
                    onChange={e => setFormCategory(Number(e.target.value))}
                    className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#8b9891] font-semibold mb-1">Brend</label>
                  <select
                    value={formBrand}
                    onChange={e => setFormBrand(Number(e.target.value))}
                    className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                  >
                    {brands.map(b => (
                      <option key={b.id} value={b.id}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#8b9891] font-semibold mb-1">Cihaz Modeli</label>
                  <select
                    value={formModel}
                    onChange={e => setFormModel(Number(e.target.value))}
                    className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                  >
                    {availableModels.length > 0 ? (
                      availableModels.map(m => (
                        <option key={m.id} value={m.id}>
                          {m.name}
                        </option>
                      ))
                    ) : (
                      <option value={1}>iPhone 15 Pro Max</option>
                    )}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#8b9891] font-semibold mb-1">Hissə Növü</label>
                  <select
                    value={formPartType}
                    onChange={e => setFormPartType(Number(e.target.value))}
                    className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                  >
                    {partTypes.map(pt => (
                      <option key={pt.id} value={pt.id}>
                        {pt.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#8b9891] font-semibold mb-1">Keyfiyyət / Vəziyyət</label>
                  <select
                    value={formQuality}
                    onChange={e => setFormQuality(Number(e.target.value))}
                    className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                  >
                    {qualityTypes.map(qt => (
                      <option key={qt.id} value={qt.id}>
                        {qt.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#8b9891] font-semibold mb-1">Elanın Başlığı</label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={e => setFormTitle(e.target.value)}
                  placeholder="Məsələn: iPhone 15 Pro Max Ekran - Orijinal Zavod"
                  className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 outline-none focus:border-[#a3ff12]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[#8b9891] font-semibold mb-1">SKU Kodu</label>
                  <div className="flex gap-1">
                    <input
                      type="text"
                      value={formSku}
                      onChange={e => setFormSku(e.target.value)}
                      className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12] font-mono"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setFormSku(`SKU-${Math.floor(1000 + Math.random() * 9000)}`)}
                      className="px-2 rounded-xl bg-white/5 border border-[#2a3830] hover:text-[#a3ff12] cursor-pointer"
                      title="Avtomatik generasiya"
                    >
                      <i className="bi bi-arrow-repeat"></i>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[#8b9891] font-semibold mb-1">Qiymət (AZN)</label>
                  <input
                    type="number"
                    value={formPrice}
                    onChange={e => setFormPrice(Number(e.target.value))}
                    min={1}
                    className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#8b9891] font-semibold mb-1">Stok Miqdarı</label>
                  <input
                    type="number"
                    value={formStock}
                    onChange={e => setFormStock(Number(e.target.value))}
                    min={0}
                    className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#8b9891] font-semibold mb-1">Zəmanət Müddəti (Ay)</label>
                  <input
                    type="number"
                    value={formWarranty}
                    onChange={e => setFormWarranty(Number(e.target.value))}
                    min={0}
                    max={36}
                    className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                  />
                </div>

                <div>
                  <label className="block text-[#8b9891] font-semibold mb-1">Şəkil Seçimi</label>
                  <select
                    value={formImageUrl}
                    onChange={e => setFormImageUrl(e.target.value)}
                    className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                  >
                    <option value="/images/images.jpg">Standart Hissə Şəkli 1</option>
                    <option value="/images/images (1).jpg">Ekran Şəkli 2</option>
                    <option value="/images/images (2).jpg">Ekran Şəkli 3</option>
                    <option value="/images/images (3).jpg">Batareya Şəkli</option>
                    <option value="/images/images (4).jpg">Mikrosxem Şəkli</option>
                    <option value="/images/images (5).jpg">Kamera Şəkli</option>
                    <option value="/images/images (6).jpg">Şüşə Şəkli</option>
                    <option value="/images/images (7).jpg">Kabel Şəkli</option>
                    <option value="/images/S24-Ultra-5000-mAH-Internal-Battery.png">S24 Ultra Batareya</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#8b9891] font-semibold mb-1">Ətraflı Təsvir</label>
                <textarea
                  rows={3}
                  value={formDescription}
                  onChange={e => setFormDescription(e.target.value)}
                  placeholder="Məhsulun xüsusiyyətləri, komplektasiyası və quraşdırma tələbləri..."
                  className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 outline-none focus:border-[#a3ff12]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#212d26]">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-[#2a3830] text-[#8b9891] hover:text-white cursor-pointer"
                >
                  İmtina
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#a3ff12] text-black font-extrabold hover:bg-[#b4ff3d] cursor-pointer"
                >
                  {editingPart ? 'Dəyişiklikləri Saxla' : 'Elanı Dərc Et'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Record Sale Modal */}
      {saleModalPart && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111814] border border-[#212d26] rounded-3xl max-w-sm w-full p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Satış Qeydiyyatı</h3>
              <button
                onClick={() => setSaleModalPart(null)}
                className="text-[#8b9891] hover:text-white cursor-pointer"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <div className="text-xs text-[#8b9891]">
              <span className="font-semibold text-white">{saleModalPart.title}</span>
              <div className="mt-1 text-[#a3ff12]">Mövcud stok: {saleModalPart.stockQuantity} ədəd</div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs text-[#8b9891] font-semibold">Satılan Miqdar:</label>
              <input
                type="number"
                min={1}
                max={saleModalPart.stockQuantity}
                value={saleQuantity}
                onChange={e => setSaleQuantity(Math.max(1, Number(e.target.value)))}
                className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 text-sm font-bold outline-none focus:border-[#a3ff12]"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setSaleModalPart(null)}
                className="px-4 py-2 rounded-xl border border-[#2a3830] text-xs text-[#8b9891] hover:text-white cursor-pointer"
              >
                İmtina
              </button>
              <button
                type="button"
                onClick={handleExecuteSale}
                className="px-5 py-2 rounded-xl bg-emerald-500 text-black font-extrabold text-xs hover:bg-emerald-400 cursor-pointer"
              >
                Təsdiq et
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
