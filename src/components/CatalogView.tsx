import React, { useState, useMemo, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { SparePart } from '../types';

interface CatalogViewProps {
  onSelectPart: (part: SparePart) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  initialCategoryId?: number | null;
  initialSellerId?: number | null;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  onSelectPart,
  searchQuery,
  setSearchQuery,
  initialCategoryId = null,
  initialSellerId = null,
}) => {
  const { parts, categories, brands, models, partTypes, qualityTypes, sellers, favorites, toggleFavorite } = useApp();

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<number | ''>(initialCategoryId || '');
  const [selectedSeller, setSelectedSeller] = useState<number | ''>(initialSellerId || '');
  const [selectedBrand, setSelectedBrand] = useState<number | ''>('');
  const [selectedModel, setSelectedModel] = useState<number | ''>('');
  const [selectedPartType, setSelectedPartType] = useState<number | ''>('');
  const [selectedQuality, setSelectedQuality] = useState<number | ''>('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [inStockOnly, setInStockOnly] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<'views' | 'newest' | 'price_asc' | 'price_desc'>('views');
  const [showDetailedFilters, setShowDetailedFilters] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    if (initialCategoryId !== null && initialCategoryId !== undefined) {
      setSelectedCategory(initialCategoryId);
    }
  }, [initialCategoryId]);

  useEffect(() => {
    if (initialSellerId !== null && initialSellerId !== undefined) {
      setSelectedSeller(initialSellerId);
    }
  }, [initialSellerId]);

  // Available brands filtered by selected category
  const filteredBrands = useMemo(() => {
    if (!selectedCategory) return brands;
    const catModelBrandIds = new Set(
      models.filter(m => m.categoryId === Number(selectedCategory)).map(m => m.brandId)
    );
    return brands.filter(b => catModelBrandIds.has(b.id));
  }, [brands, models, selectedCategory]);

  // Available models filtered by category and brand
  const filteredModels = useMemo(() => {
    return models.filter(m => {
      if (selectedCategory && m.categoryId !== Number(selectedCategory)) return false;
      if (selectedBrand && m.brandId !== Number(selectedBrand)) return false;
      return true;
    });
  }, [models, selectedCategory, selectedBrand]);

  // Handle category change
  const handleCategoryChange = (catId: number | '') => {
    setSelectedCategory(catId);
    setSelectedBrand('');
    setSelectedModel('');
  };

  // Handle brand change
  const handleBrandChange = (brandId: number | '') => {
    setSelectedBrand(brandId);
    setSelectedModel('');
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedSeller('');
    setSelectedBrand('');
    setSelectedModel('');
    setSelectedPartType('');
    setSelectedQuality('');
    setMinPrice('');
    setMaxPrice('');
    setInStockOnly(false);
    setSearchQuery('');
  };

  // Filtered and sorted products
  const filteredParts = useMemo(() => {
    return parts
      .filter(p => p.isActive && !p.isDeleted && p.moderationStatus === 2)
      .filter(p => {
        // Search text
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchSku = p.sku.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          if (!matchTitle && !matchSku && !matchDesc) return false;
        }

        // Seller filter
        if (selectedSeller && p.sellerId !== Number(selectedSeller)) return false;

        // Category filter
        if (selectedCategory && p.categoryId !== Number(selectedCategory)) return false;

        // Brand filter
        if (selectedBrand && p.brandId !== Number(selectedBrand)) return false;

        // Model filter
        if (selectedModel && p.deviceModelId !== Number(selectedModel)) return false;

        // Part type filter
        if (selectedPartType && p.partTypeId !== Number(selectedPartType)) return false;

        // Quality type filter
        if (selectedQuality && p.qualityTypeId !== Number(selectedQuality)) return false;

        // Price range
        if (minPrice && p.price < Number(minPrice)) return false;
        if (maxPrice && p.price > Number(maxPrice)) return false;

        // In stock
        if (inStockOnly && p.stockQuantity <= 0) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'views') return b.viewCount - a.viewCount;
        if (sortBy === 'newest') return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
        if (sortBy === 'price_asc') return a.price - b.price;
        if (sortBy === 'price_desc') return b.price - a.price;
        return 0;
      });
  }, [
    parts,
    searchQuery,
    selectedCategory,
    selectedBrand,
    selectedModel,
    selectedPartType,
    selectedQuality,
    minPrice,
    maxPrice,
    inStockOnly,
    sortBy,
  ]);

  // Count active filter count for badge
  const activeFiltersCount = [
    selectedCategory !== '',
    selectedBrand !== '',
    selectedModel !== '',
    selectedPartType !== '',
    selectedQuality !== '',
    minPrice !== '',
    maxPrice !== '',
    inStockOnly,
  ].filter(Boolean).length;

  const getCategoryIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('telefon')) return 'bi-phone';
    if (n.includes('planset')) return 'bi-tablet';
    if (n.includes('noutbuk')) return 'bi-laptop';
    if (n.includes('saat')) return 'bi-smartwatch';
    if (n.includes('qulaqlıq') || n.includes('qulaqliq')) return 'bi-headphones';
    if (n.includes('kompüter') || n.includes('pc')) return 'bi-display';
    if (n.includes('televizor')) return 'bi-tv';
    if (n.includes('konsol')) return 'bi-controller';
    if (n.includes('alət') || n.includes('alet') || n.includes('avadanlıq')) return 'bi-tools';
    return 'bi-cpu';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#111814] via-[#0d1310] to-[#0a0f0c] border border-[#212d26] p-6 sm:p-10 overflow-hidden">
        {/* Ambient glow decoration */}
        <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-80 h-80 rounded-full bg-[#a3ff12]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a3ff12]/10 border border-[#a3ff12]/20 text-[#a3ff12] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#a3ff12] animate-pulse"></span>
              Azərbaycanın İlk Elektron Hissələr Bazarı
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ustalar üçün daha <span className="text-[#a3ff12]">ağıllı</span> alış-veriş
            </h1>

            <p className="text-[#8b9891] text-sm sm:text-base leading-relaxed">
              Orijinal ekranlar, batareyalar, kameralar və mikrosxemlər. Bakı daxilində və bölgələrə sürətli çatdırılma, zəmanət və birbaşa anbardar əlaqəsi.
            </p>

            {/* Hero Search & Filter trigger */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-[#a3ff12] text-lg"></i>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Ehtiyat hissəsi, brend və ya model axtar..."
                    className="w-full bg-[#161e19] text-white border border-[#2a3830] focus:border-[#a3ff12] rounded-2xl py-3 pl-11 pr-4 text-sm outline-none shadow-inner"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8b9891] hover:text-white"
                    >
                      <i className="bi bi-x-circle-fill"></i>
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setShowDetailedFilters(!showDetailedFilters)}
                  className={`px-5 py-3 rounded-2xl border text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    showDetailedFilters || activeFiltersCount > 0
                      ? 'bg-[#a3ff12] text-black border-[#a3ff12]'
                      : 'bg-[#161e19] text-white border-[#2a3830] hover:border-[#a3ff12]'
                  }`}
                >
                  <i className="bi bi-sliders text-base"></i>
                  <span>Ətraflı axtarış</span>
                  {activeFiltersCount > 0 && (
                    <span className="w-5 h-5 rounded-full bg-black text-[#a3ff12] font-bold text-xs flex items-center justify-center">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>
              </div>

              {/* Detailed Filter Dropdown Container */}
              {showDetailedFilters && (
                <div className="p-5 rounded-2xl bg-[#161e19] border border-[#2a3830] text-left space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between border-b border-[#212d26] pb-3">
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <i className="bi bi-funnel text-[#a3ff12]"></i> Dəqiq Filtrləmə
                    </span>
                    <button
                      onClick={resetFilters}
                      className="text-xs text-[#8b9891] hover:text-[#a3ff12] cursor-pointer"
                    >
                      Bütün filtrləri sıfırla
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                    {/* Category */}
                    <div>
                      <label className="block text-[#8b9891] font-medium mb-1">Kateqoriya</label>
                      <select
                        value={selectedCategory}
                        onChange={e => handleCategoryChange(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-[#111814] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                      >
                        <option value="">Bütün kateqoriyalar</option>
                        {categories.map(c => (
                          <option key={c.id} value={c.id}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Brand */}
                    <div>
                      <label className="block text-[#8b9891] font-medium mb-1">Brend</label>
                      <select
                        value={selectedBrand}
                        onChange={e => handleBrandChange(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-[#111814] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                      >
                        <option value="">Bütün brendlər</option>
                        {filteredBrands.map(b => (
                          <option key={b.id} value={b.id}>
                            {b.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Model */}
                    <div>
                      <label className="block text-[#8b9891] font-medium mb-1">Cihaz Modeli</label>
                      <select
                        value={selectedModel}
                        onChange={e => setSelectedModel(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-[#111814] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                      >
                        <option value="">Bütün modellər</option>
                        {filteredModels.map(m => (
                          <option key={m.id} value={m.id}>
                            {m.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Part Type */}
                    <div>
                      <label className="block text-[#8b9891] font-medium mb-1">Hissə Növü</label>
                      <select
                        value={selectedPartType}
                        onChange={e => setSelectedPartType(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-[#111814] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                      >
                        <option value="">Bütün hissələr</option>
                        {partTypes.map(pt => (
                          <option key={pt.id} value={pt.id}>
                            {pt.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Quality Type */}
                    <div>
                      <label className="block text-[#8b9891] font-medium mb-1">Vəziyyəti / Keyfiyyət</label>
                      <select
                        value={selectedQuality}
                        onChange={e => setSelectedQuality(e.target.value ? Number(e.target.value) : '')}
                        className="w-full bg-[#111814] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                      >
                        <option value="">İstənilən vəziyyət</option>
                        {qualityTypes.map(qt => (
                          <option key={qt.id} value={qt.id}>
                            {qt.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Price Range */}
                    <div>
                      <label className="block text-[#8b9891] font-medium mb-1">Qiymət aralığı (AZN)</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={minPrice}
                          onChange={e => setMinPrice(e.target.value)}
                          placeholder="Min"
                          className="w-1/2 bg-[#111814] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                        />
                        <span className="text-[#8b9891]">-</span>
                        <input
                          type="number"
                          value={maxPrice}
                          onChange={e => setMaxPrice(e.target.value)}
                          placeholder="Maks"
                          className="w-1/2 bg-[#111814] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom options */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-white">
                      <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={e => setInStockOnly(e.target.checked)}
                        className="w-4 h-4 accent-[#a3ff12] rounded"
                      />
                      <span>Yalnız anbarda / stokda olanlar</span>
                    </label>

                    <button
                      onClick={() => setShowDetailedFilters(false)}
                      className="px-4 py-2 rounded-xl bg-[#a3ff12] text-black font-semibold text-xs cursor-pointer hover:bg-[#b4ff3d]"
                    >
                      Nəticələri göstər ({filteredParts.length})
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-[#8b9891]">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-sm">{parts.length}</span> aktiv ehtiyat hissəsi
              </div>
              <span className="text-[#a3ff12]">•</span>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-sm">{sellers.length}</span> təsdiqli anbardar & servis
              </div>
              <span className="text-[#a3ff12]">•</span>
              <div className="flex items-center gap-1.5 text-[#a3ff12]">
                <i className="bi bi-clock-history"></i> Bu gün yenilənib
              </div>
            </div>
          </div>

          {/* Graphic Icon Display */}
          <div className="hidden lg:flex relative w-64 h-64 items-center justify-center shrink-0">
            <div className="absolute inset-0 rounded-full border border-[#a3ff12]/20 animate-spin" style={{ animationDuration: '25s' }} />
            <div className="absolute inset-4 rounded-full border border-dashed border-[#a3ff12]/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-[#161e19] to-[#212d26] border border-[#a3ff12]/30 flex flex-col items-center justify-center text-center p-3 shadow-2xl relative">
              <i className="bi bi-lightning-charge-fill text-4xl text-[#a3ff12] mb-1"></i>
              <span className="text-[10px] font-bold text-white tracking-widest uppercase">REAL STOK</span>
              <span className="text-[9px] text-[#a3ff12] font-semibold">BAKI ÇATDIRILMA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[#a3ff12] text-xs font-bold uppercase tracking-wider">Avadanlıq seçimi</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Kateqoriyalar</h2>
          </div>
          {selectedCategory && (
            <button
              onClick={() => handleCategoryChange('')}
              className="text-xs text-[#a3ff12] hover:underline cursor-pointer flex items-center gap-1"
            >
              Hamısına bax <i className="bi bi-arrow-right"></i>
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {categories.slice(0, 12).map(cat => {
            const count = parts.filter(p => p.categoryId === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(isSelected ? '' : cat.id)}
                className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer group ${
                  isSelected
                    ? 'bg-[#1a241e] border-[#a3ff12] shadow-lg shadow-[#a3ff12]/5'
                    : 'bg-[#111814] border-[#212d26] hover:border-[#3c5245] hover:bg-[#161e19]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                      isSelected
                        ? 'bg-[#a3ff12] text-black'
                        : 'bg-[#a3ff12]/10 text-[#a3ff12] group-hover:scale-110 transition-transform'
                    }`}
                  >
                    <i className={`bi ${getCategoryIcon(cat.name)}`}></i>
                  </div>
                  <i
                    className={`bi bi-arrow-up-right text-xs transition-colors ${
                      isSelected ? 'text-[#a3ff12]' : 'text-[#8b9891] group-hover:text-white'
                    }`}
                  ></i>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm line-clamp-1">{cat.name}</h3>
                  <p className="text-xs text-[#8b9891] mt-0.5">{count} hissə</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Catalog / Popular Parts Section */}
      <section className="space-y-4">
        {/* Section Header & Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#212d26] pb-4">
          <div>
            <span className="text-[#a3ff12] text-xs font-bold uppercase tracking-wider">Vitrin</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {searchQuery ? `Axtarış: "${searchQuery}"` : selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : 'Populyar Ehtiyat Hissələri'}
            </h2>
          </div>

          {/* Quick part filter chips & sorting */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedPartType('')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                selectedPartType === ''
                  ? 'bg-[#a3ff12] text-black'
                  : 'bg-[#161e19] text-[#8b9891] hover:text-white border border-[#2a3830]'
              }`}
            >
              Hamısı
            </button>
            {partTypes.slice(0, 5).map(pt => (
              <button
                key={pt.id}
                onClick={() => setSelectedPartType(selectedPartType === pt.id ? '' : pt.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                  selectedPartType === pt.id
                    ? 'bg-[#a3ff12] text-black'
                    : 'bg-[#161e19] text-[#8b9891] hover:text-white border border-[#2a3830]'
                }`}
              >
                {pt.name}
              </button>
            ))}

            <div className="h-4 w-px bg-[#212d26] mx-1 hidden sm:block"></div>

            {/* Sort Selector */}
            <div className="flex items-center gap-1 text-xs text-[#8b9891]">
              <span>Sırala:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="bg-[#161e19] text-white border border-[#2a3830] rounded-lg px-2 py-1 outline-none text-xs"
              >
                <option value="views">Ən çox baxılan</option>
                <option value="newest">Ən yeni</option>
                <option value="price_asc">Qiymət: Ucuzdan bahaya</option>
                <option value="price_desc">Qiymət: Bahadan ucuza</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center rounded-lg border border-[#2a3830] p-0.5 bg-[#161e19]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded text-xs cursor-pointer ${
                  viewMode === 'grid' ? 'bg-[#a3ff12] text-black' : 'text-[#8b9891] hover:text-white'
                }`}
                title="Şəbəkə görünüşü"
              >
                <i className="bi bi-grid-fill"></i>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded text-xs cursor-pointer ${
                  viewMode === 'list' ? 'bg-[#a3ff12] text-black' : 'text-[#8b9891] hover:text-white'
                }`}
                title="Siyahı görünüşü"
              >
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Results summary bar */}
        <div className="flex items-center justify-between text-xs text-[#8b9891]">
          <span>{filteredParts.length} nəticə tapıldı</span>
          {activeFiltersCount > 0 && (
            <button
              onClick={resetFilters}
              className="text-[#a3ff12] hover:underline cursor-pointer"
            >
              Filtrləri təmizlə
            </button>
          )}
        </div>

        {/* Product List/Grid */}
        {filteredParts.length === 0 ? (
          <div className="text-center py-16 bg-[#111814] rounded-2xl border border-[#212d26] space-y-3">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto text-[#8b9891] text-2xl">
              <i className="bi bi-search"></i>
            </div>
            <h3 className="text-base font-semibold text-white">Heç bir ehtiyat hissəsi tapılmadı</h3>
            <p className="text-xs text-[#8b9891] max-w-sm mx-auto">
              Axtarış sözünü dəyişdirin və ya filtrləri sıfırlayaraq yenidən cəhd edin.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-xl bg-[#a3ff12] text-black text-xs font-bold hover:bg-[#b4ff3d] cursor-pointer"
            >
              Bütün filtrləri sıfırla
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredParts.map(part => {
              const seller = sellers.find(s => s.id === part.sellerId);
              const quality = qualityTypes.find(q => q.id === part.qualityTypeId);
              const isFav = favorites.includes(part.id);
              const mainImg = part.images[0]?.imageUrl || '/images/images.jpg';

              return (
                <div
                  key={part.id}
                  className="group rounded-2xl bg-[#111814] border border-[#212d26] hover:border-[#3c5245] p-4 flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-black/40 relative"
                >
                  {/* Top Badges & Favorite */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-md bg-[#a3ff12]/10 text-[#a3ff12] text-[10px] font-bold uppercase tracking-wider border border-[#a3ff12]/20">
                      {quality?.code === 'ORIGINAL_NEW' ? 'Zavod Yeni' : quality?.name || 'Orijinal'}
                    </span>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        toggleFavorite(part.id);
                      }}
                      className="text-[#8b9891] hover:text-[#a3ff12] cursor-pointer transition-colors p-1"
                      title={isFav ? 'Sevimlilərdən çıxar' : 'Sevimlilərə əlavə et'}
                    >
                      <i className={`bi ${isFav ? 'bi-heart-fill text-red-500' : 'bi-heart'} text-base`}></i>
                    </button>
                  </div>

                  {/* Thumbnail */}
                  <div
                    onClick={() => onSelectPart(part)}
                    className="h-36 w-full flex items-center justify-center p-2 rounded-xl bg-white/5 cursor-pointer group-hover:bg-white/10 transition-colors mb-3 overflow-hidden"
                  >
                    <img
                      src={mainImg}
                      alt={part.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={e => {
                        (e.currentTarget as HTMLImageElement).src = '/images/images.jpg';
                      }}
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span className="text-[#8b9891] truncate">{part.sku}</span>
                    <span className={`flex items-center gap-1 font-medium ${part.stockQuantity > 0 ? 'text-[#a3ff12]' : 'text-red-400'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${part.stockQuantity > 0 ? 'bg-[#a3ff12]' : 'bg-red-400'}`}></span>
                      {part.stockQuantity > 0 ? `Stokda ${part.stockQuantity} ədəd` : 'Bitib'}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    onClick={() => onSelectPart(part)}
                    className="font-semibold text-white text-sm hover:text-[#a3ff12] transition-colors cursor-pointer line-clamp-2 mb-1"
                    title={part.title}
                  >
                    {part.title}
                  </h3>

                  <p className="text-xs text-[#8b9891] line-clamp-1 mb-3">
                    {part.description}
                  </p>

                  {/* Bottom: Price & Seller */}
                  <div className="border-t border-[#212d26] pt-3 mt-auto flex items-end justify-between">
                    <div>
                      <div className="text-lg font-extrabold text-[#a3ff12] leading-tight">
                        {part.price}{' '}
                        <span className="text-xs font-normal text-white">{part.currency}</span>
                      </div>
                      <div className="text-[11px] text-[#8b9891] flex items-center gap-1 mt-0.5 truncate max-w-[140px]">
                        <i className="bi bi-shop text-[#a3ff12]"></i>
                        <span className="truncate">{seller?.companyName || 'Rəsmi Servis'}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectPart(part)}
                      className="w-9 h-9 rounded-xl bg-[#a3ff12] text-black hover:bg-[#b4ff3d] flex items-center justify-center text-sm cursor-pointer transition-colors shadow-sm"
                      title="Ətraflı bax"
                    >
                      <i className="bi bi-arrow-right font-bold"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List View */
          <div className="divide-y divide-[#212d26] rounded-2xl bg-[#111814] border border-[#212d26] overflow-hidden">
            {filteredParts.map(part => {
              const seller = sellers.find(s => s.id === part.sellerId);
              const quality = qualityTypes.find(q => q.id === part.qualityTypeId);
              const isFav = favorites.includes(part.id);
              const mainImg = part.images[0]?.imageUrl || '/images/images.jpg';

              return (
                <div
                  key={part.id}
                  onClick={() => onSelectPart(part)}
                  className="p-4 hover:bg-[#161e19] flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                      src={mainImg}
                      alt={part.title}
                      className="w-16 h-16 object-contain rounded-xl bg-white/5 p-1 shrink-0"
                      onError={e => {
                        (e.currentTarget as HTMLImageElement).src = '/images/images.jpg';
                      }}
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-0.5 rounded bg-[#a3ff12]/10 text-[#a3ff12] font-semibold">
                          {quality?.name || 'Orijinal'}
                        </span>
                        <span className="text-xs text-[#8b9891]">{part.sku}</span>
                      </div>
                      <h3 className="font-semibold text-white text-sm hover:text-[#a3ff12]">
                        {part.title}
                      </h3>
                      <div className="text-xs text-[#8b9891] flex items-center gap-2 mt-1">
                        <span>Servis: {seller?.companyName}</span>
                        <span>•</span>
                        <span className="text-[#a3ff12]">Stok: {part.stockQuantity} ədəd</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#a3ff12]">
                        {part.price} {part.currency}
                      </div>
                      <div className="text-[11px] text-[#8b9891]">Zəmanət: {part.warrantyMonths} ay</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          toggleFavorite(part.id);
                        }}
                        className="p-2 text-[#8b9891] hover:text-red-400 cursor-pointer"
                      >
                        <i className={`bi ${isFav ? 'bi-heart-fill text-red-500' : 'bi-heart'} text-lg`}></i>
                      </button>

                      <button
                        onClick={e => {
                          e.stopPropagation();
                          onSelectPart(part);
                        }}
                        className="px-4 py-2 rounded-xl bg-[#a3ff12] text-black font-semibold text-xs hover:bg-[#b4ff3d] cursor-pointer"
                      >
                        Ətraflı
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
