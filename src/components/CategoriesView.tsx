import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const CategoriesView: React.FC<{ onSelectCategory: (categoryId: number) => void }> = ({ onSelectCategory }) => {
  const { categories, models, parts, brands } = useApp();
  const [filter, setFilter] = useState('');

  const filteredCategories = categories.filter(c =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div className="rounded-3xl bg-[#111814] border border-[#212d26] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-[#a3ff12] text-xs font-bold uppercase tracking-wider">Kataloq strukturu</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Bütün Kateqoriyalar və Modellər
          </h1>
          <p className="text-xs sm:text-sm text-[#8b9891] mt-1 max-w-xl">
            Cihaz növünə uyğun ehtiyat hissələrini asanlıqla tapın. Telefon, kompüter, saat və digər elektronika bölmələri.
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <input
            type="text"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            placeholder="Kateqoriya axtar..."
            className="w-full bg-[#161e19] text-white border border-[#2a3830] focus:border-[#a3ff12] rounded-2xl py-2.5 pl-10 pr-4 text-xs outline-none"
          />
          <i className="bi bi-search absolute left-3.5 top-3 text-[#8b9891] text-xs"></i>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map(cat => {
          const catModels = models.filter(m => m.categoryId === cat.id);
          const catPartsCount = parts.filter(p => p.categoryId === cat.id && p.isActive).length;
          const brandIds = Array.from(new Set(catModels.map(m => m.brandId)));
          const catBrands = brands.filter(b => brandIds.includes(b.id));

          return (
            <div
              key={cat.id}
              className="rounded-3xl bg-[#111814] border border-[#212d26] hover:border-[#3c5245] p-6 flex flex-col justify-between transition-all hover:shadow-xl space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#a3ff12]/10 text-[#a3ff12] flex items-center justify-center text-lg font-bold">
                    <i className="bi bi-folder2-open"></i>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/5 text-[#a3ff12]">
                    {catPartsCount} aktiv hissə
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">{cat.name}</h3>

                {catBrands.length > 0 && (
                  <div className="mt-3">
                    <span className="text-[11px] text-[#8b9891] block mb-1">Mövcud Brendlər:</span>
                    <div className="flex flex-wrap gap-1">
                      {catBrands.slice(0, 5).map(b => (
                        <span key={b.id} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white">
                          {b.name}
                        </span>
                      ))}
                      {catBrands.length > 5 && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#8b9891]">
                          +{catBrands.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => onSelectCategory(cat.id)}
                className="w-full py-2.5 rounded-xl bg-[#161e19] border border-[#2a3830] hover:border-[#a3ff12] text-white hover:text-[#a3ff12] font-semibold text-xs cursor-pointer transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Bu kateqoriyaya bax</span>
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
