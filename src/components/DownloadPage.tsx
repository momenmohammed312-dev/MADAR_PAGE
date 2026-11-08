import React, { useState } from 'react';
import { 
  Download, ArrowRight, ArrowLeft, Monitor, Smartphone, 
  CheckCircle2, ShieldCheck, Sparkles, Globe, ExternalLink, HardDrive, Cpu
} from 'lucide-react';
import type { Language } from '../types';
import { SITE_CONFIG } from '../config';

interface DownloadPageProps {
  lang: Language;
  onBackToHome: () => void;
  onToggleLang: () => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ lang, onBackToHome, onToggleLang }) => {
  const [selectedOS, setSelectedOS] = useState<'windows' | 'android'>('windows');

  const links = SITE_CONFIG.downloads[selectedOS];

  return (
    <div className="min-h-screen bg-[#F2F7FC] text-[#0B192C] font-sans antialiased selection:bg-[#0066FF] selection:text-white flex flex-col justify-between">
      
      {/* Top Navigation Bar */}
      <header className="bg-white/90 backdrop-blur-md border-b border-[#CDE2F5] py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <button 
            onClick={onBackToHome}
            className="flex items-center gap-3 text-right group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0066FF] to-[#0A2540] p-1.5 flex items-center justify-center shadow-md shadow-[#0066FF]/20 group-hover:scale-105 transition-transform">
              <img
                src="/assets/app_logo_light.png"
                alt="MADAR Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#0A2540] flex items-center gap-2">
                {lang === 'ar' ? SITE_CONFIG.brand.nameAr : SITE_CONFIG.brand.nameEn}
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0066FF] font-semibold">
                  ERP
                </span>
              </span>
              <span className="text-[11px] text-[#526E8C] block">
                {lang === 'ar' ? SITE_CONFIG.brand.taglineAr : SITE_CONFIG.brand.taglineEn}
              </span>
            </div>
          </button>

          {/* Right Controls: Language & Back to Home */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="px-3 py-1.5 rounded-lg border border-[#CDE2F5] hover:bg-[#EBF4FC] text-[#0A2540] text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {/* Back to Home Button */}
            <button
              onClick={onBackToHome}
              className="px-4 py-2 rounded-xl bg-white hover:bg-[#EBF4FC] text-[#0A2540] hover:text-[#0066FF] border border-[#CDE2F5] text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-xs"
            >
              {lang === 'ar' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>{lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Download Content (Antigravity Style) */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex-1 w-full">
        
        {/* Antigravity Headline & Animated Line */}
        <div className="mb-10 text-right">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#0066FF] text-xs font-bold mb-4 border border-[#CDE2F5] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'روابط التحميل المعتمدة الرسمية' : 'Official Verified Releases'}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black text-[#0A2540] tracking-tight mb-3">
            {lang === 'ar' ? 'تحميل نظام مِدار ERP' : 'Download MADAR ERP'}
          </h1>
          
          <p className="text-base sm:text-lg text-[#526E8C] max-w-2xl">
            {lang === 'ar'
              ? 'اختر نظام التشغيل والنسخة المناسبة لنشاطك، وحمّل الملف برابط مباشر وسريع عبر Google Drive.'
              : 'Choose your operating system and edition to install MADAR ERP via fast Google Drive direct links.'}
          </p>
        </div>

        {/* Antigravity OS Selector Pills */}
        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-[#CDE2F5]">
          {/* Windows Button */}
          <button
            onClick={() => setSelectedOS('windows')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
              selectedOS === 'windows'
                ? 'bg-[#0A2540] text-white shadow-md shadow-[#0A2540]/20 scale-102'
                : 'bg-white hover:bg-[#EBF4FC] text-[#526E8C] hover:text-[#0A2540] border border-[#CDE2F5]'
            }`}
          >
            <Monitor className={`w-4 h-4 ${selectedOS === 'windows' ? 'text-[#38BDF8]' : 'text-[#0066FF]'}`} />
            <span>Windows (ويندوز)</span>
          </button>

          {/* Android Button */}
          <button
            onClick={() => setSelectedOS('android')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
              selectedOS === 'android'
                ? 'bg-[#0A2540] text-white shadow-md shadow-[#0A2540]/20 scale-102'
                : 'bg-white hover:bg-[#EBF4FC] text-[#526E8C] hover:text-[#0A2540] border border-[#CDE2F5]'
            }`}
          >
            <Smartphone className={`w-4 h-4 ${selectedOS === 'android' ? 'text-[#4ADE80]' : 'text-[#059669]'}`} />
            <span>Android (أندرويد)</span>
          </button>
        </div>

        {/* Main Application Download Card (Matching Antigravity's Card Structure) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#CDE2F5] shadow-sm mb-10">
          
          {/* App Header & Version */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-[#CDE2F5]">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white shadow-md ${
                selectedOS === 'windows' ? 'bg-[#0066FF] shadow-[#0066FF]/25' : 'bg-[#059669] shadow-[#059669]/25'
              }`}>
                {selectedOS === 'windows' ? <Monitor className="w-6 h-6" /> : <Smartphone className="w-6 h-6" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-[#0A2540]">
                    {lang === 'ar' 
                      ? (selectedOS === 'windows' ? 'تطبيق مِدار لويندوز' : 'تطبيق مِدار للأندرويد')
                      : (selectedOS === 'windows' ? 'MADAR for Windows' : 'MADAR for Android')}
                  </h2>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#0066FF] font-mono font-bold">
                    {SITE_CONFIG.brand.version}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#526E8C] mt-0.5">
                  {selectedOS === 'windows'
                    ? (lang === 'ar' ? 'مناسب لمحطات الكاشير، الإدارة المحاسبية، والتصنيع' : 'Optimized for high-speed POS, inventory & financial control')
                    : (lang === 'ar' ? 'مناسب للمناديب، أصحاب الأعمال، والجرد المتنقل' : 'Tailored for mobile sales representatives & field audits')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#059669] bg-[#DCFCE7] px-3.5 py-1.5 rounded-xl border border-[#BBF7D0]">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'ar' ? 'رابط Google Drive مفحوص ومباشر' : 'Verified Google Drive Link'}</span>
            </div>
          </div>

          {/* The 2 Download Options: 7-Day Trial vs Standard Edition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Option 1: 7-Day Free Trial (Highlighted Primary) */}
            <div className="relative bg-[#F2F7FC] rounded-2xl p-6 border-2 border-[#0066FF] shadow-md shadow-[#0066FF]/10 flex flex-col justify-between">
              <div className="absolute -top-3 right-5 px-3 py-0.5 rounded-full bg-[#0066FF] text-white text-[11px] font-extrabold shadow-sm">
                {lang === 'ar' ? '✨ تجربة مجانية كاملة' : '✨ Full Free Trial'}
              </div>

              <div>
                <span className="text-xs font-bold text-[#0066FF] block mb-1">
                  {lang === 'ar' ? 'النسخة التجريبية' : 'Free Trial Edition'}
                </span>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                  {lang === 'ar' ? `تجربة مجانية لمدة ${SITE_CONFIG.downloads.trialDurationDays} أيام` : `${SITE_CONFIG.downloads.trialDurationDays}-Day Full Feature Trial`}
                </h3>
                <p className="text-xs text-[#526E8C] leading-relaxed mb-4">
                  {lang === 'ar'
                    ? 'تتيح لك تجربة كافة مديولات النظام بدون قيود (المبيعات، المخازن، الحسابات، المستشار الذكي، والتصنيع) على بيانات عملك الفعلية.'
                    : 'Unlocks every single ERP module with no restrictions. Experience invoicing, stock audits, and AI advice on your actual business data.'}
                </p>

                <ul className="text-xs text-[#0A2540] space-y-2 mb-6">
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>{lang === 'ar' ? 'جميع الميزات الـ 11 مفتوحة 100%' : 'All 11 modules completely unlocked'}</span>
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>{lang === 'ar' ? 'بدون تسجيل بطاقة بنكية أو أي التزامات' : 'No credit card or payment required'}</span>
                  </li>
                </ul>
              </div>

              <a
                href={links.trial7Days}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm font-bold shadow-md shadow-[#0066FF]/25 hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>
                  {lang === 'ar' 
                    ? `تحميل تجربة 7 أيام (${selectedOS === 'windows' ? 'ويندوز' : 'أندرويد'})` 
                    : `Download 7-Day Trial (${selectedOS === 'windows' ? 'Windows' : 'Android'})`}
                </span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

            {/* Option 2: Standard Full Edition */}
            <div className="relative bg-white rounded-2xl p-6 border border-[#CDE2F5] shadow-xs flex flex-col justify-between hover:border-[#0066FF]/40 transition-colors">
              <div>
                <span className="text-xs font-bold text-[#059669] block mb-1">
                  {lang === 'ar' ? 'النسخة الكاملة' : 'Production Build'}
                </span>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                  {lang === 'ar' ? 'الإصدار الدائم (Standard Edition)' : 'Standard Production Edition'}
                </h3>
                <p className="text-xs text-[#526E8C] leading-relaxed mb-4">
                  {lang === 'ar'
                    ? 'النسخة المعتمدة الدائمة للشركات والمؤسسات، تدعم تفعيل الترخيص الدائم مع قاعدة بيانات محلية غير محدودة ودعم فني مستمر.'
                    : 'The official permanent build for registered businesses, supporting perpetual activation with unlimited database volume.'}
                </p>

                <ul className="text-xs text-[#0A2540] space-y-2 mb-6">
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>{lang === 'ar' ? 'ترخيص دائم وسعة بيانات غير محدودة' : 'Perpetual license & unlimited local storage'}</span>
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>{lang === 'ar' ? 'دعم فني مباشر وتحديثات دورية' : 'Priority onboarding & updates'}</span>
                  </li>
                </ul>
              </div>

              <a
                href={links.standard}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-[#0A2540] hover:bg-[#0066FF] text-white text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#38BDF8]" />
                <span>
                  {lang === 'ar' 
                    ? `تحميل النسخة الدائمة (${selectedOS === 'windows' ? 'ويندوز' : 'أندرويد'})` 
                    : `Download Standard (${selectedOS === 'windows' ? 'Windows' : 'Android'})`}
                </span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

          </div>

          {/* Antigravity-Style "Minimum Requirements" Section */}
          <div className="pt-6 border-t border-[#CDE2F5] text-xs text-[#526E8C]">
            <h4 className="font-bold text-[#0A2540] mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#0066FF]" />
              <span>{lang === 'ar' ? 'متطلبات التشغيل (Minimum Requirements):' : 'Minimum System Requirements:'}</span>
            </h4>
            {selectedOS === 'windows' ? (
              <p className="font-mono text-[#526E8C]">
                Windows 10 (64-bit) / Windows 11 • 4 GB RAM • 500 MB Free Disk Space • Compatible with USB/LAN ESC/POS Thermal Printers
              </p>
            ) : (
              <p className="font-mono text-[#526E8C]">
                Android 8.0 (Oreo) or later • Phones & Tablets Supported • Compatible with Portable Bluetooth Receipt Printers
              </p>
            )}
          </div>

        </div>

        {/* Step-by-Step Installation Guide */}
        <div className="bg-[#EBF4FC] rounded-2xl p-6 border border-[#CDE2F5]">
          <h4 className="text-sm font-bold text-[#0A2540] mb-3">
            {lang === 'ar' ? '💡 خطوات التثبيت بعد التحميل من Google Drive:' : '💡 Quick Setup Steps:'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#526E8C]">
            <div className="bg-white p-3.5 rounded-xl border border-[#CDE2F5]">
              <span className="font-bold text-[#0066FF] block mb-1">1. التحميل</span>
              {lang === 'ar' ? 'اضغط على زر التحميل وسيفتح لك ملف التثبيت المباشر على Google Drive.' : 'Click download to access the direct Google Drive installer.'}
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-[#CDE2F5]">
              <span className="font-bold text-[#0066FF] block mb-1">2. التثبيت</span>
              {lang === 'ar' ? 'افتح ملف التثبيت واتبع التعليمات البسيطة؛ يستغرق التثبيت أقل من دقيقة.' : 'Launch installer and follow prompts; takes under 60 seconds.'}
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-[#CDE2F5]">
              <span className="font-bold text-[#0066FF] block mb-1">3. بدء العمل</span>
              {lang === 'ar' ? 'افتح البرنامج فوراً وابدأ في إدارة المبيعات والمخازن بدون أي تعقيد.' : 'Launch MADAR and start managing POS, inventory, and ledgers.'}
            </div>
          </div>
        </div>

      </main>

      {/* Compact Clean Footer */}
      <footer className="bg-white border-t border-[#CDE2F5] py-6 text-center text-xs text-[#526E8C]">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} {SITE_CONFIG.brand.fullNameAr}. جميع الحقوق محفوظة.</span>
          <div className="flex items-center gap-4 text-[#0A2540] font-medium">
            <a href={`tel:${SITE_CONFIG.contacts.phone}`} className="hover:text-[#0066FF] transition-colors">
              {SITE_CONFIG.contacts.phoneDisplay}
            </a>
            <span>•</span>
            <a href={`mailto:${SITE_CONFIG.contacts.email}`} className="hover:text-[#0066FF] transition-colors">
              {SITE_CONFIG.contacts.email}
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
