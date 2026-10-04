import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { SparePart } from '../types';

interface ProductDetailsModalProps {
  part: SparePart;
  onClose: () => void;
  onSelectPart: (part: SparePart) => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  part,
  onClose,
  onSelectPart,
}) => {
  const { categories, brands, models, partTypes, qualityTypes, sellers, parts, favorites, toggleFavorite, incrementViewCount } = useApp();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    incrementViewCount(part.id);
  }, [part.id]);

  const category = categories.find(c => c.id === part.categoryId);
  const brand = brands.find(b => b.id === part.brandId);
  const model = models.find(m => m.id === part.deviceModelId);
  const partType = partTypes.find(pt => pt.id === part.partTypeId);
  const quality = qualityTypes.find(q => q.id === part.qualityTypeId);
  const seller = sellers.find(s => s.id === part.sellerId);
  const isFav = favorites.includes(part.id);

  // Similar parts in same category/model
  const similarParts = parts
    .filter(p => p.id !== part.id && p.isActive && !p.isDeleted && p.moderationStatus === 2)
    .filter(p => p.categoryId === part.categoryId || p.brandId === part.brandId)
    .slice(0, 4);

  const images = part.images && part.images.length > 0
    ? part.images
    : [{ id: 1, imageUrl: '/images/images.jpg', isMain: true, displayOrder: 1 }];

  const activeImg = images[selectedImageIndex]?.imageUrl || '/images/images.jpg';

  // Normalize WhatsApp link
  const rawWa = seller?.whatsAppNumber || seller?.phone || '+994501234567';
  const cleanWa = rawWa.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanWa}?text=${encodeURIComponent(
    `Salam, e-hisse.az saytındakı bu elanla bağlı əlaqə saxlayıram:\n"${part.title}"\nQiymət: ${part.price} AZN\nSKU: ${part.sku}`
  )}`;

  const callUrl = `tel:${(seller?.phone || '').replace(/\s+/g, '')}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 animate-in fade-in duration-200">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161e19] border border-[#2a3830] hover:border-[#a3ff12] text-sm font-semibold text-white hover:text-[#a3ff12] cursor-pointer transition-colors"
        >
          <i className="bi bi-arrow-left"></i>
          <span>Geri qayıt</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => toggleFavorite(part.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold cursor-pointer transition-colors ${
              isFav
                ? 'bg-red-500/10 text-red-400 border-red-500/30'
                : 'bg-[#161e19] text-[#8b9891] border-[#2a3830] hover:text-white'
            }`}
          >
            <i className={`bi ${isFav ? 'bi-heart-fill text-red-500' : 'bi-heart'}`}></i>
            <span>{isFav ? 'Sevimlilərdədir' : 'Sevimlilərə əlavə et'}</span>
          </button>
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Images Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-3xl bg-[#111814] border border-[#212d26] p-6 flex items-center justify-center overflow-hidden min-h-[380px] max-h-[500px]">
            <img
              src={activeImg}
              alt={part.title}
              className="max-h-full max-w-full object-contain drop-shadow-2xl transition-all duration-300"
              onError={e => {
                (e.currentTarget as HTMLImageElement).src = '/images/images.jpg';
              }}
            />

            {/* Quality pill badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-[#a3ff12] text-black text-xs font-extrabold uppercase tracking-wider shadow-md">
                {quality?.name || 'Orijinal'}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
              {images.map((img, idx) => (
                <button
                  key={img.id || idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-20 rounded-2xl border p-2 bg-[#111814] shrink-0 cursor-pointer overflow-hidden transition-all ${
                    selectedImageIndex === idx
                      ? 'border-[#a3ff12] ring-2 ring-[#a3ff12]/30'
                      : 'border-[#212d26] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.imageUrl}
                    alt="thumbnail"
                    className="w-full h-full object-contain"
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).src = '/images/images.jpg';
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Header Badges & Views */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-[#212d26] text-xs font-semibold text-white">
                {brand?.name} {model?.name}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#a3ff12]/10 text-[#a3ff12] text-xs font-medium">
                {partType?.name}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#8b9891]">
              <span className="flex items-center gap-1">
                <i className="bi bi-clock"></i> {part.createdDate.substring(0, 10)}
              </span>
              <span className="flex items-center gap-1">
                <i className="bi bi-eye"></i> {part.viewCount} baxış
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {part.title}
          </h1>

          {/* Price & Stock Badge */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[#111814] border border-[#212d26]">
            <div>
              <div className="text-xs text-[#8b9891] mb-0.5">Qiymət</div>
              <div className="text-3xl font-black text-[#a3ff12]">
                {part.price}{' '}
                <span className="text-lg font-semibold text-white">{part.currency}</span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs text-[#8b9891] mb-0.5">Anbar Vəziyyəti</div>
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                  part.stockQuantity > 0
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'bg-red-500/10 text-red-400 border border-red-500/30'
                }`}
              >
                <i className={`bi ${part.stockQuantity > 0 ? 'bi-check-circle-fill' : 'bi-x-circle-fill'}`}></i>
                <span>{part.stockQuantity > 0 ? `Stokda ${part.stockQuantity} ədəd` : 'Bitib'}</span>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="rounded-2xl bg-[#111814] border border-[#212d26] p-4 divide-y divide-[#212d26]">
            <div className="grid grid-cols-2 py-2 text-xs">
              <span className="text-[#8b9891]">Kateqoriya:</span>
              <span className="font-semibold text-white text-right">{category?.name || 'Məlum deyil'}</span>
            </div>
            <div className="grid grid-cols-2 py-2 text-xs">
              <span className="text-[#8b9891]">Brend:</span>
              <span className="font-semibold text-white text-right">{brand?.name || 'Məlum deyil'}</span>
            </div>
            <div className="grid grid-cols-2 py-2 text-xs">
              <span className="text-[#8b9891]">Cihaz Modeli:</span>
              <span className="font-semibold text-white text-right">{model?.name || 'Ümumi'}</span>
            </div>
            <div className="grid grid-cols-2 py-2 text-xs">
              <span className="text-[#8b9891]">Hissə Növü:</span>
              <span className="font-semibold text-white text-right">{partType?.name || 'Ehtiyat hissəsi'}</span>
            </div>
            <div className="grid grid-cols-2 py-2 text-xs">
              <span className="text-[#8b9891]">Vəziyyəti:</span>
              <span className="font-semibold text-[#a3ff12] text-right">
                {quality?.name} ({quality?.description})
              </span>
            </div>
            <div className="grid grid-cols-2 py-2 text-xs">
              <span className="text-[#8b9891]">Zəmanət Müddəti:</span>
              <span className="font-semibold text-white text-right">
                {part.warrantyMonths > 0 ? `${part.warrantyMonths} ay rəsmi zəmanət` : 'Zəmanətsiz'}
              </span>
            </div>
            <div className="grid grid-cols-2 py-2 text-xs">
              <span className="text-[#8b9891]">SKU Kodu:</span>
              <span className="font-mono text-white text-right">{part.sku}</span>
            </div>
            <div className="grid grid-cols-2 py-2 text-xs">
              <span className="text-[#8b9891]">Min. Sifariş:</span>
              <span className="font-semibold text-white text-right">{part.minOrderQuantity} ədəd</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Məhsul haqqında</h3>
            <p className="text-sm text-[#8b9891] leading-relaxed whitespace-pre-line bg-[#111814] p-4 rounded-2xl border border-[#212d26]">
              {part.description || 'Bu hissə üçün ətraflı təsvir təqdim edilməyib.'}
            </p>
          </div>

          {/* Seller Contact Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#161e19] to-[#111814] border border-[#2a3830] p-5 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-[#a3ff12] font-bold uppercase tracking-wider">Satıcı Məlumatları</div>
                <h4 className="text-base font-bold text-white mt-0.5">
                  {seller?.companyName || 'Rəsmi Tərəfdaş Servis'}
                </h4>
                <p className="text-xs text-[#8b9891]">
                  Əlaqədar şəxs: {seller?.contactPerson || 'Satış Şöbəsi'}
                </p>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                  <i className="bi bi-star-fill"></i>
                  <span>{seller?.rating || '5.0'}</span>
                </div>
                <span className="text-[10px] text-[#8b9891]">Reytinq</span>
              </div>
            </div>

            {seller?.address && (
              <div className="flex items-center gap-2 text-xs text-[#8b9891]">
                <i className="bi bi-geo-alt text-[#a3ff12]"></i>
                <span>{seller.address}</span>
              </div>
            )}

            {/* Direct Contact Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950 transition-all cursor-pointer"
              >
                <i className="bi bi-whatsapp text-lg"></i>
                <span>WhatsApp ilə yaz</span>
              </a>

              <a
                href={callUrl}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#161e19] border border-[#2a3830] hover:border-[#a3ff12] text-white font-bold text-xs transition-all cursor-pointer"
              >
                <i className="bi bi-telephone text-base text-[#a3ff12]"></i>
                <span>{seller?.phone || 'Zəng et'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Parts */}
      {similarParts.length > 0 && (
        <section className="pt-8 border-t border-[#212d26] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[#a3ff12] text-xs font-bold uppercase tracking-wider">Oxşar təkliflər</span>
              <h2 className="text-xl font-bold text-white">Oxşar Ehtiyat Hissələri</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {similarParts.map(sp => {
              const q = qualityTypes.find(qty => qty.id === sp.qualityTypeId);
              return (
                <div
                  key={sp.id}
                  onClick={() => onSelectPart(sp)}
                  className="rounded-2xl bg-[#111814] border border-[#212d26] hover:border-[#3c5245] p-3 cursor-pointer hover:shadow-lg transition-all"
                >
                  <div className="h-28 flex items-center justify-center p-2 rounded-xl bg-white/5 mb-2">
                    <img
                      src={sp.images[0]?.imageUrl || '/images/images.jpg'}
                      alt={sp.title}
                      className="max-h-full max-w-full object-contain"
                      onError={e => {
                        (e.currentTarget as HTMLImageElement).src = '/images/images.jpg';
                      }}
                    />
                  </div>
                  <div className="text-[10px] text-[#a3ff12] font-semibold">{q?.name}</div>
                  <h4 className="font-semibold text-white text-xs line-clamp-1 hover:text-[#a3ff12]">
                    {sp.title}
                  </h4>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#212d26]">
                    <span className="font-bold text-[#a3ff12] text-sm">{sp.price} AZN</span>
                    <span className="text-[10px] text-[#8b9891]">Stok: {sp.stockQuantity}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
