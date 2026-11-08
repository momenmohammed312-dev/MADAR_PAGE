import React, { useState } from 'react';
import { Sun, Moon, Sparkles, CheckCircle2, Eye } from 'lucide-react';
import { Language } from '../types';

interface ThemeSwitcherSectionProps {
  lang: Language;
}

export const ThemeSwitcherSection: React.FC<ThemeSwitcherSectionProps> = ({ lang }) => {
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light');
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const screens = [
    {
      titleAr: 'لوحة التحكم الرئيسية والتحصيلات',
      titleEn: 'Main Executive Dashboard',
      lightImg: '/assets/vid_dashboard_light.jpg',
      darkImg: '/assets/live_01_dashboard_dark.png',
      descAr: 'إحصائيات المبيعات، المشتريات، صافي الأرباح، والتنبيهات الاستباقية في نظرة واحدة.',
      descEn: 'Sales figures, procurement expenses, net profit, and proactive alerts in a single view.',
    },
    {
      titleAr: 'أوامر التصنيع ومراحل الإنتاج (BOM)',
      titleEn: 'Manufacturing & Line Progress',
      lightImg: '/assets/vid_manufacturing_light.jpg',
      darkImg: '/assets/vid_manufacturing_dark.jpg',
      descAr: 'متابعة خطوط الإنتاج ونسب الإنجاز بالألوان الواضحة المناسبة للإضاءة الصناعية.',
      descEn: 'Production line progress bars and BOM recipes engineered for shopfloor readability.',
    },
    {
      titleAr: 'التحليل الذكي والمستشار الشامل',
      titleEn: 'Predictive Smart Advisor',
      lightImg: '/assets/vid_smart_advisor_light.jpg',
      darkImg: '/assets/vid_smart_advisor_dark.jpg',
      descAr: 'استشراف نفاد البضائع، ركود العملاء، ومستحقات الموردين الحرجة.',
      descEn: 'Anticipates stockout dates, detects inactive accounts, and flags aging liabilities.',
    },
    {
      titleAr: 'قائمة العملاء وكشوفات الحساب',
      titleEn: 'Customer Accounts & Receivables',
      lightImg: '/assets/vid_customers_light.jpg',
      darkImg: '/assets/vid_customers_dark.jpg',
      descAr: 'تتبع حسابات 233 عميل والديون المستحقة وسقوف الائتمان بدقة.',
      descEn: 'Manage 233+ customer ledgers, credit balances, and payment notifications.',
    },
  ];

  const currentScreen = screens[activeScreenIndex];

  return (
    <section id="mode-preview" className="py-20 md:py-28 bg-[#F2F7FC] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#0066FF] text-xs font-bold mb-4 border border-[#CDE2F5] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'تصميم بصري متكامل' : 'Dual Visual System'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight mb-4">
            {lang === 'ar'
              ? 'نهاري مشرق أم ليلي مريح؟ مِدار مصمم بكلا الوضعين'
              : 'Crisp Daylight or Relaxing Night Theme? MADAR Excels in Both'}
          </h2>
          <p className="text-base sm:text-lg text-[#526E8C]">
            {lang === 'ar'
              ? 'جرّب بنفسك التبديل بين الوضع الفاتح والوضع الداكن؛ تم ضبط التباين والخطوط لتقليل إجهاد عين الكاشير والمحاسب طوال ساعات العمل.'
              : 'Toggle between Light and Dark modes. Contrast and typography have been meticulously calibrated for zero eye strain during long shifts.'}
          </p>
        </div>

        {/* Interactive Theme Toggle Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#CDE2F5] shadow-xs">
            <button
              onClick={() => setSelectedTheme('light')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedTheme === 'light'
                  ? 'bg-[#0066FF] text-white shadow-md shadow-[#0066FF]/25'
                  : 'text-[#526E8C] hover:text-[#0A2540] hover:bg-[#F2F7FC]'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>{lang === 'ar' ? 'الوضع الفاتح (Light Mode)' : 'Light Mode (Default)'}</span>
            </button>
            <button
              onClick={() => setSelectedTheme('dark')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedTheme === 'dark'
                  ? 'bg-[#0A2540] text-white shadow-md'
                  : 'text-[#526E8C] hover:text-[#0A2540] hover:bg-[#F2F7FC]'
              }`}
            >
              <Moon className="w-4 h-4 text-[#E8C97A]" />
              <span>{lang === 'ar' ? 'الوضع الداكن (Dark Mode)' : 'Dark Mode (Night)'}</span>
            </button>
          </div>
        </div>

        {/* Screen Selector Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {screens.map((screen, idx) => (
            <button
              key={idx}
              onClick={() => setActiveScreenIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                activeScreenIndex === idx
                  ? 'bg-white border-[#0066FF] text-[#0066FF] shadow-xs'
                  : 'bg-white/70 border-[#CDE2F5] text-[#526E8C] hover:bg-white'
              }`}
            >
              {lang === 'ar' ? screen.titleAr.split('(')[0] : screen.titleEn}
            </button>
          ))}
        </div>

        {/* Display Frame */}
        <div className={`rounded-3xl p-4 sm:p-6 border transition-all duration-300 shadow-xl ${
          selectedTheme === 'light'
            ? 'bg-white border-[#CDE2F5]'
            : 'bg-[#0D1117] border-[#30363D]'
        }`}>
          {/* Mock Window Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-inherit">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
              <span className="w-3 h-3 rounded-full bg-[#10B981]" />
              <span className={`text-xs font-semibold mr-2 ${
                selectedTheme === 'light' ? 'text-[#526E8C]' : 'text-[#94A3B8]'
              }`}>
                {lang === 'ar' ? currentScreen.titleAr : currentScreen.titleEn}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                selectedTheme === 'light'
                  ? 'bg-[#E0F2FE] text-[#0066FF]'
                  : 'bg-[#161B22] text-[#E8C97A] border border-[#30363D]'
              }`}>
                {selectedTheme === 'light' ? 'Light Theme Active' : 'Dark Theme Active'}
              </span>
            </div>
          </div>

          {/* Actual Screen Image */}
          <div className="relative rounded-2xl overflow-hidden border border-inherit">
            <img
              src={selectedTheme === 'light' ? currentScreen.lightImg : currentScreen.darkImg}
              alt={lang === 'ar' ? currentScreen.titleAr : currentScreen.titleEn}
              className="w-full h-auto object-cover max-h-[580px]"
            />
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <span className={selectedTheme === 'light' ? 'text-[#526E8C]' : 'text-[#94A3B8]'}>
              {lang === 'ar' ? currentScreen.descAr : currentScreen.descEn}
            </span>
            <span className="text-[11px] font-mono text-[#0066FF] font-bold">
              100% Native Rendered UI
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
