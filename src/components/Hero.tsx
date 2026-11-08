import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Language } from '../types';
import { SITE_CONFIG } from '../config';
import { WordReveal, tr } from './ui';

export const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const ar = lang === 'ar';
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-gradient-to-b from-[#0066FF]/10 via-[#7C3AED]/5 to-transparent blur-3xl rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(#0A2540 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 text-center">
        <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl font-black tracking-tight text-[#0A2540] leading-[1.25]">
          <WordReveal
            immediate
            text={tr(lang, 'أدِر كل شغلك من مكان واحد', 'Run your whole business from one place')}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-[#526E8C] leading-relaxed"
        >
          {tr(
            lang,
            'مبيعات، مخازن، حسابات، موظفين وتصنيع. كل ده في برنامج واحد على الكمبيوتر والموبايل.',
            'Sales, inventory, accounting, HR and manufacturing. One app on desktop and mobile.',
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#downloads"
            className="px-8 py-4 rounded-2xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-lg font-bold shadow-lg shadow-[#0066FF]/30 transition-colors whitespace-nowrap"
          >
            {tr(lang, `ابدأ تجربتك المجانية (${SITE_CONFIG.downloads.trialDurationDays} أيام)`, `Start your ${SITE_CONFIG.downloads.trialDurationDays}-day free trial`)}
          </a>
          <a
            href="#intro"
            className="px-6 py-4 text-[#0A2540] hover:text-[#0066FF] text-base font-semibold flex items-center gap-2 transition-colors"
          >
            {tr(lang, 'اعرف أكتر', 'Learn more')}
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* Odoo-style hand-drawn callout */}
          <div className="hidden md:flex absolute -top-12 end-0 lg:-end-8 flex-col items-center pointer-events-none">
            <span className="text-sm font-bold text-[#0066FF] -rotate-3 whitespace-nowrap">
              {tr(lang, 'كل الوحدات مفتوحة مجانًا', 'Every module unlocked, free')}
            </span>
            <svg className={`w-16 h-12 text-[#0066FF] ${ar ? '' : '-scale-x-100'}`} viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M10 6 C 22 30, 40 40, 66 40 M66 40 L 55 31 M66 40 L 56 49" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
