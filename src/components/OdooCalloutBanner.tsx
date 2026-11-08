import React from 'react';
import { Download, Sparkles, CheckCircle2, ShieldCheck, ArrowDown, ExternalLink, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { SITE_CONFIG } from '../config';

interface OdooCalloutBannerProps {
  lang: Language;
}

export const OdooCalloutBanner: React.FC<OdooCalloutBannerProps> = ({ lang }) => {
  return (
    <section id="downloads" className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-[#CDE2F5]">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#0066FF]/5 via-[#7C3AED]/5 to-[#059669]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Odoo-Style Impact Header with Sketch Callout */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F2FE] text-[#0066FF] text-xs font-bold mb-4 border border-[#BAE6FD] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'ابدأ تحولك الرقمي اليوم' : 'Transform Your Enterprise Today'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-6">
            {lang === 'ar' ? (
              <>
                حوّل فوضى الفواتير والديون إلى
                <span className="block text-[#0066FF] mt-1 relative inline-block">
                  منظومة ذكية ومستقرة
                  {/* Handwritten underline effect */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#0066FF]/40"
                    viewBox="0 0 200 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <path d="M5 12 Q 50 3, 100 12 T 195 10" />
                  </svg>
                </span>
              </>
            ) : (
              <>
                Turn Invoice Chaos Into a
                <span className="block text-[#0066FF] mt-1">Smart, Resilient Ecosystem</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-[#526E8C]">
            {lang === 'ar'
              ? 'اختر نسختك الآن، وحمّلها مباشرة عبر Google Drive وثبّتها على جهازك في أقل من دقيقتين دون أي تعقيد تقني.'
              : 'Choose your edition, download directly from Google Drive, and install on your PC in under 2 minutes.'}
          </p>
        </div>

        {/* The 2 Main Download Cards (Google Drive Hub) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          
          {/* Card 1: 7-Day Free Trial Edition */}
          <div className="relative bg-[#F2F7FC] rounded-3xl p-6 sm:p-8 border-2 border-[#0066FF] shadow-lg shadow-[#0066FF]/10 flex flex-col justify-between group">
            {/* Odoo Style Badge */}
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#0066FF] text-white text-xs font-extrabold shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>{lang === 'ar' ? 'الأكثر طلباً للتجربة' : 'Most Popular for Evaluation'}</span>
            </div>

            <div>
              <div className="mb-4">
                <span className="text-xs font-bold text-[#0066FF] uppercase tracking-wider block">
                  {lang === 'ar' ? 'النسخة التجريبية' : 'Free Trial Edition'}
                </span>
                <h3 className="text-2xl font-bold text-[#0A2540] mt-1">
                  {lang === 'ar' ? `تجربة مجانية لمدة ${SITE_CONFIG.downloads.trialDurationDays} أيام` : `${SITE_CONFIG.downloads.trialDurationDays}-Day Full Feature Trial`}
                </h3>
                <p className="text-xs sm:text-sm text-[#526E8C] mt-2">
                  {lang === 'ar'
                    ? 'تفتح لك كافة مديولات النظام دون استثناء، لتجربة تسجيل الفواتير، المخازن، والتحليل الذكي على بضائعك الفعلية.'
                    : 'Unlocks every single ERP module with no restrictions. Experience invoicing, stock audits, and AI advice on your actual inventory.'}
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5 py-4 border-y border-[#CDE2F5] my-4">
                {[
                  lang === 'ar' ? 'كافة المميزات الـ 11 مفتوحة 100% للتجربة' : 'All 11 modules unlocked for 7 full days',
                  lang === 'ar' ? 'لا يتطلب تسجيل بطاقة بنكية أو دفع مسبق' : 'No credit card or payment commitment required',
                  lang === 'ar' ? 'إمكانية ترحيل بياناتك المسجلة للنسخة الدائمة لاحقاً' : 'Seamless data migration to full edition later',
                  lang === 'ar' ? 'رابط مباشر وسريع عبر Google Drive' : 'Fast, virus-scanned Google Drive direct link',
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#0A2540] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href="#download"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm font-bold shadow-md shadow-[#0066FF]/25 hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{lang === 'ar' ? 'تحميل النسخة التجريبية (Google Drive)' : 'Download Trial via Google Drive'}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
              <span className="text-[11px] text-[#8BA2BC] text-center block">
                {lang === 'ar' ? 'متوفر لنظامي Windows و Android' : 'Available for Windows & Android'}
              </span>
            </div>
          </div>

          {/* Card 2: Full Edition */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-[#CDE2F5] shadow-sm flex flex-col justify-between hover:border-[#0066FF]/40 transition-colors">
            <div>
              <div className="mb-4">
                <span className="text-xs font-bold text-[#059669] uppercase tracking-wider block">
                  {lang === 'ar' ? 'النسخة الكاملة المعتمدة' : 'Official Full Production Edition'}
                </span>
                <h3 className="text-2xl font-bold text-[#0A2540] mt-1">
                  {lang === 'ar' ? 'إصدار مِدار الدائم (Full Edition)' : 'MADAR Full Production Build'}
                </h3>
                <p className="text-xs sm:text-sm text-[#526E8C] mt-2">
                  {lang === 'ar'
                    ? 'للعملاء والمؤسسات الراغبة في تثبيت الحزمة الإنتاجية الكاملة وتفعيل الترخيص الدائم مع الدعم الفني المباشر.'
                    : 'For registered clients deploying the full production instance with license activation and lifetime support.'}
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5 py-4 border-y border-[#CDE2F5] my-4">
                {[
                  lang === 'ar' ? 'ترخيص دائم مع قاعدة بيانات محلية غير محدودة' : 'Permanent local license with unlimited records',
                  lang === 'ar' ? 'دعم فني وتدريب مباشر لفريق العمل' : 'Direct staff onboarding and configuration support',
                  lang === 'ar' ? 'تحديثات أمنية واستقرار دورية' : 'Periodic maintenance and feature updates',
                  lang === 'ar' ? 'تخصيص الفواتير والشعار والهوية التجارية بالكامل' : 'Custom receipt branding, thermal layouts & invoice templates',
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#0A2540] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href="#download"
                className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-[#F2F7FC] text-[#0A2540] hover:text-[#0066FF] border border-[#CDE2F5] text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#0066FF]" />
                <span>{lang === 'ar' ? 'تحميل النسخة الكاملة (Google Drive)' : 'Download Full Build via Google Drive'}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
              <span className="text-[11px] text-[#8BA2BC] text-center block">
                {lang === 'ar' ? 'متوفر لنظامي Windows و Android' : 'Available for Windows & Android'}
              </span>
            </div>
          </div>

        </div>

        {/* Security & Integrity Note */}
        <div className="p-4 rounded-2xl bg-[#F2F7FC] border border-[#CDE2F5] max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs text-[#526E8C] text-center">
          <ShieldCheck className="w-4 h-4 text-[#059669] shrink-0" />
          <span>
            {lang === 'ar'
              ? 'كافة ملفات التحميل المرفوعة على Google Drive موقعة ومفحوصة تماماً من أي فيروسات أو برمجيات خبيثة.'
              : 'All files hosted on Google Drive are clean, digitally signed, and scanned against viruses.'}
          </span>
        </div>

      </div>
    </section>
  );
};
