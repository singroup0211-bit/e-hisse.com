import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

interface AuthModalProps {
  initialMode: 'login' | 'register';
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ initialMode, onClose }) => {
  const { login, register, switchUser } = useApp();
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);

  // Login form
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Register form
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('+994');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<number>(2); // 2: Usta, 3: Anbardar
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginIdentifier.trim()) return;

    const ok = login(loginIdentifier);
    if (ok) {
      onClose();
    } else {
      setLoginError('İstifadəçi adı və ya şifrə yanlışdır.');
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) return;

    register({
      firstName,
      lastName,
      phone,
      email,
      role,
      companyName: role === 3 || companyName.trim() ? companyName : undefined,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#111814] border border-[#212d26] rounded-3xl max-w-md w-full p-6 space-y-5 animate-in fade-in duration-200">
        {/* Header & Tabs */}
        <div className="flex items-center justify-between border-b border-[#212d26] pb-3">
          <div className="flex gap-4">
            <button
              onClick={() => {
                setMode('login');
                setLoginError('');
              }}
              className={`text-base font-bold cursor-pointer transition-colors pb-1 ${
                mode === 'login' ? 'text-[#a3ff12] border-b-2 border-[#a3ff12]' : 'text-[#8b9891]'
              }`}
            >
              Daxil ol
            </button>
            <button
              onClick={() => {
                setMode('register');
                setLoginError('');
              }}
              className={`text-base font-bold cursor-pointer transition-colors pb-1 ${
                mode === 'register' ? 'text-[#a3ff12] border-b-2 border-[#a3ff12]' : 'text-[#8b9891]'
              }`}
            >
              Qeydiyyat
            </button>
          </div>

          <button onClick={onClose} className="text-[#8b9891] hover:text-white p-1 cursor-pointer">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {mode === 'login' ? (
          <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
            {loginError && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                {loginError}
              </div>
            )}

            <div>
              <label className="block text-[#8b9891] font-semibold mb-1">
                İstifadəçi adı, Mobil nömrə və ya E-poçt
              </label>
              <input
                type="text"
                value={loginIdentifier}
                onChange={e => setLoginIdentifier(e.target.value)}
                placeholder="Məsələn: singroup0211@gmail.com və ya elcin"
                className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 outline-none focus:border-[#a3ff12]"
                required
              />
            </div>

            <div>
              <label className="block text-[#8b9891] font-semibold mb-1">Şifrə</label>
              <input
                type="password"
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 outline-none focus:border-[#a3ff12]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#a3ff12] text-black font-extrabold text-xs hover:bg-[#b4ff3d] cursor-pointer transition-colors shadow-sm"
            >
              Daxil ol
            </button>

            {/* Quick Demo Logins */}
            <div className="pt-3 border-t border-[#212d26] space-y-2">
              <span className="block text-[11px] text-[#8b9891] text-center">
                Sınaq üçün bir toxunuşla daxil ol:
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    switchUser(13); // Asim Məmmədov (singroup0211@gmail.com)
                    onClose();
                  }}
                  className="p-2 rounded-xl bg-[#161e19] border border-[#2a3830] hover:border-blue-400 text-left cursor-pointer"
                >
                  <div className="font-semibold text-white">Asim M.</div>
                  <div className="text-[10px] text-blue-400">Usta</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    switchUser(1); // TechMaster Servis / Elçin
                    onClose();
                  }}
                  className="p-2 rounded-xl bg-[#161e19] border border-[#2a3830] hover:border-emerald-400 text-left cursor-pointer"
                >
                  <div className="font-semibold text-white">Elçin M.</div>
                  <div className="text-[10px] text-emerald-400">Anbardar</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    switchUser(4); // Admin
                    onClose();
                  }}
                  className="p-2 rounded-xl bg-[#161e19] border border-[#2a3830] hover:border-amber-400 text-left cursor-pointer"
                >
                  <div className="font-semibold text-white">Baş Admin</div>
                  <div className="text-[10px] text-amber-400">Admin</div>
                </button>
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="space-y-3 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[#8b9891] font-semibold mb-1">Ad</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  placeholder="Adınız"
                  className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                  required
                />
              </div>

              <div>
                <label className="block text-[#8b9891] font-semibold mb-1">Soyad</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  placeholder="Soyadınız"
                  className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[#8b9891] font-semibold mb-1">Mobil Nömrə</label>
              <input
                type="text"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+994 50 123 45 67"
                className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                required
              />
            </div>

            <div>
              <label className="block text-[#8b9891] font-semibold mb-1">E-poçt ünvanı</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="ad@example.com"
                className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                required
              />
            </div>

            <div>
              <label className="block text-[#8b9891] font-semibold mb-1">Hesab Növü</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setRole(2)}
                  className={`p-2.5 rounded-xl border text-center font-bold cursor-pointer transition-all ${
                    role === 2
                      ? 'bg-[#a3ff12]/10 border-[#a3ff12] text-[#a3ff12]'
                      : 'bg-[#161e19] border-[#2a3830] text-[#8b9891]'
                  }`}
                >
                  <i className="bi bi-tools block text-base mb-0.5"></i>
                  <span>Təmir Ustası</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRole(3)}
                  className={`p-2.5 rounded-xl border text-center font-bold cursor-pointer transition-all ${
                    role === 3
                      ? 'bg-[#a3ff12]/10 border-[#a3ff12] text-[#a3ff12]'
                      : 'bg-[#161e19] border-[#2a3830] text-[#8b9891]'
                  }`}
                >
                  <i className="bi bi-shop block text-base mb-0.5"></i>
                  <span>Anbardar / Satıcı</span>
                </button>
              </div>
            </div>

            {role === 3 && (
              <div>
                <label className="block text-[#8b9891] font-semibold mb-1">Mağaza / Şirkət Adı</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={e => setCompanyName(e.target.value)}
                  placeholder="Məsələn: TechFix Ehtiyat Hissələri"
                  className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-[#8b9891] font-semibold mb-1">Şifrə</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-2.5 outline-none focus:border-[#a3ff12]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#a3ff12] text-black font-extrabold text-xs hover:bg-[#b4ff3d] cursor-pointer transition-colors shadow-sm"
            >
              Qeydiyyatı Tamamla
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
