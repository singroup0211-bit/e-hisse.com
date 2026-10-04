import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { CurrentView, SparePart } from '../types';

interface HeaderProps {
  currentView: CurrentView;
  setCurrentView: (view: CurrentView) => void;
  onSelectPart: (part: SparePart) => void;
  openAuthModal: (mode: 'login' | 'register') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setCurrentView,
  onSelectPart,
  openAuthModal,
  searchQuery,
  setSearchQuery,
}) => {
  const { currentUser, switchUser, users, logout, theme, toggleTheme, parts, categories } = useApp();
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showDemoSwitcher, setShowDemoSwitcher] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Search results for autocomplete
  const searchResults = searchQuery.trim().length > 1
    ? parts
        .filter(p => p.isActive && !p.isDeleted && p.moderationStatus === 2)
        .filter(p =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 6)
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getRoleName = (role: number) => {
    switch (role) {
      case 1:
        return 'Admin';
      case 2:
        return 'Usta';
      case 3:
        return 'Anbardar';
      default:
        return 'İstifadəçi';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0f0c]/90 backdrop-blur-md border-b border-[#212d26] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Left: Logo & Nav */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => {
              setCurrentView('catalog');
              setSearchQuery('');
            }}
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-[#a3ff12] text-black font-extrabold flex items-center justify-center text-lg shadow-sm group-hover:scale-105 transition-transform">
              e
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              - hisse<span className="text-[#a3ff12]">.az</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <button
              onClick={() => setCurrentView('catalog')}
              className={`transition-colors cursor-pointer py-1 ${
                currentView === 'catalog'
                  ? 'text-[#a3ff12] font-semibold border-b-2 border-[#a3ff12]'
                  : 'text-[#8b9891] hover:text-white'
              }`}
            >
              Kataloq
            </button>

            {currentUser && (currentUser.role === 2 || currentUser.role === 3) && (
              <button
                onClick={() => setCurrentView('warehouse')}
                className={`transition-colors cursor-pointer py-1 flex items-center gap-1.5 ${
                  currentView === 'warehouse'
                    ? 'text-[#a3ff12] font-semibold border-b-2 border-[#a3ff12]'
                    : 'text-[#8b9891] hover:text-white'
                }`}
              >
                <span>Elanlarım</span>
                <span className="px-1.5 py-0.2 text-[10px] rounded-full bg-[#a3ff12]/20 text-[#a3ff12] font-semibold">
                  Anbar
                </span>
              </button>
            )}

            <button
              onClick={() => setCurrentView('sellers')}
              className={`transition-colors cursor-pointer py-1 ${
                currentView === 'sellers'
                  ? 'text-[#a3ff12] font-semibold border-b-2 border-[#a3ff12]'
                  : 'text-[#8b9891] hover:text-white'
              }`}
            >
              Satıcılar
            </button>

            <button
              onClick={() => setCurrentView('categories')}
              className={`transition-colors cursor-pointer py-1 ${
                currentView === 'categories'
                  ? 'text-[#a3ff12] font-semibold border-b-2 border-[#a3ff12]'
                  : 'text-[#8b9891] hover:text-white'
              }`}
            >
              Kateqoriyalar
            </button>

            <button
              onClick={() => setCurrentView('help')}
              className={`transition-colors cursor-pointer py-1 ${
                currentView === 'help'
                  ? 'text-[#a3ff12] font-semibold border-b-2 border-[#a3ff12]'
                  : 'text-[#8b9891] hover:text-white'
              }`}
            >
              Yardım mərkəzi
            </button>

            <button
              onClick={() => setCurrentView('contact')}
              className={`transition-colors cursor-pointer py-1 ${
                currentView === 'contact'
                  ? 'text-[#a3ff12] font-semibold border-b-2 border-[#a3ff12]'
                  : 'text-[#8b9891] hover:text-white'
              }`}
            >
              Əlaqə
            </button>

            {currentUser && currentUser.role === 1 && (
              <button
                onClick={() => setCurrentView('admin')}
                className={`transition-colors cursor-pointer py-1 flex items-center gap-1 text-amber-400 font-semibold ${
                  currentView === 'admin' ? 'border-b-2 border-amber-400' : 'hover:text-amber-300'
                }`}
              >
                <i className="bi bi-shield-check"></i>
                <span>Admin Panel</span>
              </button>
            )}
          </nav>
        </div>

        {/* Center: Search Bar */}
        <div ref={searchRef} className="hidden md:block flex-1 max-w-md mx-4 relative">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                setShowSearchDropdown(true);
              }}
              onFocus={() => setShowSearchDropdown(true)}
              placeholder="Ehtiyat hissəsi, cihaz, brend və ya SKU..."
              className="w-full bg-[#161e19] text-white border border-[#2a3830] focus:border-[#a3ff12] rounded-full py-2 pl-4 pr-10 text-sm outline-none transition-colors placeholder-[#8b9891]"
            />
            <button
              type="button"
              className="absolute right-3 text-[#8b9891] hover:text-[#a3ff12] cursor-pointer transition-colors"
            >
              <i className="bi bi-search text-base"></i>
            </button>
          </div>

          {/* Autocomplete Dropdown */}
          {showSearchDropdown && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#111814] border border-[#212d26] rounded-xl shadow-2xl overflow-hidden z-50">
              <div className="p-2 border-b border-[#212d26] text-xs font-semibold text-[#8b9891] flex justify-between">
                <span>Nəticələr ({searchResults.length})</span>
                <span className="text-[#a3ff12]">Dərhal bax</span>
              </div>
              <div className="max-h-80 overflow-y-auto divide-y divide-[#212d26]/50">
                {searchResults.map(part => {
                  const cat = categories.find(c => c.id === part.categoryId);
                  return (
                    <button
                      key={part.id}
                      onClick={() => {
                        onSelectPart(part);
                        setShowSearchDropdown(false);
                      }}
                      className="w-full text-left p-3 hover:bg-[#1a241e] flex items-center gap-3 cursor-pointer transition-colors"
                    >
                      <img
                        src={part.images[0]?.imageUrl || '/images/images.jpg'}
                        alt={part.title}
                        className="w-10 h-10 object-contain rounded bg-white/5 p-1 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white truncate">{part.title}</div>
                        <div className="text-xs text-[#8b9891] flex items-center gap-2">
                          <span>{cat?.name || 'Hissə'}</span>
                          <span>•</span>
                          <span className="text-[#a3ff12]">Stok: {part.stockQuantity} ədəd</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-sm font-bold text-[#a3ff12]">{part.price} AZN</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right: Actions & User */}
        <div className="flex items-center gap-3">
          {/* Demo Persona Switcher pill */}
          <div className="relative">
            <button
              onClick={() => setShowDemoSwitcher(!showDemoSwitcher)}
              className="text-xs px-2.5 py-1.5 rounded-full bg-[#161e19] border border-[#2a3830] hover:border-[#a3ff12] text-[#8b9891] hover:text-white flex items-center gap-1.5 cursor-pointer transition-all"
              title="Test üçün istifadəçi rolunu dəyişdir"
            >
              <i className="bi bi-people text-sm text-[#a3ff12]"></i>
              <span className="hidden sm:inline">Rol dəyiş:</span>
              <span className="text-white font-medium">
                {currentUser ? getRoleName(currentUser.role) : 'Qonaq'}
              </span>
              <i className="bi bi-chevron-down text-[10px]"></i>
            </button>

            {showDemoSwitcher && (
              <div className="absolute right-0 mt-2 w-64 bg-[#111814] border border-[#212d26] rounded-xl shadow-2xl p-2 z-50 text-xs">
                <div className="font-semibold text-[#8b9891] px-2 py-1 mb-1 border-b border-[#212d26]">
                  Sürətli Rol Seçimi (Demo)
                </div>
                <button
                  onClick={() => {
                    switchUser(13); // Asim Məmmədov (singroup0211@gmail.com)
                    setShowDemoSwitcher(false);
                  }}
                  className={`w-full text-left p-2 rounded-lg hover:bg-[#1a241e] cursor-pointer flex items-center justify-between ${
                    currentUser?.id === 13 ? 'bg-[#a3ff12]/10 text-[#a3ff12]' : 'text-white'
                  }`}
                >
                  <div>
                    <div className="font-semibold">Asim Məmmədov (Usta)</div>
                    <div className="text-[10px] text-[#8b9891]">singroup0211@gmail.com</div>
                  </div>
                  <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">Usta</span>
                </button>
                <button
                  onClick={() => {
                    switchUser(1); // Elçin Məmmədov / TechMaster
                    setShowDemoSwitcher(false);
                  }}
                  className={`w-full text-left p-2 rounded-lg hover:bg-[#1a241e] cursor-pointer flex items-center justify-between ${
                    currentUser?.id === 1 ? 'bg-[#a3ff12]/10 text-[#a3ff12]' : 'text-white'
                  }`}
                >
                  <div>
                    <div className="font-semibold">TechMaster Servis</div>
                    <div className="text-[10px] text-[#8b9891]">Elçin Məmmədov (Anbardar)</div>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">Anbardar</span>
                </button>
                <button
                  onClick={() => {
                    switchUser(4); // Admin
                    setShowDemoSwitcher(false);
                  }}
                  className={`w-full text-left p-2 rounded-lg hover:bg-[#1a241e] cursor-pointer flex items-center justify-between ${
                    currentUser?.id === 4 ? 'bg-[#a3ff12]/10 text-[#a3ff12]' : 'text-white'
                  }`}
                >
                  <div>
                    <div className="font-semibold">Baş Administrator</div>
                    <div className="text-[10px] text-[#8b9891]">admin@example.com</div>
                  </div>
                  <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded">Admin</span>
                </button>
                <button
                  onClick={() => {
                    switchUser(null);
                    setShowDemoSwitcher(false);
                  }}
                  className={`w-full text-left p-2 rounded-lg hover:bg-[#1a241e] cursor-pointer flex items-center justify-between ${
                    !currentUser ? 'bg-[#a3ff12]/10 text-[#a3ff12]' : 'text-white'
                  }`}
                >
                  <div>
                    <div className="font-semibold">Qonaq (Daxil olmayıb)</div>
                    <div className="text-[10px] text-[#8b9891]">Yalnız baxış rejimi</div>
                  </div>
                  <span className="text-[10px] bg-zinc-500/20 text-zinc-400 px-1.5 py-0.5 rounded">Qonaq</span>
                </button>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="px-2.5 py-1.5 rounded-full bg-[#161e19] border border-[#2a3830] hover:border-[#a3ff12] text-[#8b9891] hover:text-[#a3ff12] flex items-center gap-1.5 transition-all cursor-pointer"
            title={theme === 'dark' ? "İşıqlı rejimə (Gündüz) keç" : "Qaranlıq rejimə (Gecə) keç"}
          >
            {theme === 'dark' ? (
              <>
                <i className="bi bi-moon-stars text-sm text-[#a3ff12]"></i>
                <span className="text-xs text-white hidden xl:inline">Gecə</span>
              </>
            ) : (
              <>
                <i className="bi bi-sun-fill text-sm text-amber-500"></i>
                <span className="text-xs text-[#0f172a] font-semibold hidden xl:inline">Gündüz</span>
              </>
            )}
          </button>

          {/* User Profile or Login/Register buttons */}
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center gap-2 p-1 pl-2 rounded-full bg-[#161e19] border border-[#2a3830] hover:border-[#a3ff12] cursor-pointer transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#a3ff12] text-black font-bold flex items-center justify-center text-xs">
                  {currentUser.firstName.charAt(0).toUpperCase()}
                </div>
                <div className="hidden md:flex flex-col text-left pr-1">
                  <span className="text-xs font-semibold text-white leading-tight">
                    {currentUser.firstName} {currentUser.lastName}
                  </span>
                  <span className="text-[10px] text-[#8b9891] leading-tight">
                    {getRoleName(currentUser.role)}
                  </span>
                </div>
                <i className="bi bi-chevron-down text-[10px] text-[#8b9891] pr-1"></i>
              </button>

              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-[#111814] border border-[#212d26] rounded-xl shadow-2xl py-2 z-50 text-sm">
                  <div className="px-4 py-2 border-b border-[#212d26]">
                    <div className="font-semibold text-white">
                      {currentUser.firstName} {currentUser.lastName}
                    </div>
                    <div className="text-xs text-[#8b9891] truncate">
                      {currentUser.email || currentUser.phone}
                    </div>
                  </div>

                  {currentUser.role === 1 && (
                    <button
                      onClick={() => {
                        setCurrentView('admin');
                        setShowUserDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-[#1a241e] flex items-center gap-2 text-amber-400 cursor-pointer"
                    >
                      <i className="bi bi-speedometer2"></i>
                      <span>Admin İdarəetmə Paneli</span>
                    </button>
                  )}

                  {(currentUser.role === 2 || currentUser.role === 3) && (
                    <>
                      <button
                        onClick={() => {
                          setCurrentView('warehouse');
                          setShowUserDropdown(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-[#1a241e] flex items-center gap-2 text-white cursor-pointer"
                      >
                        <i className="bi bi-box-seam text-[#a3ff12]"></i>
                        <span>Mənim Elanlarım</span>
                      </button>
                    </>
                  )}

                  <div className="border-t border-[#212d26] my-1"></div>

                  <button
                    onClick={() => {
                      logout();
                      setShowUserDropdown(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-[#1a241e] flex items-center gap-2 text-red-400 cursor-pointer"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Çıxış</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => openAuthModal('login')}
                className="text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full border border-[#2a3830] hover:border-[#a3ff12] text-white hover:text-[#a3ff12] transition-colors cursor-pointer"
              >
                Daxil ol
              </button>
              <button
                onClick={() => openAuthModal('register')}
                className="text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full bg-[#a3ff12] text-black hover:bg-[#b4ff3d] transition-colors cursor-pointer shadow-sm"
              >
                Qeydiyyat
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#161e19] text-white border border-[#2a3830] hover:text-[#a3ff12] cursor-pointer"
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-lg`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1410] border-b border-[#212d26] px-4 py-4 space-y-3">
          <div className="relative mb-3">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Ehtiyat hissəsi axtar..."
              className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-lg py-2 pl-3 pr-9 text-sm"
            />
            <i className="bi bi-search absolute right-3 top-2.5 text-[#8b9891]"></i>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <button
              onClick={() => {
                setCurrentView('catalog');
                setMobileMenuOpen(false);
              }}
              className="p-2 rounded-lg bg-[#161e19] text-left text-white hover:text-[#a3ff12]"
            >
              <i className="bi bi-grid me-2 text-[#a3ff12]"></i> Kataloq
            </button>

            {currentUser && (currentUser.role === 2 || currentUser.role === 3) && (
              <button
                onClick={() => {
                  setCurrentView('warehouse');
                  setMobileMenuOpen(false);
                }}
                className="p-2 rounded-lg bg-[#161e19] text-left text-white hover:text-[#a3ff12]"
              >
                <i className="bi bi-box-seam me-2 text-[#a3ff12]"></i> Elanlarım
              </button>
            )}

            <button
              onClick={() => {
                setCurrentView('sellers');
                setMobileMenuOpen(false);
              }}
              className="p-2 rounded-lg bg-[#161e19] text-left text-white hover:text-[#a3ff12]"
            >
              <i className="bi bi-shop me-2 text-[#a3ff12]"></i> Satıcılar
            </button>

            <button
              onClick={() => {
                setCurrentView('categories');
                setMobileMenuOpen(false);
              }}
              className="p-2 rounded-lg bg-[#161e19] text-left text-white hover:text-[#a3ff12]"
            >
              <i className="bi bi-folder me-2 text-[#a3ff12]"></i> Kateqoriyalar
            </button>

            <button
              onClick={() => {
                setCurrentView('help');
                setMobileMenuOpen(false);
              }}
              className="p-2 rounded-lg bg-[#161e19] text-left text-white hover:text-[#a3ff12]"
            >
              <i className="bi bi-question-circle me-2 text-[#a3ff12]"></i> Yardım
            </button>

            <button
              onClick={() => {
                setCurrentView('contact');
                setMobileMenuOpen(false);
              }}
              className="p-2 rounded-lg bg-[#161e19] text-left text-white hover:text-[#a3ff12]"
            >
              <i className="bi bi-envelope me-2 text-[#a3ff12]"></i> Əlaqə
            </button>

            <button
              onClick={() => {
                toggleTheme();
              }}
              className="p-2 rounded-lg bg-[#161e19] text-left text-white hover:text-[#a3ff12] flex items-center justify-between"
            >
              <span className="flex items-center">
                <i className={`bi ${theme === 'dark' ? 'bi-moon-stars text-[#a3ff12]' : 'bi-sun-fill text-amber-500'} me-2`}></i>
                <span>Rejim: {theme === 'dark' ? 'Qaranlıq' : 'İşıqlı'}</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 font-bold">
                {theme === 'dark' ? 'Gecə' : 'Gündüz'}
              </span>
            </button>

            {currentUser && currentUser.role === 1 && (
              <button
                onClick={() => {
                  setCurrentView('admin');
                  setMobileMenuOpen(false);
                }}
                className="col-span-2 p-2 rounded-lg bg-amber-500/10 text-amber-400 text-left"
              >
                <i className="bi bi-shield-check me-2"></i> Admin Panel
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
