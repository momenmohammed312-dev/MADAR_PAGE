import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Package, Wallet, UserRound, Bell, Printer } from 'lucide-react';
import { Language } from '../types';
import { Counter, Reveal, WordReveal, tr, useStepLoop } from './ui';

const ITEMS = [
  { ar: 'قميص قطن – مقاس L', en: 'Cotton shirt – L', qty: 50, price: 250 },
  { ar: 'قميص قطن – مقاس M', en: 'Cotton shirt – M', qty: 30, price: 400 },
];
const TOTAL = 24500;
const PAID = 10000;

const STEPS = [
  {
    ar: ['العميل بيطلب', 'طلب توريد ودفعة مقدمة', 'شركة الأمل للتوريدات عايزة 80 قطعة، وهتدفع 10,000 ج.م دلوقتي والباقي آجل.'],
    en: ['Customer orders', 'Bulk order with a deposit', 'Al-Amal Supplies wants 80 pieces, pays 10,000 EGP now and the rest on credit.'],
  },
  {
    ar: ['فاتورة جديدة', 'الفاتورة جاهزة في ثواني', 'اختار العميل، ضيف الأصناف بالباركود أو البحث. المخزون بيتراجع تلقائي.'],
    en: ['New invoice', 'Invoice ready in seconds', 'Pick the customer, add items by barcode or search. Stock is checked automatically.'],
  },
  {
    ar: ['دفعة جزئية', 'ادفع جزء والباقي آجل', 'اكتب المبلغ المستلم. مدار بيحسب المتبقي ويسجله على حساب العميل.'],
    en: ['Partial payment', 'Pay part, defer the rest', 'Enter the cash received. MADAR computes the balance and posts it to the customer account.'],
  },
  {
    ar: ['كله اتحدّث', 'طباعة وترحيل في نفس اللحظة', 'الإيصال بيطبع، والمخزن والخزينة وحساب العميل بيتحدثوا مع بعض.'],
    en: ['Everything syncs', 'Print and post at once', 'Receipt prints while stock, cash drawer and customer ledger update together.'],
  },
];

const Row: React.FC<{ k: string; v: React.ReactNode; tone?: string; strong?: boolean }> = ({ k, v, tone = '#0A2540', strong }) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-[#526E8C]">{k}</span>
    <span className={strong ? 'font-extrabold text-base' : 'font-bold'} style={{ color: tone }}>{v}</span>
  </div>
);

const Screen: React.FC<{ step: number; lang: Language }> = ({ step, lang }) => {
  const customer = tr(lang, 'شركة الأمل للتوريدات', 'Al-Amal Supplies');
  if (step === 0) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#526E8C]">
          <UserRound className="w-4 h-4 text-[#0066FF]" />
          {customer}
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-se-sm bg-[#EBF4FC] p-4 text-[#0A2540] leading-relaxed">
          <WordReveal
            immediate
            stagger={0.05}
            text={tr(lang, 'محتاج 80 قطعة قميص. هدفع 10,000 جنيه دلوقتي والباقي آجل.', 'I need 80 shirts. I will pay 10,000 EGP now and the rest later.')}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="ms-auto max-w-[70%] rounded-2xl rounded-ss-sm bg-[#0066FF] text-white p-3 text-sm"
        >
          {tr(lang, 'تمام، هجهز الفاتورة.', 'Sure, preparing the invoice.')}
        </motion.div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="grid sm:grid-cols-2 gap-5 items-start">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 110, damping: 16 }}
          className="bg-white rounded-b-xl border border-[#CDE2F5] shadow-md p-4 space-y-2 [clip-path:polygon(0_0,100%_0,100%_calc(100%-6px),95%_100%,90%_calc(100%-6px),85%_100%,80%_calc(100%-6px),75%_100%,70%_calc(100%-6px),65%_100%,60%_calc(100%-6px),55%_100%,50%_calc(100%-6px),45%_100%,40%_calc(100%-6px),35%_100%,30%_calc(100%-6px),25%_100%,20%_calc(100%-6px),15%_100%,10%_calc(100%-6px),5%_100%,0_calc(100%-6px))] pb-5"
        >
          <div className="flex items-center gap-2 font-bold text-[#0A2540] text-sm"><Printer className="w-4 h-4 text-[#0066FF]" />{tr(lang, 'إيصال', 'Receipt')}</div>
          <Row k={customer} v="" />
          <Row k={tr(lang, 'الإجمالي', 'Total')} v={`${TOTAL.toLocaleString('en-US')}`} />
          <Row k={tr(lang, 'مدفوع', 'Paid')} v={`${PAID.toLocaleString('en-US')}`} tone="#059669" />
          <Row k={tr(lang, 'متبقي', 'Due')} v={`${(TOTAL - PAID).toLocaleString('en-US')}`} tone="#DC2626" />
        </motion.div>
        <div className="space-y-2.5">
          {[
            { i: Package, t: tr(lang, 'المخزن', 'Inventory'), v: tr(lang, '−80 قطعة', '−80 pcs'), c: '#D97706' },
            { i: Wallet, t: tr(lang, 'الخزينة', 'Cash drawer'), v: '+10,000', c: '#059669' },
            { i: UserRound, t: tr(lang, 'حساب العميل', 'Customer ledger'), v: '14,500', c: '#DC2626' },
            { i: Bell, t: tr(lang, 'المستشار الذكي', 'AI advisor'), v: tr(lang, 'تنبيه استحقاق', 'Due reminder'), c: '#7C3AED' },
          ].map((e, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + idx * 0.35 }}
              className="flex items-center gap-3 text-sm"
            >
              <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${e.c}18`, color: e.c }}>
                <e.i className="w-4 h-4" />
              </span>
              <span className="text-[#526E8C] flex-1">{e.t}</span>
              <span className="font-bold" style={{ color: e.c }}>{e.v}</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs font-bold">
        <span className="text-[#0A2540]">{tr(lang, 'فاتورة بيع جديدة', 'New sales invoice')}</span>
        <span className="text-[#526E8C]">{customer}</span>
      </div>
      <div className="rounded-xl border border-[#CDE2F5] divide-y divide-[#E3EEF9] overflow-hidden bg-white">
        {ITEMS.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.35 }}
            className="grid grid-cols-[1fr_auto_auto] gap-4 px-4 py-3 text-sm"
          >
            <span className="font-semibold text-[#0A2540]">{tr(lang, it.ar, it.en)}</span>
            <span className="text-[#526E8C] tabular-nums">{it.qty} × {it.price}</span>
            <span className="font-bold tabular-nums text-[#0A2540]">{(it.qty * it.price).toLocaleString('en-US')}</span>
          </motion.div>
        ))}
      </div>
      <div className="flex items-baseline justify-between px-1">
        <span className="text-[#526E8C] text-sm">{tr(lang, 'الإجمالي', 'Total')}</span>
        <span className="text-2xl font-black text-[#0066FF] tabular-nums"><Counter key={step} to={TOTAL} duration={0.9} /> <span className="text-sm">{tr(lang, 'ج.م', 'EGP')}</span></span>
      </div>
      {step === 2 && (
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-xl bg-[#F2F7FC] border border-[#CDE2F5] p-4 space-y-2.5">
          <Row k={tr(lang, 'المدفوع كاش', 'Cash paid')} v={`${PAID.toLocaleString('en-US')} ${tr(lang, 'ج.م', 'EGP')}`} tone="#059669" />
          <Row strong k={tr(lang, 'المتبقي (آجل)', 'Remaining (credit)')} v={`${(TOTAL - PAID).toLocaleString('en-US')} ${tr(lang, 'ج.م', 'EGP')}`} tone="#DC2626" />
        </motion.div>
      )}
    </div>
  );
};

export const OrderFlow: React.FC<{ lang: Language }> = ({ lang }) => {
  const { ref, step, pick } = useStepLoop(4, 4200);
  const s = STEPS[step][lang];

  return (
    <section id="pos-story" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal className="max-w-2xl mb-12">
          <p className="text-sm font-bold text-[#0066FF] mb-3">{tr(lang, 'من الطلب للتحصيل', 'From order to payment')}</p>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A2540] leading-tight">
            {tr(lang, 'عميل بيطلب ويدفع جزء. شوف إيه اللي بيحصل.', 'A customer orders and pays part. Watch what happens.')}
          </h2>
        </Reveal>

        <div ref={ref} className="grid lg:grid-cols-[1fr_1.35fr] gap-10 lg:gap-16 items-center">
          <div>
            <ol className="flex gap-2 mb-8" aria-label="steps">
              {STEPS.map((_, i) => (
                <li key={i} className="flex-1">
                  <button
                    onClick={() => pick(i)}
                    aria-label={`step ${i + 1}`}
                    className="w-full h-1.5 rounded-full bg-[#CDE2F5] overflow-hidden"
                  >
                    <span
                      className="block h-full bg-[#0066FF] rounded-full transition-all duration-500"
                      style={{ width: i < step ? '100%' : i === step ? '100%' : '0%', opacity: i <= step ? 1 : 0 }}
                    />
                  </button>
                </li>
              ))}
            </ol>
            <AnimatePresence mode="wait">
              <motion.div key={step} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
                <p className="text-sm font-bold text-[#0066FF] mb-2">{s[0]}</p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] mb-3">{s[1]}</h3>
                <p className="text-[#526E8C] text-lg leading-relaxed">{s[2]}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="rounded-3xl border border-[#CDE2F5] bg-white shadow-[0_30px_70px_-30px_rgba(10,37,64,0.35)] overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 bg-[#EBF4FC] border-b border-[#CDE2F5]" dir="ltr">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F87171]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
              <span className="ms-3 text-[11px] font-semibold text-[#526E8C]">MADAR ERP</span>
            </div>
            <div className="p-5 sm:p-7 min-h-[330px]">
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <Screen step={step} lang={lang} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
