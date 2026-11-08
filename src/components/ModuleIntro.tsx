import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import {
  BarChart3, Headphones, Truck, Users, ShoppingBag, ShoppingCart, Factory, LayoutDashboard, Store, ArrowDown,
} from 'lucide-react';
import { Language } from '../types';
import { SITE_CONFIG } from '../config';
import { tr } from './ui';

const CHIPS = [
  { icon: BarChart3, ar: 'تحليل البيانات', en: 'Data analysis', c: '#7C3AED' },
  { icon: Headphones, ar: 'خدمة العملاء', en: 'Customer service', c: '#0066FF' },
  { icon: Truck, ar: 'خدمة الموردين', en: 'Supplier service', c: '#D97706' },
  { icon: Users, ar: 'الموظفين والمرتبات', en: 'HR & Payroll', c: '#059669' },
  { icon: ShoppingBag, ar: 'المشتريات', en: 'Purchases', c: '#0066FF' },
  { icon: ShoppingCart, ar: 'المبيعات', en: 'Sales', c: '#DC2626' },
  { icon: Factory, ar: 'التصنيع', en: 'Manufacturing', c: '#D97706' },
  { icon: LayoutDashboard, ar: 'لوحة التحكم', en: 'Dashboard', c: '#7C3AED' },
  { icon: Store, ar: 'نقطة البيع', en: 'Point of sale', c: '#059669' },
];

const Chip: React.FC<{ i: number; p: MotionValue<number>; lang: Language }> = ({ i, p, lang }) => {
  const a = 0.18 + i * 0.07;
  const opacity = useTransform(p, [a, a + 0.07], [0, 1]);
  const y = useTransform(p, [a, a + 0.07], [28, 0]);
  const scale = useTransform(p, [a, a + 0.07], [0.9, 1]);
  const { icon: Icon, c } = CHIPS[i];
  return (
    <motion.li
      style={{ opacity, y, scale }}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-[#CDE2F5] shadow-sm text-[#0A2540] font-semibold text-sm sm:text-base whitespace-nowrap"
    >
      <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: c }} />
      {tr(lang, CHIPS[i].ar, CHIPS[i].en)}
    </motion.li>
  );
};

export const ModuleIntro: React.FC<{ lang: Language }> = ({ lang }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const logoO = useTransform(p, [0, 0.12], [0, 1]);
  const logoS = useTransform(p, [0, 0.12], [0.8, 1]);
  const moreO = useTransform(p, [0.8, 0.9], [0, 1]);

  return (
    <section id="intro" ref={ref} className="relative h-[230vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-5 overflow-hidden">
        <motion.div style={{ opacity: logoO, scale: logoS }} className="flex flex-col items-center text-center">
          <img src="/assets/app_logo_light.png" alt="" width={88} height={88} className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
          <h2 className="mt-4 text-5xl sm:text-7xl font-black text-[#0A2540] tracking-tight">
            {tr(lang, SITE_CONFIG.brand.nameAr.replace(/ِ/g, ''), 'MADAR')} <span className="text-[#0066FF]">ERP</span>
          </h2>
          <p className="mt-3 text-xl sm:text-3xl font-bold text-[#526E8C]">
            {tr(lang, SITE_CONFIG.brand.taglineAr, SITE_CONFIG.brand.taglineEn)}
          </p>
        </motion.div>

        <ul className="mt-10 max-w-3xl flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {CHIPS.map((_, i) => (
            <Chip key={i} i={i} p={p} lang={lang} />
          ))}
        </ul>

        <motion.div style={{ opacity: moreO }} className="mt-6 flex items-center gap-2 text-[#0066FF] font-bold">
          <span>{tr(lang, 'وأكتر كمان', 'and more')}</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};
