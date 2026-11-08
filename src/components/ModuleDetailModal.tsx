import React from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { ModuleData, Language } from '../types';

interface ModuleDetailModalProps {
  module: ModuleData | null;
  lang: Language;
  onClose: () => void;
}

export const ModuleDetailModal: React.FC<ModuleDetailModalProps> = ({ module, lang, onClose }) => {
  if (!module) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A2540]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl border border-[#CDE2F5] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-[#F2F7FC] border-b border-[#CDE2F5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0066FF] text-white flex items-center justify-center font-bold shadow-md shadow-[#0066FF]/20">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#0066FF] bg-white px-2 py-0.5 rounded-full border border-[#CDE2F5]">
                {lang === 'ar' ? module.badgeAr : module.badgeEn}
              </span>
              <h3 className="text-xl font-bold text-[#0A2540] mt-1">
                {lang === 'ar' ? module.titleAr : module.titleEn}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#526E8C] hover:text-[#0A2540] hover:bg-white border border-transparent hover:border-[#CDE2F5] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Screenshot Preview */}
          <div className="rounded-2xl overflow-hidden border border-[#CDE2F5] shadow-sm bg-[#0B192C]">
            <img
              src={module.imageLight}
              alt={lang === 'ar' ? module.titleAr : module.titleEn}
              className="w-full h-auto object-cover max-h-[320px]"
            />
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="text-sm font-bold text-[#0A2540] mb-2">
              {lang === 'ar' ? 'الوصف الشامل والدور التشغيلي:' : 'Detailed Operational Overview:'}
            </h4>
            <p className="text-sm text-[#526E8C] leading-relaxed">
              {lang === 'ar' ? module.descriptionAr : module.descriptionEn}
            </p>
          </div>

          {/* Key Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {(lang === 'ar' ? module.statsAr : module.statsEn).map((stat, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-[#F2F7FC] border border-[#CDE2F5]">
                <div className="text-[11px] text-[#526E8C]">{stat.label}</div>
                <div className="text-sm font-bold text-[#0066FF] mt-0.5">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Implemented Features List */}
          <div>
            <h4 className="text-sm font-bold text-[#0A2540] mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#0066FF]" />
              <span>{lang === 'ar' ? 'المميزات الدقيقة المتاحة فعلياً داخل هذا المديول:' : 'Key Features Available In This Module:'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(lang === 'ar' ? module.featuresAr : module.featuresEn).map((feat, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-[#F2F7FC]/70 border border-[#CDE2F5]/80 text-xs text-[#0A2540]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F2F7FC] border-t border-[#CDE2F5] flex items-center justify-between">
          <span className="text-xs text-[#526E8C] flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
            {lang === 'ar' ? 'ميزة معتمدة ومفعلة في إصدار مِدار 2026' : 'Verified in MADAR 2026 Core'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#0066FF] text-white text-xs font-bold hover:bg-[#0052CC] transition-colors"
          >
            {lang === 'ar' ? 'إغلاق المعاينة' : 'Close Preview'}
          </button>
        </div>

      </div>
    </div>
  );
};
