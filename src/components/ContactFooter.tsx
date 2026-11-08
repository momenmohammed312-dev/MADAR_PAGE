import React from 'react';
import { Mail, Phone, Shield, ArrowUp } from 'lucide-react';
import type { Language } from '../types';
import { SITE_CONFIG } from '../config';

interface ContactFooterProps {
  lang: Language;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0A2540] text-white py-8 md:py-10 border-t border-[#0066FF]/20 relative overflow-hidden">
      
      {/* Background ambient hint */}
      <div className="absolute top-0 right-1/3 w-72 h-32 bg-[#0066FF]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Compact Row: Brand on one side, Contact pills side-by-side on the other */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0066FF] to-white/20 p-1 flex items-center justify-center shrink-0">
              <img
                src="/assets/app_logo_light.png"
                alt="MADAR Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-base font-bold text-white flex items-center gap-2">
                <span>{lang === 'ar' ? SITE_CONFIG.brand.fullNameAr : 'MADAR ERP'}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#0066FF]/30 text-[#BAE6FD] font-mono">v2.3</span>
              </div>
              <div className="text-[11px] text-[#94A3B8]">
                {lang === 'ar' ? SITE_CONFIG.brand.taglineShortAr : SITE_CONFIG.brand.taglineShortEn}
              </div>
            </div>
          </div>

          {/* Email & Phone side-by-side in sleek inline pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Phone Pill */}
            <a
              href={`tel:${SITE_CONFIG.contacts.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-all hover:border-[#0066FF]/50"
            >
              <Phone className="w-3.5 h-3.5 text-[#10B981]" />
              <span dir="ltr">{SITE_CONFIG.contacts.phoneDisplay}</span>
            </a>

            {/* Email Pill */}
            <a
              href={`mailto:${SITE_CONFIG.contacts.email}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-all hover:border-[#0066FF]/50"
            >
              <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{SITE_CONFIG.contacts.email}</span>
            </a>
          </div>

        </div>

        {/* Bottom Sub-strip: Copyright & Back-to-Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 text-[11px] text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} مِدار | MADAR ERP. جميع الحقوق محفوظة.</span>
            <span>•</span>
            <span className="text-[#38BDF8] font-medium">Developed by MO2</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#10B981]">
              <Shield className="w-3 h-3" />
              <span>{lang === 'ar' ? 'موقع تعريفي رسمي آمن' : 'Official Verified Portal'}</span>
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors"
              title={lang === 'ar' ? 'العودة للأعلى' : 'Back to top'}
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
