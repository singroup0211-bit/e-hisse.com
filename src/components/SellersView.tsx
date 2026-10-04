import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const SellersView: React.FC<{ onSelectSeller: (sellerId: number) => void }> = ({ onSelectSeller }) => {
  const { sellers, parts } = useApp();
  const [sellerSearch, setSellerSearch] = useState('');

  const filteredSellers = sellers.filter(s => {
    if (!sellerSearch.trim()) return true;
    const q = sellerSearch.toLowerCase();
    return (
      s.companyName.toLowerCase().includes(q) ||
      s.contactPerson.toLowerCase().includes(q) ||
      (s.address && s.address.toLowerCase().includes(q))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div className="rounded-3xl bg-[#111814] border border-[#212d26] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-[#a3ff12] text-xs font-bold uppercase tracking-wider">Tərəfdaş Şəbəkəsi</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Təsdiqlənmiş Satıcılar və Servislər
          </h1>
          <p className="text-xs sm:text-sm text-[#8b9891] mt-1 max-w-xl">
            e-hisse.az üzərində fəaliyyət göstərən peşəkar servis mərkəzləri və anbardarlar. Birbaşa əlaqə saxlayaraq orijinal ehtiyat hissələrini əldə edin.
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <input
            type="text"
            value={sellerSearch}
            onChange={e => setSellerSearch(e.target.value)}
            placeholder="Satıcı və ya ünvan axtar..."
            className="w-full bg-[#161e19] text-white border border-[#2a3830] focus:border-[#a3ff12] rounded-2xl py-2.5 pl-10 pr-4 text-xs outline-none"
          />
          <i className="bi bi-search absolute left-3.5 top-3 text-[#8b9891] text-xs"></i>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSellers.map(seller => {
          const sellerPartsCount = parts.filter(p => p.sellerId === seller.id && p.isActive).length;
          const cleanWa = (seller.whatsAppNumber || seller.phone).replace(/[^0-9]/g, '');

          return (
            <div
              key={seller.id}
              className="rounded-3xl bg-[#111814] border border-[#212d26] hover:border-[#3c5245] p-6 flex flex-col justify-between transition-all hover:shadow-xl space-y-5"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#a3ff12]/10 border border-[#a3ff12]/20 text-[#a3ff12] flex items-center justify-center text-xl font-bold">
                    <i className="bi bi-shop"></i>
                  </div>

                  <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full text-amber-400 text-xs font-bold">
                    <i className="bi bi-star-fill"></i>
                    <span>{seller.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white">{seller.companyName}</h3>
                <div className="text-xs text-[#8b9891] mt-0.5">
                  Məsul şəxs: <span className="text-white font-medium">{seller.contactPerson}</span>
                </div>

                {seller.address && (
                  <div className="flex items-center gap-2 text-xs text-[#8b9891] mt-3">
                    <i className="bi bi-geo-alt text-[#a3ff12]"></i>
                    <span>{seller.address}</span>
                  </div>
                )}

                <div className="flex items-center gap-2 text-xs text-[#8b9891] mt-1.5">
                  <i className="bi bi-box-seam text-[#a3ff12]"></i>
                  <span>Aktiv hissələr: <strong className="text-white">{sellerPartsCount} ədəd</strong></span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#212d26] space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/${cleanWa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 font-semibold text-xs border border-emerald-500/30 transition-colors"
                  >
                    <i className="bi bi-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${seller.phone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#161e19] hover:bg-[#212d26] text-white font-semibold text-xs border border-[#2a3830] transition-colors"
                  >
                    <i className="bi bi-telephone text-[#a3ff12]"></i>
                    <span>Zəng et</span>
                  </a>
                </div>

                <button
                  onClick={() => onSelectSeller(seller.id)}
                  className="w-full py-2.5 rounded-xl bg-[#a3ff12] text-black font-extrabold text-xs hover:bg-[#b4ff3d] cursor-pointer transition-colors"
                >
                  Elanlarına bax ({sellerPartsCount})
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
