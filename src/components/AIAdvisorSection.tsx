import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Sparkles, PackageSearch, Users, AlertTriangle, ShieldAlert, Bot, FileSpreadsheet, MessageCircle, NotebookPen, Monitor } from 'lucide-react';
import { Language } from '../types';
import { Reveal, WordReveal, tr, useIsDesktop } from './ui';

const BEATS = [
  {
    ar: ['AI عادي', 'الـAI العادي مبيعرفش حاجة عن شغلك', 'تسأله عن عملائك أو مخزنك، يرد عليك بكلام عام. لأنه مفيش قدامه بياناتك.'],
    en: ['Regular AI', 'Regular AI knows nothing about your business', 'Ask about your customers or stock and you get a generic answer. It has none of your data.'],
  },
  {
    ar: ['المشكلة', 'بياناتك متفرقة في أكتر من مكان', 'إكسيل، واتساب، كراسة، وبرنامج حسابات. مفيش حد يشوفهم كلهم مع بعض.'],
    en: ['The problem', 'Your data lives in too many places', 'Excel, chat apps, notebooks and an accounting tool. Nothing sees them all together.'],
  },
  {
    ar: ['مدار AI', 'مدار بيشوف كل شغلك ويقولك تعمل إيه', 'لأن كل الوحدات في قاعدة بيانات واحدة، المستشار الذكي بيراقب المخزن والعملاء والموردين والعهد.'],
    en: ['MADAR AI', 'MADAR sees all of it and tells you what to do', 'Every module shares one database, so the advisor watches stock, customers, suppliers and custodies.'],
  },
];

const ALERTS = [
  { icon: PackageSearch, c: '#DC2626', ar: ['46 صنف قرّب يخلص', 'يحسب سرعة البيع ويقترح كمية التوريد'], en: ['46 items running out', 'Computes sales velocity and suggests reorder quantity'] },
  { icon: Users, c: '#D97706', ar: ['65 عميل كسروا وتيرة الشراء', 'عملاء كانوا بيشتروا كل أسبوع وبطلوا'], en: ['65 customers broke their buying pattern', 'Regular buyers who suddenly stopped'] },
  { icon: AlertTriangle, c: '#DC2626', ar: ['2 موردين متأخرين أكتر من 15 يوم', 'تنبيه قبل ما تتأثر علاقة التوريد'], en: ['2 suppliers overdue by 15+ days', 'Alert before the supply relationship suffers'] },
  { icon: ShieldAlert, c: '#7C3AED', ar: ['عهدة مفتوحة من 41 يوم', 'عهدة مندوب لسه متسوّتش'], en: ['Custody open for 41 days', 'A rep advance that was never settled'] },
];

const Visual: React.FC<{ beat: number; lang: Language }> = ({ beat, lang }) => {
  if (beat === 0) {
    return (
      <div className="space-y-4">
        <div className="ms-auto max-w-[85%] rounded-2xl rounded-se-sm bg-[#EBF4FC] p-4 text-[#0A2540]">
          {tr(lang, 'مين العملاء اللي اتأخروا في السداد عندي؟', 'Which of my customers are late paying?')}
        </div>
        <div className="flex gap-3 items-start">
          <span className="w-9 h-9 rounded-full bg-[#E5E7EB] text-[#6B7280] flex items-center justify-center shrink-0"><Bot className="w-5 h-5" /></span>
          <div className="rounded-2xl rounded-ss-sm bg-[#F3F4F6] p-4 text-[#4B5563] leading-relaxed">
            <WordReveal immediate stagger={0.05} delay={0.4} text={tr(lang, 'معنديش وصول لبيانات شركتك. ممكن تلصق الأرقام هنا وأنا أساعدك.', 'I have no access to your company data. You could paste the numbers here and I will help.')} />
          </div>
        </div>
      </div>
    );
  }
  if (beat === 1) {
    const src = [
      { i: FileSpreadsheet, t: 'Excel', x: '4%', y: '8%' },
      { i: MessageCircle, t: tr(lang, 'واتساب', 'Chat'), x: '58%', y: '2%' },
      { i: NotebookPen, t: tr(lang, 'كراسة', 'Notebook'), x: '10%', y: '60%' },
      { i: Monitor, t: tr(lang, 'برنامج حسابات', 'Accounting app'), x: '52%', y: '56%' },
    ];
    return (
      <div className="relative h-[280px]" dir="ltr">
        {src.map((s, k) => (
          <motion.div
            key={k}
            className="absolute flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-[#CDE2F5] shadow-sm text-sm font-semibold text-[#0A2540]"
            style={{ left: s.x, top: s.y }}
            animate={{ y: [0, -8, 0], rotate: [0, k % 2 ? 2 : -2, 0] }}
            transition={{ repeat: Infinity, duration: 3 + k * 0.5, ease: 'easeInOut' }}
          >
            <s.i className="w-4 h-4 text-[#526E8C]" />
            {s.t}
          </motion.div>
        ))}
      </div>
    );
  }
  return (
    <div className="space-y-3">
      {ALERTS.map((a, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.18 }}
          className="flex items-center gap-4 py-3 border-b border-[#E3EEF9] last:border-0"
        >
          <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${a.c}18`, color: a.c }}>
            <a.icon className="w-5 h-5" />
          </span>
          <div className="min-w-0">
            <p className="font-bold text-[#0A2540]">{tr(lang, a.ar[0], a.en[0])}</p>
            <p className="text-sm text-[#526E8C]">{tr(lang, a.ar[1], a.en[1])}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Panel: React.FC<{ beat: number; lang: Language }> = ({ beat, lang }) => (
  <div className="rounded-3xl border border-[#CDE2F5] bg-white shadow-[0_30px_70px_-30px_rgba(10,37,64,0.3)] p-6 sm:p-8 min-h-[340px] flex flex-col justify-center">
    <AnimatePresence mode="wait">
      <motion.div key={beat} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
        <Visual beat={beat} lang={lang} />
      </motion.div>
    </AnimatePresence>
  </div>
);

const Head: React.FC<{ lang: Language }> = ({ lang }) => (
  <div className="mb-6">
    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#7C3AED] mb-3">
      <Sparkles className="w-4 h-4" />
      {tr(lang, 'التحليل الذكي', 'Smart analysis')}
    </span>
    <h2 className="text-3xl sm:text-5xl font-black text-[#0A2540] leading-tight" dir="ltr" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
      AI and Data Analysis across all your business
    </h2>
  </div>
);

export const AIAdvisorSection: React.FC<{ lang: Language }> = ({ lang }) => {
  const desktop = useIsDesktop();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [beat, setBeat] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setBeat(v < 0.33 ? 0 : v < 0.66 ? 1 : 2));

  if (!desktop) {
    return (
      <section id="ai-advisor" className="py-20 bg-[#F8FBFE] border-b border-[#CDE2F5]/70">
        <div className="max-w-xl mx-auto px-5">
          <Head lang={lang} />
          <div className="space-y-14">
            {BEATS.map((b, i) => (
              <Reveal key={i}>
                <p className="text-sm font-bold text-[#7C3AED] mb-2">{b[lang][0]}</p>
                <h3 className="text-2xl font-extrabold text-[#0A2540] mb-2">{b[lang][1]}</h3>
                <p className="text-[#526E8C] mb-5">{b[lang][2]}</p>
                <Panel beat={i} lang={lang} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="ai-advisor" ref={ref} className="relative h-[330vh] bg-[#F8FBFE] border-b border-[#CDE2F5]/70">
      <div className="sticky top-0 h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-5 w-full">
          <Head lang={lang} />
          <div className="grid grid-cols-[1fr_1.2fr] gap-16 items-center">
            <AnimatePresence mode="wait">
              <motion.div key={beat} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
                <p className="text-sm font-bold text-[#7C3AED] mb-2">{BEATS[beat][lang][0]}</p>
                <h3 className="text-3xl font-extrabold text-[#0A2540] mb-3 leading-snug">{BEATS[beat][lang][1]}</h3>
                <p className="text-lg text-[#526E8C] leading-relaxed">{BEATS[beat][lang][2]}</p>
                <div className="flex gap-2 mt-8">
                  {BEATS.map((_, i) => (
                    <span key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === beat ? 'w-10 bg-[#7C3AED]' : 'w-4 bg-[#CDE2F5]'}`} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            <Panel beat={beat} lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
};
