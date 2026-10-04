import React from 'react';
import { CurrentView } from '../types';

export const Footer: React.FC<{ setCurrentView: (v: CurrentView) => void }> = ({ setCurrentView }) => {
  return (
    <footer className="mt-16 border-t border-[#212d26] bg-[#0a0f0c] py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#a3ff12] text-black font-extrabold flex items-center justify-center text-sm">
              e
            </div>
            <span className="font-bold text-white text-base">
              - hisse<span className="text-[#a3ff12]">.az</span>
            </span>
            <span className="hidden sm:inline text-xs text-[#8b9891]">
              © {new Date().getFullYear()} e-hisse.az — Ustalar üçün daha ağıllı alış-veriş
            </span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#8b9891]">
            <button onClick={() => setCurrentView('catalog')} className="hover:text-white cursor-pointer">
              Kataloq
            </button>
            <button onClick={() => setCurrentView('sellers')} className="hover:text-white cursor-pointer">
              Satıcılar
            </button>
            <button onClick={() => setCurrentView('categories')} className="hover:text-white cursor-pointer">
              Kateqoriyalar
            </button>
            <button onClick={() => setCurrentView('help')} className="hover:text-white cursor-pointer">
              Yardım
            </button>
            <button onClick={() => setCurrentView('contact')} className="hover:text-white cursor-pointer">
              Əlaqə
            </button>
          </div>

          {/* System Status indicator */}
          <div className="flex items-center gap-2 text-xs text-[#a3ff12] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#a3ff12] animate-pulse"></span>
            <span>Sistem işləkdir</span>
          </div>
        </div>

        <div className="sm:hidden text-center text-xs text-[#8b9891]">
          © {new Date().getFullYear()} e-hisse.az — Ustalar üçün daha ağıllı alış-veriş
        </div>
      </div>
    </footer>
  );
};
