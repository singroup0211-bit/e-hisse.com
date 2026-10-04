import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SparePart } from '../types';

export const AdminView: React.FC<{ onSelectPart: (part: SparePart) => void }> = ({ onSelectPart }) => {
  const {
    parts,
    users,
    sellers,
    categories,
    brands,
    activityLogs,
    approvePart,
    rejectPart,
    approveUser,
    toggleBlockUser,
    updateUserRole,
    deletePart,
    updatePart,
    addCategory,
    addBrand,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'pending' | 'all_parts' | 'users' | 'taxonomy' | 'logs'>('pending');
  const [rejectModalPart, setRejectModalPart] = useState<SparePart | null>(null);
  const [rejectionReason, setRejectionReason] = useState('Standartlara uyğun olmayan şəkil və ya qeyri-dəqiq təsvir');
  const [newCatName, setNewCatName] = useState('');
  const [newBrandName, setNewBrandName] = useState('');
  const [partSearch, setPartSearch] = useState('');
  const [userSearch, setUserSearch] = useState('');

  const pendingParts = parts.filter(p => p.moderationStatus === 1 && !p.isDeleted);
  const pendingUsers = users.filter(u => u.approvalStatus === 1);

  const displayedParts = parts.filter(p => {
    if (!partSearch.trim()) return true;
    const q = partSearch.toLowerCase();
    return p.title.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
  });

  const displayedUsers = users.filter(u => {
    if (!userSearch.trim()) return true;
    const q = userSearch.toLowerCase();
    return (
      u.firstName.toLowerCase().includes(q) ||
      u.lastName.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q) ||
      u.phone.includes(q)
    );
  });

  const handleConfirmReject = () => {
    if (rejectModalPart) {
      rejectPart(rejectModalPart.id, rejectionReason);
      setRejectModalPart(null);
    }
  };

  const handleAddCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCatName.trim()) {
      addCategory(newCatName.trim());
      setNewCatName('');
    }
  };

  const handleAddBrandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newBrandName.trim()) {
      addBrand(newBrandName.trim());
      setNewBrandName('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header Card */}
      <div className="rounded-3xl bg-[#111814] border border-[#212d26] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Baş İnzibatçı (Admin) İdarəetmə Paneli
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            e-hisse.az Sistem İdarəetməsi
          </h1>
          <p className="text-xs text-[#8b9891] mt-0.5">
            Daxil olan elanları təsdiqləyin, istifadəçi və ustaları idarə edin, fəaliyyət jurnalını izləyin.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-semibold">
            Gözləyən Elanlar: {pendingParts.length}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold">
            Gözləyən Qeydiyyat: {pendingUsers.length}
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-[#111814] border border-[#212d26]">
          <div className="text-xs text-[#8b9891] mb-1">Cəmi Hissələr</div>
          <div className="text-2xl font-black text-white">{parts.length}</div>
          <div className="text-[11px] text-[#a3ff12] mt-1">bazada mövcuddur</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#111814] border border-[#212d26]">
          <div className="text-xs text-[#8b9891] mb-1">Gözləyən Elanlar</div>
          <div className="text-2xl font-black text-amber-400">{pendingParts.length}</div>
          <div className="text-[11px] text-amber-400/80 mt-1">moderasiya lazımdır</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#111814] border border-[#212d26]">
          <div className="text-xs text-[#8b9891] mb-1">Qeydiyyatlı İstifadəçilər</div>
          <div className="text-2xl font-black text-white">{users.length}</div>
          <div className="text-[11px] text-blue-400 mt-1">{pendingUsers.length} təsdiq gözləyir</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#111814] border border-[#212d26]">
          <div className="text-xs text-[#8b9891] mb-1">Aktiv Servis & Anbardar</div>
          <div className="text-2xl font-black text-[#a3ff12]">{sellers.length}</div>
          <div className="text-[11px] text-[#8b9891] mt-1">təsdiqlənmiş profil</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#212d26] gap-4 text-sm font-semibold overflow-x-auto hide-scrollbar">
        <button
          onClick={() => setActiveTab('pending')}
          className={`pb-3 cursor-pointer flex items-center gap-2 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'pending'
              ? 'border-amber-400 text-amber-400'
              : 'border-transparent text-[#8b9891] hover:text-white'
          }`}
        >
          <i className="bi bi-shield-exclamation"></i>
          <span>Moderasiya Gözləyən ({pendingParts.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('all_parts')}
          className={`pb-3 cursor-pointer flex items-center gap-2 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'all_parts'
              ? 'border-[#a3ff12] text-[#a3ff12]'
              : 'border-transparent text-[#8b9891] hover:text-white'
          }`}
        >
          <i className="bi bi-boxes"></i>
          <span>Bütün Elanlar ({parts.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('users')}
          className={`pb-3 cursor-pointer flex items-center gap-2 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'users'
              ? 'border-blue-400 text-blue-400'
              : 'border-transparent text-[#8b9891] hover:text-white'
          }`}
        >
          <i className="bi bi-people"></i>
          <span>İstifadəçilər & Ustalar ({users.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('taxonomy')}
          className={`pb-3 cursor-pointer flex items-center gap-2 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'taxonomy'
              ? 'border-[#a3ff12] text-[#a3ff12]'
              : 'border-transparent text-[#8b9891] hover:text-white'
          }`}
        >
          <i className="bi bi-tags"></i>
          <span>Kateqoriya & Brendlər</span>
        </button>

        <button
          onClick={() => setActiveTab('logs')}
          className={`pb-3 cursor-pointer flex items-center gap-2 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'logs'
              ? 'border-[#a3ff12] text-[#a3ff12]'
              : 'border-transparent text-[#8b9891] hover:text-white'
          }`}
        >
          <i className="bi bi-journal-text"></i>
          <span>Fəaliyyət Jurnalı</span>
        </button>
      </div>

      {/* Tab 1: Pending Moderation */}
      {activeTab === 'pending' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">Yoxlama Gözləyən Elanlar</h3>
            <span className="text-xs text-[#8b9891]">{pendingParts.length} elan</span>
          </div>

          {pendingParts.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-[#111814] border border-[#212d26] space-y-2">
              <i className="bi bi-check-circle text-3xl text-emerald-400"></i>
              <div className="text-sm font-semibold text-white">Bütün elanlar yoxlanılıb</div>
              <p className="text-xs text-[#8b9891]">Hazırda baxılmalı gözləyən yeni elan yoxdur.</p>
            </div>
          ) : (
            <div className="divide-y divide-[#212d26] rounded-2xl bg-[#111814] border border-[#212d26] overflow-hidden">
              {pendingParts.map(part => {
                const seller = sellers.find(s => s.id === part.sellerId);
                return (
                  <div key={part.id} className="p-4 hover:bg-[#161e19] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={part.images[0]?.imageUrl || '/images/images.jpg'}
                        alt={part.title}
                        className="w-16 h-16 object-contain rounded-xl bg-white/5 p-1 shrink-0"
                        onError={e => {
                          (e.currentTarget as HTMLImageElement).src = '/images/images.jpg';
                        }}
                      />
                      <div>
                        <div className="text-xs text-[#8b9891] flex items-center gap-2 mb-0.5">
                          <span className="font-mono">{part.sku}</span>
                          <span>•</span>
                          <span>Servis: {seller?.companyName || 'Məlum deyil'}</span>
                          <span>•</span>
                          <span>{part.createdDate}</span>
                        </div>
                        <h4
                          onClick={() => onSelectPart(part)}
                          className="font-bold text-white text-sm hover:text-[#a3ff12] cursor-pointer"
                        >
                          {part.title}
                        </h4>
                        <div className="text-xs text-[#a3ff12] font-semibold mt-1">
                          {part.price} AZN • Stok: {part.stockQuantity} ədəd
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end md:self-auto">
                      <button
                        onClick={() => onSelectPart(part)}
                        className="px-3 py-1.5 rounded-xl border border-[#2a3830] text-xs font-semibold text-white hover:border-white cursor-pointer"
                      >
                        Baxış
                      </button>
                      <button
                        onClick={() => setRejectModalPart(part)}
                        className="px-3 py-1.5 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs font-semibold cursor-pointer"
                      >
                        İmtina et
                      </button>
                      <button
                        onClick={() => approvePart(part.id)}
                        className="px-4 py-1.5 rounded-xl bg-emerald-500 text-black font-extrabold text-xs hover:bg-emerald-400 cursor-pointer shadow-sm"
                      >
                        Təsdiqlə
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: All Parts */}
      {activeTab === 'all_parts' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                value={partSearch}
                onChange={e => setPartSearch(e.target.value)}
                placeholder="Elanlarda axtar (ad və ya SKU)..."
                className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl py-2 pl-9 pr-3 text-xs outline-none focus:border-[#a3ff12]"
              />
              <i className="bi bi-search absolute left-3 top-2.5 text-[#8b9891] text-xs"></i>
            </div>
            <span className="text-xs text-[#8b9891]">{displayedParts.length} elan</span>
          </div>

          <div className="rounded-2xl bg-[#111814] border border-[#212d26] overflow-x-auto">
            <table className="w-full text-left text-xs text-white">
              <thead className="bg-[#161e19] border-b border-[#212d26] text-[#8b9891] font-semibold text-[11px] uppercase">
                <tr>
                  <th className="p-3">Hissə</th>
                  <th className="p-3">Qiymət</th>
                  <th className="p-3">Stok</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Əməliyyatlar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#212d26]">
                {displayedParts.slice(0, 50).map(part => (
                  <tr key={part.id} className="hover:bg-[#161e19]/60">
                    <td className="p-3">
                      <div className="font-semibold text-white line-clamp-1">{part.title}</div>
                      <div className="text-[11px] text-[#8b9891] font-mono">{part.sku}</div>
                    </td>
                    <td className="p-3 font-bold text-[#a3ff12]">{part.price} AZN</td>
                    <td className="p-3">{part.stockQuantity} ədəd</td>
                    <td className="p-3">
                      <button
                        onClick={() => updatePart(part.id, { isActive: !part.isActive })}
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold cursor-pointer ${
                          part.isActive
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : 'bg-zinc-500/20 text-zinc-400'
                        }`}
                      >
                        {part.isActive ? 'Aktiv' : 'Deaktiv'}
                      </button>
                    </td>
                    <td className="p-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onSelectPart(part)}
                          className="p-1.5 text-[#8b9891] hover:text-[#a3ff12] cursor-pointer"
                          title="Baxış"
                        >
                          <i className="bi bi-eye"></i>
                        </button>
                        <button
                          onClick={() => deletePart(part.id)}
                          className="p-1.5 text-[#8b9891] hover:text-red-400 cursor-pointer"
                          title="Sil"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Users & Technicians */}
      {activeTab === 'users' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                value={userSearch}
                onChange={e => setUserSearch(e.target.value)}
                placeholder="İstifadəçilərdə axtar (ad, email, nömrə)..."
                className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl py-2 pl-9 pr-3 text-xs outline-none focus:border-[#a3ff12]"
              />
              <i className="bi bi-search absolute left-3 top-2.5 text-[#8b9891] text-xs"></i>
            </div>
            <span className="text-xs text-[#8b9891]">{displayedUsers.length} istifadəçi</span>
          </div>

          <div className="rounded-2xl bg-[#111814] border border-[#212d26] overflow-x-auto">
            <table className="w-full text-left text-xs text-white">
              <thead className="bg-[#161e19] border-b border-[#212d26] text-[#8b9891] font-semibold text-[11px] uppercase">
                <tr>
                  <th className="p-3">İstifadəçi</th>
                  <th className="p-3">Əlaqə</th>
                  <th className="p-3">Rol</th>
                  <th className="p-3">Qeydiyyat Statusu</th>
                  <th className="p-3 text-right">Əməliyyatlar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#212d26]">
                {displayedUsers.map(u => (
                  <tr key={u.id} className="hover:bg-[#161e19]/60">
                    <td className="p-3">
                      <div className="font-semibold text-white">
                        {u.firstName} {u.lastName}
                      </div>
                      <div className="text-[11px] text-[#8b9891]">@{u.username}</div>
                    </td>

                    <td className="p-3">
                      <div>{u.phone}</div>
                      <div className="text-[11px] text-[#8b9891]">{u.email || '-'}</div>
                    </td>

                    <td className="p-3">
                      <select
                        value={u.role}
                        onChange={e => updateUserRole(u.id, Number(e.target.value))}
                        className="bg-[#161e19] border border-[#2a3830] text-xs rounded-lg p-1 text-white outline-none"
                      >
                        <option value={1}>Admin</option>
                        <option value={2}>Usta</option>
                        <option value={3}>Anbardar</option>
                      </select>
                    </td>

                    <td className="p-3">
                      {u.approvalStatus === 2 ? (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                          Təsdiqli
                        </span>
                      ) : (
                        <button
                          onClick={() => approveUser(u.id)}
                          className="px-2 py-1 rounded-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 text-[10px] font-bold cursor-pointer"
                        >
                          Təsdiq gözləyir (Təsdiqlə)
                        </button>
                      )}
                    </td>

                    <td className="p-3 text-right">
                      <button
                        onClick={() => toggleBlockUser(u.id)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                          u.isBlocked
                            ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                            : 'bg-[#161e19] text-[#8b9891] hover:text-red-400'
                        }`}
                      >
                        {u.isBlocked ? 'Blokdan çıxar' : 'Blokla'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Categories & Brands */}
      {activeTab === 'taxonomy' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Categories Form & List */}
          <div className="rounded-2xl bg-[#111814] border border-[#212d26] p-5 space-y-4">
            <h3 className="text-base font-bold text-white">Kateqoriyalar ({categories.length})</h3>

            <form onSubmit={handleAddCategorySubmit} className="flex gap-2">
              <input
                type="text"
                value={newCatName}
                onChange={e => setNewCatName(e.target.value)}
                placeholder="Yeni kateqoriya adı..."
                className="flex-1 bg-[#161e19] text-white border border-[#2a3830] rounded-xl px-3 py-2 text-xs outline-none focus:border-[#a3ff12]"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#a3ff12] text-black font-bold text-xs hover:bg-[#b4ff3d] cursor-pointer"
              >
                Əlavə et
              </button>
            </form>

            <div className="max-h-80 overflow-y-auto divide-y divide-[#212d26] text-xs">
              {categories.map(c => (
                <div key={c.id} className="py-2 flex items-center justify-between text-white">
                  <span>{c.name}</span>
                  <span className="text-[#8b9891] text-[10px]">ID: {c.id}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brands Form & List */}
          <div className="rounded-2xl bg-[#111814] border border-[#212d26] p-5 space-y-4">
            <h3 className="text-base font-bold text-white">Cihaz Brendləri ({brands.length})</h3>

            <form onSubmit={handleAddBrandSubmit} className="flex gap-2">
              <input
                type="text"
                value={newBrandName}
                onChange={e => setNewBrandName(e.target.value)}
                placeholder="Yeni brend adı (məs. Google, OnePlus)..."
                className="flex-1 bg-[#161e19] text-white border border-[#2a3830] rounded-xl px-3 py-2 text-xs outline-none focus:border-[#a3ff12]"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#a3ff12] text-black font-bold text-xs hover:bg-[#b4ff3d] cursor-pointer"
              >
                Əlavə et
              </button>
            </form>

            <div className="max-h-80 overflow-y-auto divide-y divide-[#212d26] text-xs">
              {brands.map(b => (
                <div key={b.id} className="py-2 flex items-center justify-between text-white">
                  <span>{b.name}</span>
                  <span className="text-[#8b9891] text-[10px]">ID: {b.id}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Activity Logs */}
      {activeTab === 'logs' && (
        <div className="rounded-2xl bg-[#111814] border border-[#212d26] p-5 space-y-4">
          <h3 className="text-base font-bold text-white">Sistem Fəaliyyət Jurnalı</h3>

          <div className="divide-y divide-[#212d26] text-xs">
            {activityLogs.map(log => (
              <div key={log.id} className="py-3 flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold text-white">{log.action}</div>
                  <div className="text-[#8b9891] text-[11px] mt-0.5">{log.details}</div>
                </div>
                <div className="text-[11px] text-[#8b9891] shrink-0 font-mono">
                  {log.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {rejectModalPart && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111814] border border-[#212d26] rounded-3xl max-w-md w-full p-6 space-y-4">
            <h3 className="text-base font-bold text-white">Elanın İmtina Edilməsi</h3>
            <p className="text-xs text-[#8b9891]">
              Elan: <span className="text-white font-semibold">{rejectModalPart.title}</span>
            </p>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-[#8b9891]">İmtina səbəbini qeyd edin:</label>
              <textarea
                rows={3}
                value={rejectionReason}
                onChange={e => setRejectionReason(e.target.value)}
                className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 text-xs outline-none focus:border-red-400"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setRejectModalPart(null)}
                className="px-4 py-2 rounded-xl border border-[#2a3830] text-xs text-[#8b9891] hover:text-white cursor-pointer"
              >
                Geri
              </button>
              <button
                type="button"
                onClick={handleConfirmReject}
                className="px-5 py-2 rounded-xl bg-red-500 text-white font-bold text-xs hover:bg-red-600 cursor-pointer"
              >
                İmtinanı təsdiq et
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
