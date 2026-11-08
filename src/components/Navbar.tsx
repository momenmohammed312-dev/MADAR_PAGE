import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { SITE_CONFIG } from '../config';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
}

const NAV_LINKS = [
  { href: '#modules', labelAr: 'الوحدات', labelEn: 'Modules' },
  { href: '#ai-advisor', labelAr: 'المستشار الذكي', labelEn: 'AI Advisor', badge: 'AI' },
  { href: '#ai-advisor', labelAr: 'تحليل البيانات', labelEn: 'Data Analysis' },
];

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ar = lang === 'ar';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#CDE2F5]/80 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand: logo only + wordmark beside it, small descriptor underneath */}
          <a href="#" className="flex items-center gap-2.5 shrink-0" aria-label="MADAR ERP">
            <img
              src="/assets/app_logo_light.png"
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold text-[#0A2540] whitespace-nowrap">
                {ar ? 'مدار' : 'MADAR'} <span className="text-[#0066FF]">ERP</span>
              </span>
              <span className="text-[11px] text-[#526E8C] font-medium whitespace-nowrap">
                {ar ? SITE_CONFIG.brand.taglineShortAr : SITE_CONFIG.brand.taglineShortEn}
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-[#0B192C] hover:text-[#0066FF] rounded-full transition-colors whitespace-nowrap flex items-center gap-1.5"
              >
                {ar ? link.labelAr : link.labelEn}
                {link.badge && (
                  <span className="text-[10px] bg-gradient-to-r from-[#7C3AED] to-[#0066FF] text-white px-1.5 rounded-full font-bold flex items-center gap-0.5">
                    <Sparkles className="w-2.5 h-2.5" />
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleLang}
              className="px-3 py-1.5 rounded-lg border border-[#CDE2F5] hover:bg-[#EBF4FC] text-[#0A2540] text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap"
              title={ar ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <Globe className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>{ar ? 'English' : 'عربي'}</span>
            </button>

            <a
              href="#downloads"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm font-bold whitespace-nowrap transition-colors active:scale-95"
            >
              {ar ? 'ابدأ مجانًا' : 'Start Free'}
            </a>

            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-xl border border-[#CDE2F5] text-[#0A2540]"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-3 bg-white rounded-2xl border border-[#CDE2F5] shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
            {NAV_LINKS.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-[#0A2540] hover:bg-[#F2F7FC]"
              >
                {ar ? link.labelAr : link.labelEn}
              </a>
            ))}
            <a
              href="#downloads"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex justify-center py-2.5 rounded-xl bg-[#0066FF] text-white text-sm font-bold"
            >
              {ar ? 'ابدأ مجانًا' : 'Start Free'}
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
