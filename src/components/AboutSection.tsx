import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WifiOff, Database, HardDriveDownload, Smartphone, CheckCircle2, Cloud, FileArchive } from 'lucide-react';
import { Language } from '../types';
import { PhoneFrame, Reveal, tr, useIsDesktop } from './ui';

const OfflineVisual: React.FC<{ lang: Language }> = ({ lang }) => (
  <div className="flex flex-col items-center gap-5">
    <div className="relative w-24 h-24 rounded-full bg-[#FEE2E2] flex items-center justify-center text-[#DC2626]">
      <WifiOff className="w-10 h-10" />
    </div>
    <div className="w-full max-w-xs space-y-2.5">
      {[1, 2, 3].map((n) => (
        <motion.div
          key={n}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ delay: n * 0.35 }}
          className="flex items-center justify-between rounded-xl bg-white border border-[#CDE2F5] px-4 py-2.5 text-sm"
        >
          <span className="font-semibold text-[#0A2540]">{tr(lang, `فاتورة #${1040 + n}`, `Invoice #${1040 + n}`)}</span>
          <span className="flex items-center gap-1 text-[#059669] font-bold"><CheckCircle2 className="w-4 h-4" />{tr(lang, 'اتحفظت', 'Saved')}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const DataVisual: React.FC = () => (
  <div className="relative w-64 h-48" dir="ltr">
    {[['Sales', '8%', '10%'], ['Stock', '62%', '10%'], ['Accounts', '8%', '72%'], ['HR', '62%', '72%']].map(([t, x, y], i) => (
      <motion.span
        key={t}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3 + i * 0.4 }}
        className="absolute px-3 py-1.5 rounded-lg bg-white border border-[#CDE2F5] text-xs font-bold text-[#0A2540] shadow-sm"
        style={{ left: x, top: y }}
      >
        {t}
      </motion.span>
    ))}
    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-[#0066FF] text-white flex items-center justify-center shadow-lg">
      <Database className="w-7 h-7" />
    </span>
  </div>
);

const BackupVisual: React.FC = () => (
  <div className="flex items-center gap-4" dir="ltr">
    <div className="w-16 h-16 rounded-2xl bg-white border border-[#CDE2F5] flex items-center justify-center text-[#0066FF] shadow-sm">
      <FileArchive className="w-7 h-7" />
    </div>
    <div className="relative w-28 h-2 rounded-full bg-[#CDE2F5] overflow-hidden">
      <motion.span className="absolute inset-y-0 w-10 rounded-full bg-[#0066FF]" animate={{ x: ['-100%', '280%'] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }} />
    </div>
    <div className="w-16 h-16 rounded-2xl bg-white border border-[#CDE2F5] flex items-center justify-center text-[#059669] shadow-sm">
      <Cloud className="w-7 h-7" />
    </div>
  </div>
);

export const MobileMini: React.FC<{ lang: Language }> = ({ lang }) => (
  <PhoneFrame>
    <div className="px-3 space-y-2.5">
      <div className="flex items-center justify-between pt-1">
        <span className="text-[11px] font-extrabold text-[#0A2540]">{tr(lang, 'مدار', 'MADAR')}</span>
        <span className="w-5 h-5 rounded-full bg-[#CDE2F5]" />
      </div>
      <div className="rounded-xl bg-[#0066FF] text-white p-3">
        <p className="text-[10px] opacity-80">{tr(lang, 'مبيعات النهارده', 'Sales today')}</p>
        <p className="text-xl font-black tabular-nums">18,450</p>
      </div>
      {[tr(lang, 'فاتورة جديدة', 'New invoice'), tr(lang, 'مسح باركود', 'Scan barcode'), tr(lang, 'العملاء', 'Customers'), tr(lang, 'المخزن', 'Inventory')].map((t, i) => (
        <motion.div
          key={t}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 * i }}
          className="rounded-lg bg-white border border-[#CDE2F5] px-3 py-2.5 text-[11px] font-bold text-[#0A2540] flex justify-between"
        >
          {t}
          <span className="text-[#0066FF]">›</span>
        </motion.div>
      ))}
    </div>
  </PhoneFrame>
);

export const AboutSection: React.FC<{ lang: Language }> = ({ lang }) => {
  const desktop = useIsDesktop();
  const rtl = lang === 'ar';
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, (rtl ? 1 : -1) * shift]);

  useEffect(() => {
    const measure = () => {
      const t = trackRef.current;
      if (t) setShift(Math.max(0, t.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [desktop, lang]);

  const panels = [
    { icon: WifiOff, c: '#0066FF', ar: ['شغال من غير إنترنت', 'الفواتير والطباعة والمخزن بيكملوا حتى لو النت قطع. الكاشير مبيقفش.'], en: ['Works without internet', 'Invoices, printing and stock carry on when the connection drops. The till never stops.'], v: <OfflineVisual lang={lang} /> },
    { icon: Database, c: '#059669', ar: ['بيانات متكاملة', 'كل الوحدات على قاعدة بيانات واحدة على جهازك. الرقم بيتغير في كل مكان مرة واحدة.'], en: ['One connected dataset', 'Every module shares one database on your device. A number changes everywhere at once.'], v: <DataVisual /> },
    { icon: HardDriveDownload, c: '#D97706', ar: ['نسخ احتياطي', 'خد نسخة بضغطة واحدة، وارجّعها على أي جهاز لما تحتاج.'], en: ['Backup and restore', 'Take a copy in one click and restore it on any device when you need to.'], v: <BackupVisual /> },
    { icon: Smartphone, c: '#7C3AED', ar: ['تكامل مع التليفون', 'التليفون بيكمل شغل الكمبيوتر: فواتير ومسح باركود وأرقام المبيعات.'], en: ['Phone integration', 'The phone extends the desktop: invoices, barcode scanning and live sales numbers.'], v: <div className="scale-[0.62] origin-center -my-24"><MobileMini lang={lang} /></div> },
  ];

  const Panel: React.FC<{ p: (typeof panels)[number]; i: number; wide?: boolean }> = ({ p, i, wide }) => (
    <div className={`shrink-0 ${wide ? 'w-[78vw] max-w-[920px]' : 'w-[86vw] snap-center'} grid ${wide ? 'grid-cols-[1fr_1fr] gap-12' : 'gap-8'} items-center`}>
      <div>
        <span className="inline-flex w-12 h-12 rounded-2xl items-center justify-center mb-5" style={{ background: `${p.c}18`, color: p.c }}>
          <p.icon className="w-6 h-6" />
        </span>
        <p className="text-sm font-bold mb-2" style={{ color: p.c }}>{String(i + 1).padStart(2, '0')}</p>
        <h3 className="text-3xl sm:text-4xl font-black text-[#0A2540] mb-3 leading-tight">{p[lang][0]}</h3>
        <p className="text-lg text-[#526E8C] leading-relaxed">{p[lang][1]}</p>
      </div>
      <div className="flex items-center justify-center min-h-[260px]">{p.v}</div>
    </div>
  );

  const head = (
    <div className="max-w-6xl mx-auto px-5 mb-10">
      <p className="text-sm font-bold text-[#0066FF] mb-3">{tr(lang, 'فلسفة مدار', 'The MADAR approach')}</p>
      <h2 className="text-3xl sm:text-5xl font-black text-[#0A2540] leading-tight max-w-3xl">
        {tr(lang, 'اتبنى عشان يشتغل من غير توقف', 'Built to keep running')}
      </h2>
    </div>
  );

  if (!desktop) {
    return (
      <section id="about" className="py-20 border-b border-[#CDE2F5]/70">
        {head}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-5 pb-6 [scrollbar-width:none]">
          {panels.map((p, i) => <Panel key={i} p={p} i={i} />)}
        </div>
        <p className="text-center text-xs text-[#526E8C]">{tr(lang, 'اسحب للجنب', 'Swipe sideways')}</p>
      </section>
    );
  }

  return (
    <section id="about" ref={ref} className="relative h-[380vh] border-b border-[#CDE2F5]/70">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <Reveal>{head}</Reveal>
        <motion.div ref={trackRef} style={{ x }} className="flex gap-24 ps-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))] pe-24 will-change-transform">
          {panels.map((p, i) => <Panel key={i} p={p} i={i} wide />)}
        </motion.div>
      </div>
    </section>
  );
};
