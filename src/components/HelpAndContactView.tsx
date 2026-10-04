import React, { useState } from 'react';

interface HelpAndContactViewProps {
  initialTab?: 'help' | 'contact';
}

export const HelpAndContactView: React.FC<HelpAndContactViewProps> = ({ initialTab = 'help' }) => {
  const [activeTab, setActiveTab] = useState<'help' | 'contact'>(initialTab);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const faqs = [
    {
      q: 'e-hisse.az platforması nədir və necə işləyir?',
      a: 'e-hisse.az mobil telefonlar, kompüterlər, saatlar və digər elektronika üçün ehtiyat hissələri satan anbardarlar ilə təmir ustalarını birləşdirən ixtisaslaşmış bazardır. Ustalar axtardıqları hissəni tapıb birbaşa satıcı ilə WhatsApp və ya zəng vasitəsilə əlaqə saxlayırlar.'
    },
    {
      q: 'Elan yerləşdirmək üçün nə tələb olunur?',
      a: 'Satıcı və ya usta hesabı ilə qeydiyyatdan keçmək kifayətdir. Hesabınız admin tərəfindən təsdiqləndikdən sonra "Elanlarım" bölməsindən yeni hissələr, fotoşəkillər, stok sayı və qiymətləri daxil edə bilərsiniz.'
    },
    {
      q: 'Zəmanət və çatdırılma necə həyata keçirilir?',
      a: 'Hər bir elanın təsvirində və xüsusiyyətlərində zəmanət müddəti (məsələn, 3 ay və ya 6 ay) qeyd olunur. Çatdırılma və ödəniş satıcı ilə usta arasında birbaşa razılaşdırılır.'
    },
    {
      q: 'Keyfiyyət növləri nə deməkdir?',
      a: 'Zavod yeni: heç istifadə olunmamış orijinal istehsal;\nZavod işlənmiş: başqa orijinal cihazdan çıxarılmış hissə;\nA-Class: ən yüksək səviyyəli orijinala yaxın alternativ;\nB-Class və C-Class: daha sərfəli standart büdcəli variantlar.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Toggle Switch */}
      <div className="flex justify-center">
        <div className="p-1 rounded-2xl bg-[#111814] border border-[#212d26] inline-flex">
          <button
            onClick={() => setActiveTab('help')}
            className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm cursor-pointer transition-all ${
              activeTab === 'help'
                ? 'bg-[#a3ff12] text-black shadow-md'
                : 'text-[#8b9891] hover:text-white'
            }`}
          >
            <i className="bi bi-question-circle me-2"></i>
            Yardım Mərkəzi (FAQ)
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm cursor-pointer transition-all ${
              activeTab === 'contact'
                ? 'bg-[#a3ff12] text-black shadow-md'
                : 'text-[#8b9891] hover:text-white'
            }`}
          >
            <i className="bi bi-envelope me-2"></i>
            Əlaqə & Dəstək
          </button>
        </div>
      </div>

      {activeTab === 'help' ? (
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Tez-tez Verilən Suallar
            </h1>
            <p className="text-xs sm:text-sm text-[#8b9891]">
              Platformadan istifadə və sifarişlə bağlı ən çox soruşulan sualların cavabları.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#111814] border border-[#212d26] p-6 space-y-2"
              >
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-[#a3ff12]/10 text-[#a3ff12] flex items-center justify-center text-xs font-black shrink-0">
                    ?
                  </span>
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-[#8b9891] pl-8 leading-relaxed whitespace-pre-line">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Contact Info */}
          <div className="md:col-span-5 rounded-3xl bg-[#111814] border border-[#212d26] p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[#a3ff12] text-xs font-bold uppercase tracking-wider">Bizimlə əlaqə</span>
              <h2 className="text-2xl font-extrabold text-white">Texniki Dəstək və Əməkdaşlıq</h2>
              <p className="text-xs text-[#8b9891] leading-relaxed">
                Platforma ilə bağlı hər hansı sualınız, təklifiniz və ya iradınız olarsa, birbaşa bizə müraciət edə bilərsiniz.
              </p>

              <div className="space-y-3 pt-4 text-xs">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-xl bg-[#a3ff12]/10 text-[#a3ff12] flex items-center justify-center text-sm">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#8b9891]">Ünvan</div>
                    <div>Bakı şəhəri, Nəsimi ray., 28 May küç.</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-xl bg-[#a3ff12]/10 text-[#a3ff12] flex items-center justify-center text-sm">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#8b9891]">Telefon / Qaynar Xətt</div>
                    <div>+994 55 552 15 01 / +994 10 252 32 26</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-xl bg-[#a3ff12]/10 text-[#a3ff12] flex items-center justify-center text-sm">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#8b9891]">E-poçt</div>
                    <div>info@e-hisse.az</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#161e19] border border-[#2a3830] text-xs text-[#8b9891]">
              <i className="bi bi-shield-check text-[#a3ff12] text-sm me-1.5"></i>
              Bütün müraciətlər 24 saat ərzində cavablandırılır.
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="md:col-span-7 rounded-3xl bg-[#111814] border border-[#212d26] p-6 sm:p-8 space-y-5">
            <h3 className="text-lg font-bold text-white">Müraciət Göndərin</h3>

            {isSubmitted && (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-base"></i>
                <span>Müraciətiniz qəbul edildi! Tezliklə sizinlə əlaqə saxlanılacaq.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#8b9891] font-semibold mb-1">Ad və Soyad</label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Adınız"
                    className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 outline-none focus:border-[#a3ff12]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#8b9891] font-semibold mb-1">Əlaqə Nömrəsi</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+994 50 123 45 67"
                    className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 outline-none focus:border-[#a3ff12]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#8b9891] font-semibold mb-1">E-poçt ünvanı</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 outline-none focus:border-[#a3ff12]"
                  required
                />
              </div>

              <div>
                <label className="block text-[#8b9891] font-semibold mb-1">Mövzu</label>
                <input
                  type="text"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  placeholder="Müraciətinizin mövzusu"
                  className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 outline-none focus:border-[#a3ff12]"
                  required
                />
              </div>

              <div>
                <label className="block text-[#8b9891] font-semibold mb-1">Mesajınız</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Ətraflı qeyd edin..."
                  className="w-full bg-[#161e19] text-white border border-[#2a3830] rounded-xl p-3 outline-none focus:border-[#a3ff12]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#a3ff12] text-black font-extrabold text-xs hover:bg-[#b4ff3d] cursor-pointer transition-colors"
              >
                Mesajı göndər
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
