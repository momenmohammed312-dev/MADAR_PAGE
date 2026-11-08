import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Language } from '../types';
import { BrowserFrame, Reveal, WordReveal, tr } from './ui';
import { MobileMini } from './AboutSection';

const List: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-3 mb-8">
    {items.map((t, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 * i }}
        className="flex items-start gap-3 text-[#0A2540]"
      >
        <Check className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
        <span>{t}</span>
      </motion.li>
    ))}
  </ul>
);

export const CrossPlatformSection: React.FC<{ lang: Language }> = ({ lang }) => (
  <section id="platforms" className="py-24 md:py-32 bg-white border-b border-[#CDE2F5]/70">
    <div className="max-w-6xl mx-auto px-5 space-y-28">
      <div className="max-w-2xl">
        <Reveal>
          <p className="text-sm font-bold text-[#0066FF] mb-3">{tr(lang, 'على أي جهاز', 'On every device')}</p>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A2540] leading-tight">
            {tr(lang, 'كمبيوتر في المحل، وتليفون في إيدك', 'A computer at the counter, a phone in your hand')}
          </h2>
        </Reveal>
      </div>

      {/* Windows */}
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] mb-3">
            <WordReveal text={tr(lang, 'مدار على الويندوز', 'MADAR for Windows')} />
          </h3>
          <p className="text-lg text-[#526E8C] mb-6 leading-relaxed">
            {tr(lang, 'للكاشير والإدارة. سريع على الكيبورد وشاشات اللمس.', 'For the cashier and the back office. Fast on keyboard and touchscreen.')}
          </p>
          <List
            items={[
              tr(lang, 'طابعات حرارية 80mm و58mm', '80mm and 58mm thermal printers'),
              tr(lang, 'اختصارات كيبورد لإنهاء الفاتورة', 'Keyboard shortcuts to close an invoice'),
              tr(lang, 'قارئ باركود ودُرج نقدية', 'Barcode scanner and cash drawer support'),
              tr(lang, 'ويندوز 10 / 11 (64-bit)', 'Windows 10 / 11 (64-bit)'),
            ]}
          />
          <a href="#downloads" className="inline-flex px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold transition-colors">
            {tr(lang, 'حمّل نسخة الويندوز', 'Get the Windows app')}
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <BrowserFrame>
            <img src="/assets/vid_dashboard_light.jpg" alt={tr(lang, 'لوحة التحكم في مدار', 'MADAR dashboard')} className="w-full" loading="lazy" />
          </BrowserFrame>
        </Reveal>
      </div>

      {/* Android */}
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <Reveal className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 -z-0 mx-auto w-72 h-72 rounded-full bg-[#0066FF]/10 blur-3xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
          <div className="relative flex justify-center gap-6">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}>
              <MobileMini lang={lang} />
            </motion.div>
          </div>
          <p className="text-center text-xs text-[#526E8C] mt-4">{tr(lang, 'شاشة توضيحية للتطبيق', 'Illustrative app screen')}</p>
        </Reveal>
        <Reveal className="order-1 lg:order-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] mb-3">
            <WordReveal text={tr(lang, 'مدار على الأندرويد', 'MADAR for Android')} />
          </h3>
          <p className="text-lg text-[#526E8C] mb-6 leading-relaxed">
            {tr(lang, 'للمندوب والمالك. فواتير في الميدان وأرقام شغلك في جيبك.', 'For field reps and owners. Invoices on the road, your numbers in your pocket.')}
          </p>
          <List
            items={[
              tr(lang, 'مسح باركود بكاميرا التليفون', 'Scan barcodes with the phone camera'),
              tr(lang, 'طباعة على طابعات البلوتوث', 'Print to Bluetooth printers'),
              tr(lang, 'الوضع الفاتح والداكن', 'Light and dark modes'),
            ]}
          />
          <a href="#downloads" className="inline-flex px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold transition-colors">
            {tr(lang, 'حمّل نسخة الأندرويد', 'Get the Android app')}
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);
