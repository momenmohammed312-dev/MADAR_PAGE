import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, RotateCcw, CheckCircle2, User, ShoppingCart, 
  CreditCard, ArrowLeft, ArrowRight, FileText, Sparkles, Building2, 
  TrendingUp, Wallet, ShieldCheck
} from 'lucide-react';
import { Language } from '../types';

interface InteractivePOSStoryProps {
  lang: Language;
}

export const InteractivePOSStory: React.FC<InteractivePOSStoryProps> = ({ lang }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      id: 0,
      badgeAr: 'الخطوة 1: طلب العميل',
      badgeEn: 'Step 1: Customer Order',
      titleAr: 'طلب توريد تجاري مع سداد دفعة مقدمة',
      titleEn: 'Wholesale Order with Partial Payment Request',
      descriptionAr: 'العميل "شركة الأمل للتوريدات" يطلب طلبية ملابس ويطلب دفع جزء نقدي فوري مع ترحيل المتبقي على حسابه الآجل.',
      descriptionEn: 'The customer "Al-Amal Supplies" orders bulk garments, paying a cash deposit and deferring the remaining balance on credit.',
      customer: 'شركة الأمل للتوريدات (SYNC_CUST_1786)',
      orderTotal: '24,500 ج.م',
      paidAmount: '10,000 ج.م',
      remainingAmount: '14,500 ج.م',
      itemsCount: '80 قطعة',
    },
    {
      id: 1,
      badgeAr: 'الخطوة 2: إنشاء الفاتورة في مِدار',
      badgeEn: 'Step 2: MADAR Invoice Creation',
      titleAr: 'اختيار العميل وإدراج بنود الأصناف في ثوانٍ',
      titleEn: 'Selecting Customer & Auto-Loading Items in Seconds',
      descriptionAr: 'يتم فتح شاشة "فاتورة جديدة" في مِدار، واختيار العميل وتحديد الكميات بمسح الباركود أو البحث الفوري مع التحقق التلقائي من توافر المخزون.',
      descriptionEn: 'Open "New Invoice" in MADAR, select customer, and add items via barcode or instant search with automated stock validation.',
      customer: 'شركة الأمل للتوريدات (SYNC_CUST_1786)',
      orderTotal: '24,500 ج.م',
      paidAmount: '0.00 ج.م',
      remainingAmount: '24,500 ج.م',
      itemsCount: '80 قطعة',
    },
    {
      id: 2,
      badgeAr: 'الخطوة 3: تسجيل الدفعة الجزئية',
      badgeEn: 'Step 3: Recording Partial Payment',
      titleAr: 'دفع 10,000 ج.م كاش وترحيل 14,500 ج.م آجل',
      titleEn: 'Receiving 10,000 EGP Cash & Deferring 14,500 EGP to Credit',
      descriptionAr: 'يقوم الكاشير بإدخال المبلغ المستلم نقداً (10,000 ج.م) في خانة "المدفوع"، فيقوم مِدار آلياً بترحيل الفارق إلى مديونية العميل وجدولة موعد الاستحقاق.',
      descriptionEn: 'Cashier enters the received cash amount (10,000 EGP). MADAR automatically splits cash vs receivables and updates customer ledger.',
      customer: 'شركة الأمل للتوريدات (SYNC_CUST_1786)',
      orderTotal: '24,500 ج.م',
      paidAmount: '10,000 ج.م',
      remainingAmount: '14,500 ج.م',
      itemsCount: '80 قطعة',
    },
    {
      id: 3,
      badgeAr: 'الخطوة 4: الترحيل والمزامنة الشاملة',
      badgeEn: 'Step 4: Real-time Multi-Module Sync',
      titleAr: 'طباعة الإيصال وتحديث الخزينة والمخزن فوراً',
      titleEn: 'Instant Receipt Print & Synchronized Financial Ledger',
      descriptionAr: 'بنقرة واحدة: يصدر إيصال حراري/A4 احترافي، يُخصم المخزون فورياً، تزيد خزينة اليومية بمبلغ الدفعة، ويظهر تنبيه استحقاق المتبقي في المستشار الذكي!',
      descriptionEn: 'Single click: thermal receipt printed, inventory deducted, daily cash drawer credited, and pending balance tracked by AI advisor!',
      customer: 'شركة الأمل للتوريدات (SYNC_CUST_1786)',
      orderTotal: '24,500 ج.م',
      paidAmount: '10,000 ج.م',
      remainingAmount: '14,500 ج.م',
      itemsCount: '80 قطعة',
    },
  ];

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <section id="pos-story" className="py-20 md:py-28 bg-white border-y border-[#CDE2F5]/80 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#059669]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#0066FF] text-xs font-bold mb-4 border border-[#BAE6FD]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'سيناريو تشغيلي حي' : 'Interactive Operational Scenario'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight mb-4">
            {lang === 'ar'
              ? 'كيف يتعامل مِدار مع طلبات العملاء والدفعات الجزئية؟'
              : 'How MADAR Handles Customer Orders & Partial Payments'}
          </h2>
          <p className="text-base sm:text-lg text-[#526E8C]">
            {lang === 'ar'
              ? 'شاهد خطوة بخطوة كيف يتم استقبال طلب عميل، إصدار الفاتورة، وقبول دفعة نقدية مع ترحيل الباقي آلياً دون أي خطأ محاسبي.'
              : 'Watch step-by-step how MADAR creates a sales invoice, collects a partial cash payment, and syncs balances across modules seamlessly.'}
          </p>
        </div>

        {/* Step Progress Bar & Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#F2F7FC] p-3 rounded-2xl border border-[#CDE2F5]">
          {/* Steps Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full md:w-auto flex-1">
            {steps.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveStep(idx);
                  setIsPlaying(false);
                }}
                className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 text-right flex items-center gap-2 ${
                  activeStep === idx
                    ? 'bg-[#0066FF] text-white shadow-md shadow-[#0066FF]/20'
                    : 'bg-white text-[#526E8C] hover:text-[#0A2540] hover:bg-white/80 border border-[#CDE2F5]/60'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  activeStep === idx ? 'bg-white text-[#0066FF]' : 'bg-[#EBF4FC] text-[#526E8C]'
                }`}>
                  {idx + 1}
                </span>
                <span className="truncate">
                  {lang === 'ar' ? s.badgeAr.split(':')[1] : s.badgeEn.split(':')[1]}
                </span>
              </button>
            ))}
          </div>

          {/* Interactive Play/Pause Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-xl bg-white border border-[#CDE2F5] text-[#0A2540] hover:text-[#0066FF] transition-colors shadow-xs"
              title={isPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                setActiveStep(0);
                setIsPlaying(true);
              }}
              className="p-2.5 rounded-xl bg-white border border-[#CDE2F5] text-[#0A2540] hover:text-[#0066FF] transition-colors shadow-xs"
              title="Restart Flow"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Interactive Interactive Screen Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Explanatory Context Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#F2F7FC] rounded-3xl p-6 sm:p-8 border border-[#CDE2F5] flex flex-col justify-between shadow-sm">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-white text-[#0066FF] text-xs font-bold border border-[#CDE2F5] mb-4">
                {lang === 'ar' ? steps[activeStep].badgeAr : steps[activeStep].badgeEn}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-3 leading-snug">
                {lang === 'ar' ? steps[activeStep].titleAr : steps[activeStep].titleEn}
              </h3>
              <p className="text-sm text-[#526E8C] leading-relaxed mb-6 font-normal">
                {lang === 'ar' ? steps[activeStep].descriptionAr : steps[activeStep].descriptionEn}
              </p>

              {/* Financial Snapshot */}
              <div className="space-y-3 bg-white p-4 rounded-2xl border border-[#CDE2F5] mb-6">
                <div className="flex items-center justify-between text-xs text-[#526E8C]">
                  <span>{lang === 'ar' ? 'العميل المستهدف:' : 'Customer:'}</span>
                  <span className="font-bold text-[#0A2540] truncate max-w-[170px]">
                    {steps[activeStep].customer}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#526E8C]">
                  <span>{lang === 'ar' ? 'إجمالي الطلبية:' : 'Order Total:'}</span>
                  <span className="font-extrabold text-[#0066FF] text-sm">
                    {steps[activeStep].orderTotal}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#526E8C]">
                  <span>{lang === 'ar' ? 'المدفوع نقداً (كاش):' : 'Paid Cash:'}</span>
                  <span className="font-bold text-[#059669]">
                    {steps[activeStep].paidAmount}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#526E8C] pt-2 border-t border-[#CDE2F5]/70">
                  <span>{lang === 'ar' ? 'المتبقي (مديونية آجلة):' : 'Deferred Credit Balance:'}</span>
                  <span className="font-bold text-[#DC2626]">
                    {steps[activeStep].remainingAmount}
                  </span>
                </div>
              </div>
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#CDE2F5]">
              <button
                disabled={activeStep === 0}
                onClick={() => {
                  setActiveStep((prev) => Math.max(0, prev - 1));
                  setIsPlaying(false);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-[#CDE2F5] bg-white text-[#0A2540] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#EBF4FC] transition-colors flex items-center gap-1.5"
              >
                {lang === 'ar' ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                <span>{lang === 'ar' ? 'السابق' : 'Previous'}</span>
              </button>

              <button
                disabled={activeStep === steps.length - 1}
                onClick={() => {
                  setActiveStep((prev) => Math.min(steps.length - 1, prev + 1));
                  setIsPlaying(false);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#0066FF] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#0052CC] transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>{lang === 'ar' ? 'الخطوة التالية' : 'Next Step'}</span>
                {lang === 'ar' ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Right Column: Live MADAR Simulated Window (8 cols) */}
          <div className="lg:col-span-8 bg-[#0B192C] rounded-3xl p-4 sm:p-6 border border-[#30363D] shadow-2xl text-white flex flex-col justify-between overflow-hidden">
            
            {/* Window Topbar */}
            <div className="flex items-center justify-between pb-4 border-b border-[#30363D] mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                <span className="text-xs text-[#94A3B8] mr-2 font-mono">
                  MADAR POS v2.3 — [نقطة البيع وفواتير العملاء]
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="px-2 py-0.5 rounded-md bg-[#161B22] border border-[#30363D] text-[#10B981] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  {lang === 'ar' ? 'الوردية مفتوحة • الدرج متزن' : 'Shift Active • Drawer Balanced'}
                </span>
              </div>
            </div>

            {/* Simulated MADAR POS Workspace */}
            <div className="bg-[#161B22] rounded-2xl p-4 border border-[#30363D] mb-4 space-y-4">
              
              {/* Customer Selector Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#0D1117] p-3 rounded-xl border border-[#30363D]">
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <div className="w-8 h-8 rounded-lg bg-[#0066FF]/20 text-[#0066FF] flex items-center justify-center font-bold">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8]">{lang === 'ar' ? 'العميل المحدد:' : 'Selected Customer:'}</div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>شركة الأمل للتوريدات</span>
                      <span className="text-[10px] bg-[#30363D] px-1.5 py-0.2 rounded text-[#94A3B8]">
                        حساب نشط
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-[#30363D]">
                  <div>
                    <span className="text-[#94A3B8] block">{lang === 'ar' ? 'الحد الائتماني' : 'Credit Limit'}</span>
                    <span className="font-bold text-[#E8C97A]">100,000 ج.م</span>
                  </div>
                  <div>
                    <span className="text-[#94A3B8] block">{lang === 'ar' ? 'الرصيد السابق' : 'Prior Balance'}</span>
                    <span className="font-bold text-white">0.00 ج.م</span>
                  </div>
                </div>
              </div>

              {/* Items Table Mockup */}
              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="border-b border-[#30363D] text-[#94A3B8]">
                      <th className="pb-2">{lang === 'ar' ? 'الصنف' : 'Item'}</th>
                      <th className="pb-2 text-center">{lang === 'ar' ? 'الكمية' : 'Qty'}</th>
                      <th className="pb-2 text-center">{lang === 'ar' ? 'سعر الوحدة' : 'Unit Price'}</th>
                      <th className="pb-2 text-left">{lang === 'ar' ? 'الإجمالي' : 'Total'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#30363D]/60 font-mono">
                    <tr className="hover:bg-[#0D1117]/50 transition-colors">
                      <td className="py-2.5 font-sans font-medium text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                        جاكيت جلد طبيعي فاخر (كود: MO-2280)
                      </td>
                      <td className="py-2.5 text-center text-white">50</td>
                      <td className="py-2.5 text-center text-[#94A3B8]">350.00</td>
                      <td className="py-2.5 text-left font-bold text-white">17,500.00 ج.م</td>
                    </tr>
                    <tr className="hover:bg-[#0D1117]/50 transition-colors">
                      <td className="py-2.5 font-sans font-medium text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                        هودي شتوي مطرز (كود: MO-0872)
                      </td>
                      <td className="py-2.5 text-center text-white">30</td>
                      <td className="py-2.5 text-center text-[#94A3B8]">233.33</td>
                      <td className="py-2.5 text-left font-bold text-white">7,000.00 ج.م</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Real-time Payment Split Bar */}
              <div className="p-3.5 rounded-xl bg-[#0D1117] border border-[#30363D] grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                <div className="bg-[#161B22] p-2.5 rounded-lg border border-[#30363D]">
                  <span className="text-[11px] text-[#94A3B8] block">{lang === 'ar' ? 'إجمالي الفاتورة' : 'Total Invoice'}</span>
                  <span className="text-base font-extrabold text-[#0066FF] font-mono">24,500.00 ج.م</span>
                </div>

                <div className={`p-2.5 rounded-lg border transition-all ${
                  activeStep >= 2
                    ? 'bg-[#059669]/15 border-[#059669]/40'
                    : 'bg-[#161B22] border-[#30363D]'
                }`}>
                  <span className="text-[11px] text-[#10B981] flex items-center justify-between">
                    <span>{lang === 'ar' ? 'الدفعة المقبوضة (كاش)' : 'Cash Deposit'}</span>
                    {activeStep >= 2 && <CheckCircle2 className="w-3 h-3 text-[#10B981]" />}
                  </span>
                  <span className="text-base font-extrabold text-[#10B981] font-mono">
                    {activeStep >= 2 ? '10,000.00 ج.م' : '0.00 ج.م'}
                  </span>
                </div>

                <div className={`p-2.5 rounded-lg border transition-all ${
                  activeStep >= 2
                    ? 'bg-[#DC2626]/15 border-[#DC2626]/40'
                    : 'bg-[#161B22] border-[#30363D]'
                }`}>
                  <span className="text-[11px] text-[#F87171] block">
                    {lang === 'ar' ? 'المتبقي مرحل آجل' : 'Remaining Credit'}
                  </span>
                  <span className="text-base font-extrabold text-[#F87171] font-mono">
                    {activeStep >= 2 ? '14,500.00 ج.م' : '24,500.00 ج.م'}
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Status Feed (Synced Modules Notification) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94A3B8] bg-[#0D1117] p-3 rounded-xl border border-[#30363D]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E8C97A]" />
                <span className="font-semibold text-white">
                  {activeStep === 3
                    ? (lang === 'ar' ? '✅ تم حفظ الفاتورة وطباعة الإيصال وتحديث كافة السجلات المحاسبية بنجاح!' : '✅ Invoice saved, receipt printed, and all ledgers synchronized!')
                    : (lang === 'ar' ? 'مِدار يضمن عدم وجود أي فوارق حسابية بين الدرج وكشوفات الحسابات' : 'MADAR guarantees zero discrepancies between cash drawer & ledger')}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#94A3B8]">
                <span>المخزن: -80 قطعة</span>
                <span>•</span>
                <span>الخزينة: +10,000 ج.م</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
