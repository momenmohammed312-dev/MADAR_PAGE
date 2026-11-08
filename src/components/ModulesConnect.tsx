import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Users, Truck, UserCog, Warehouse, Wallet, ShoppingCart } from 'lucide-react';
import { Language } from '../types';
import { Reveal, tr, useStepLoop } from './ui';

const NODES = [
  { icon: ShoppingCart, ar: 'المبيعات', en: 'Sales', c: '#DC2626' },
  { icon: Users, ar: 'العملاء', en: 'Customers', c: '#0066FF' },
  { icon: Truck, ar: 'الموردين', en: 'Suppliers', c: '#D97706' },
  { icon: Warehouse, ar: 'المخازن', en: 'Inventory', c: '#059669' },
  { icon: UserCog, ar: 'الموظفين', en: 'HR & Payroll', c: '#7C3AED' },
  { icon: Wallet, ar: 'الحسابات', en: 'Accounts', c: '#0A2540' },
];

const EVENTS = [
  { ar: 'فاتورة بيع ← المخزن بينقص، حساب العميل بيزيد، الخزينة بتتحدث.', en: 'A sales invoice lowers stock, raises the customer balance and updates the cash drawer.', on: [0, 3, 1, 5] },
  { ar: 'العميل بيدفع ← الدفعة بتتسجل على فواتيره وبتنزل من مديونيته.', en: 'A customer pays: the payment is matched to invoices and clears the balance.', on: [1, 5, 0] },
  { ar: 'فاتورة شراء ← المخزن بيزيد، مستحقات المورد بتتسجل.', en: 'A purchase invoice raises stock and records what you owe the supplier.', on: [2, 3, 5] },
  { ar: 'مرتبات الموظفين ← بتتحسب من الحضور وبتنزل من الحسابات.', en: 'Payroll is computed from attendance and posted to accounts.', on: [4, 5] },
];

// node positions in a 100x80 box (percent)
const POS = NODES.map((_, i) => {
  const a = ((i * 60 - 90) * Math.PI) / 180;
  return { x: 50 + 38 * Math.cos(a), y: 40 + 32 * Math.sin(a) };
});

export const ModulesConnect: React.FC<{ lang: Language }> = ({ lang }) => {
  const { ref, step } = useStepLoop(EVENTS.length, 3800);
  const ev = EVENTS[step];

  return (
    <section id="connected" className="py-24 md:py-32 bg-white border-y border-[#CDE2F5]/70">
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
        <Reveal>
          <p className="text-sm font-bold text-[#0066FF] mb-3">{tr(lang, 'وحدات مترابطة', 'Connected modules')}</p>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A2540] leading-tight mb-5">
            {tr(lang, 'العملاء والموردين والموظفين بيتكلموا مع بعض', 'Customers, suppliers and staff talk to each other')}
          </h2>
          <p className="text-lg text-[#526E8C] leading-relaxed mb-8">
            {tr(lang, 'مفيش إدخال بيانات مرتين. عملية واحدة في أي وحدة بتتحدث في كل الباقي.', 'No double entry. One action in any module updates all the others.')}
          </p>
          <div className="min-h-[88px]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.p
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-bold text-[#0A2540] leading-relaxed border-s-4 border-[#0066FF] ps-4"
              >
                {tr(lang, ev.ar, ev.en)}
              </motion.p>
            </AnimatePresence>
          </div>
        </Reveal>

        <div ref={ref} className="relative w-full aspect-[5/4] max-w-[560px] mx-auto" dir="ltr">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="none" aria-hidden="true">
            {POS.map((p, i) => {
              const active = ev.on.includes(i);
              return (
                <line
                  key={i}
                  x1={50} y1={40} x2={p.x} y2={p.y}
                  stroke={active ? NODES[i].c : '#CDE2F5'}
                  strokeWidth={active ? 2 : 1}
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="4 5"
                  className={active ? 'madar-flow' : ''}
                  style={{ transition: 'stroke 0.4s' }}
                />
              );
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border border-[#CDE2F5] shadow-xl flex items-center justify-center">
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-[#0066FF]/40"
              animate={{ scale: [1, 1.25], opacity: [0.7, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeOut' }}
            />
            <img src="/assets/app_logo_light.png" alt="" className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
          </div>

          {NODES.map((n, i) => {
            const active = ev.on.includes(i);
            return (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
                style={{ left: `${POS[i].x}%`, top: `${(POS[i].y / 80) * 100}%` }}
              >
                <motion.span
                  animate={{ scale: active ? 1.15 : 1 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border flex items-center justify-center shadow-md"
                  style={{ borderColor: active ? n.c : '#CDE2F5', color: n.c }}
                >
                  <n.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.span>
                <span className="text-[11px] sm:text-xs font-bold text-[#0A2540] whitespace-nowrap">{tr(lang, n.ar, n.en)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
