import React, { useState } from 'react';
import { 
  Users, Factory, UserCheck, Wallet, BarChart3, 
  ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, Layers, ExternalLink
} from 'lucide-react';
import { ModuleData, Language } from '../types';
import { ModuleDetailModal } from './ModuleDetailModal';

interface ModulesShowcaseProps {
  lang: Language;
}

export const ModulesShowcase: React.FC<ModulesShowcaseProps> = ({ lang }) => {
  const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);

  const modules: ModuleData[] = [
    {
      id: 'customers',
      titleAr: 'إدارة العملاء، الديون وكشوفات الحساب',
      titleEn: 'Customers, Credit & Unified Ledgers',
      subtitleAr: 'متابعة تفصيلية لمديونيات 233 عميل وسقوف الائتمان',
      subtitleEn: 'Track 233+ customer debts, payment limits & statements',
      descriptionAr: 'كشف حساب موحد لكل عميل يربط فواتير البيع بالدفعات النقدية والآجلة. تحديد سقوف الائتمان، إصدار إشعارات الخصم والإضافة، وإرسال كشف الحساب بنقرة زر.',
      descriptionEn: 'Unified statement for each client syncing sales invoices with cash & credit installments. Set credit limits, credit notes, and one-click PDF statements.',
      badgeAr: 'العملاء والمديونيات',
      badgeEn: 'Customers & Receivables',
      iconName: 'Users',
      imageLight: '/assets/vid_customers_light.jpg',
      imageDark: '/assets/vid_customers_dark.jpg',
      statsAr: [
        { label: 'إجمالي العملاء', value: '233 عميل' },
        { label: 'الديون المستحقة', value: '5,347,422 ج.م' },
        { label: 'عملاء عليهم حساب', value: '65 عميل نشط' },
      ],
      statsEn: [
        { label: 'Total Clients', value: '233 Accounts' },
        { label: 'Receivables', value: '5,347,422 EGP' },
        { label: 'Active Balances', value: '65 Clients' },
      ],
      featuresAr: [
        'كشف حساب تفصيلي ومختصر بمديونيات كل عميل',
        'تحديد حد ائتماني أقصى لكل عميل لمنع تجاوز السقف',
        'تسجيل تحصيلات نقدية وجزئية وربطها بالفواتير تلقائياً',
        'بحث فوري بالاسم، الكود، أو رقم الهاتف مع فلترة النشطين',
      ],
      featuresEn: [
        'Detailed and summarized statement for each client ledger',
        'Configurable maximum credit ceiling to prevent over-extension',
        'Partial and full cash collection logged against specific invoices',
        'Instant multi-field search by code, name, or phone number',
      ],
    },
    {
      id: 'manufacturing',
      titleAr: 'أوامر التصنيع وخامات العملاء (BOM)',
      titleEn: 'Manufacturing Orders & Recipe Management',
      subtitleAr: 'إدارة خطوط الإنتاج، وصفات التصنيع، وتشغيل للغير',
      subtitleEn: 'Line tracking, BOM recipes & third-party tolling (CMR)',
      descriptionAr: 'منظومة صناعية متكاملة لإدارة وصفات المنتجات وتكاليف الخامات، ومتابعة نسب إنجاز الأوامر (100% مرحلة الخياطة، التجهيز، والتطريز)، مع دعم استلام خامات العملاء (CMR).',
      descriptionEn: 'Full industrial workflow: bill of materials (BOM), stage progress tracking (cutting, sewing, embroidery), and third-party customer material receiving (CMR).',
      badgeAr: 'التصنيع والإنتاج',
      badgeEn: 'Manufacturing & BOM',
      iconName: 'Factory',
      imageLight: '/assets/vid_manufacturing_light.jpg',
      imageDark: '/assets/vid_manufacturing_dark.jpg',
      statsAr: [
        { label: 'أوامر مكتملة', value: '10 أوامر' },
        { label: 'تشغيل للغير', value: '5 أذونات خامات' },
        { label: 'حساب الهالك', value: 'آلي بنسبة 100%' },
      ],
      statsEn: [
        { label: 'Completed Orders', value: '10 Orders' },
        { label: 'Customer Tolling', value: '5 CMR Receipts' },
        { label: 'Scrap & Waste', value: '100% Automated' },
      ],
      featuresAr: [
        'إنشاء وصفات المنتجات (BOM) وحساب تكلفة الخامات بدقة',
        'تتبع مراحل الإنتاج خطوة بخطوة مع نسب الإنجاز',
        'أذونات استلام خامات العملاء لتشغيل الغير (CMR)',
        'تصدير تقارير التصنيع وتكاليف التشغيل إلى PDF احترافي',
      ],
      featuresEn: [
        'Bill of Materials (BOM) creation with automated raw cost calculation',
        'Stage-by-stage line tracking with visual completion bars',
        'Customer Material Receiving (CMR) for toll manufacturing',
        'Professional PDF export for manufacturing costs & yield',
      ],
    },
    {
      id: 'hr',
      titleAr: 'شؤون الموظفين، أجهزة البصمة والمرتبات',
      titleEn: 'HR, Biometrics Integration & Payroll',
      subtitleAr: 'حضور يومي ذكي، ربط أجهزة البصمة، والسلف المعلقة',
      subtitleEn: 'Biometric time clocks, loan deductions & payroll processing',
      descriptionAr: 'إدارة الموارد البشرية المتكاملة مع الربط التلقائي بأجهزة البصمة. تسجيل الحضور والانصراف، حساب التأخيرات والغياب، صرف السلف، واحتساب صافي المرتبات والبدلات بنقرة زر.',
      descriptionEn: 'Integrated HR with seamless biometric clock connectivity. Track daily clock-ins, lateness, leaves, staff advances, and compute net salary sheets instantly.',
      badgeAr: 'الموظفين والمرتبات',
      badgeEn: 'HR & Biometrics',
      iconName: 'UserCheck',
      imageLight: '/assets/vid_hr_staff_light.jpg',
      imageDark: '/assets/vid_hr_staff_light.jpg',
      statsAr: [
        { label: 'مسير المرتبات', value: '23,213 ج.م' },
        { label: 'سلف معلقة', value: '363 ج.م' },
        { label: 'أجهزة البصمة', value: 'ربط مباشر LAN' },
      ],
      statsEn: [
        { label: 'Total Payroll', value: '23,213 EGP' },
        { label: 'Open Advances', value: '363 EGP' },
        { label: 'Biometric Clocks', value: 'Direct LAN Sync' },
      ],
      featuresAr: [
        'ربط مباشر مع أجهزة البصمة الحيوية وسحب السجلات آلياً',
        'حساب دقيق لخصومات التأخير وساعات العمل الإضافية',
        'إدارة طلبات الإجازات والأذونات الرسمية',
        'كشف مسير الرواتب المعتمد مع خصم السلف والعهد آلياً',
      ],
      featuresEn: [
        'Direct LAN sync with biometric fingerprint & face devices',
        'Automated penalty deductions and overtime bonuses',
        'Leave and permission tracking with approval history',
        'Approved payroll sheets automatically deducting salary advances',
      ],
    },
    {
      id: 'custody',
      titleAr: 'حوكمة العهد المالية والمصروفات',
      titleEn: 'Financial Custodies & Cash Advances',
      subtitleAr: 'إدارة دقيقة للعهد النقدية المصروفة للموظفين والمناديب',
      subtitleEn: 'Strict accounting for staff advances & expense liquidation',
      descriptionAr: 'نظام رقابي صارم لإدارة العهد النقدية للمناديب ومشرفي المشتريات. تتبع إجمالي المبالغ المصروفة، تسجيل فواتير المصاريف التي يقدمها الموظف، واسترداد المتبقي بالخزينة.',
      descriptionEn: 'Rigorous financial governance for cash advances given to representatives. Track disbursed amounts, liquidate validated expense receipts, and refund leftovers.',
      badgeAr: 'العهد المالية',
      badgeEn: 'Cash Custodies',
      iconName: 'Wallet',
      imageLight: '/assets/vid_custody_light.jpg',
      imageDark: '/assets/vid_custody_light.jpg',
      statsAr: [
        { label: 'إجمالي المصروف كعهدة', value: '10,000 ج.م' },
        { label: 'المتبقي بالخارج', value: '9,000 ج.م' },
        { label: 'حالات العهد', value: 'مفتوحة / مسواة / ملغاة' },
      ],
      statsEn: [
        { label: 'Disbursed Advance', value: '10,000 EGP' },
        { label: 'Pending Liquidation', value: '9,000 EGP' },
        { label: 'Advance Status', value: 'Open / Cleared / Cancelled' },
      ],
      featuresAr: [
        'إصدار إذن صرف عهدة نقدية للموظف مع تحديد الهدف',
        'تسجيل بنود المصاريف المرفقة بفواتير معتمدة',
        'تسوية العهدة بنقرة واحدة وإرجاع الفائض للدرج',
        'تنبيهات استباقية بالعهد المعلقة لفترات زمنية طويلة',
      ],
      featuresEn: [
        'Issue documented custody vouchers with declared purposes',
        'Attach operational expense receipts against open custodies',
        'One-click balance settlement returning unspent cash to drawer',
        'Proactive AI alerts on aging unliquidated custodies',
      ],
    },
    {
      id: 'reports',
      titleAr: 'مركز التقارير المتخصصة والتدفقات المالية',
      titleEn: 'Specialized Reports & Financial Insights',
      subtitleAr: '9 تقارير محاسبية تفصيلية مع رسوم بيانية وتصدير فوري',
      subtitleEn: '9 in-depth financial reports with charts & instant CSV export',
      descriptionAr: 'لوحة قيادة تفاعلية تضم تقرير المبيعات اليومية، فواتير المشتريات، كشف المصروفات، المشتريات حسب المنتج والمورد، والأرصدة الموحدة، مع منحنيات الأرباح والتدفقات النقدية.',
      descriptionEn: 'Interactive analytics hub featuring daily sales, vendor purchases, operational expenses, item velocity, unified balances, and cash-flow curves.',
      badgeAr: 'مركز التقارير',
      badgeEn: 'Specialized Reports',
      iconName: 'BarChart3',
      imageLight: '/assets/vid_reports_hub_light.jpg',
      imageDark: '/assets/vid_reports_hub_light.jpg',
      statsAr: [
        { label: 'إجمالي المبيعات', value: '248,442 ج.م' },
        { label: 'صافي هامش الربح', value: '246,992 ج.م' },
        { label: 'التقارير المتخصصة', value: '9 مراكز تحليل' },
      ],
      statsEn: [
        { label: 'Total Sales', value: '248,442 EGP' },
        { label: 'Estimated Margin', value: '246,992 EGP' },
        { label: 'Specialized Hubs', value: '9 Deep Reports' },
      ],
      featuresAr: [
        'منحنى التدفقات المالية (المبيعات VS المشتريات VS صافي الأرباح)',
        'رسم بياني دائري لتوزيع المبيعات حسب فئات وأصناف البضائع',
        'تقرير التدفق النقدي والآجل ومعدل التحصيل الفعلي',
        'تصدير فوري لكافة التقارير إلى جداول Excel / CSV و PDF',
      ],
      featuresEn: [
        'Visual cash-flow curves (Sales vs Purchases vs Net Margins)',
        'Product category sales distribution pie charts',
        'Cash vs deferred collection ratios with velocity metrics',
        'Instant export of any statement to Excel/CSV and PDF formats',
      ],
    },
  ];

  return (
    <section id="modules" className="py-20 md:py-28 bg-[#F2F7FC] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#0066FF] text-xs font-bold mb-4 border border-[#CDE2F5] shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'منظومة واحدة شاملة' : 'Integrated ERP Architecture'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight mb-4">
            {lang === 'ar'
              ? 'وحدات مترابطة تغطي كافة مسارات عملك دون ثغرات'
              : 'Interconnected Modules Powering Every Corner of Your Enterprise'}
          </h2>
          <p className="text-base sm:text-lg text-[#526E8C]">
            {lang === 'ar'
              ? 'لا تحتاج لشراء 5 برامج منفصلة. كل مديول في مِدار يتكامل تلقائياً مع الحسابات، المخازن، والدرج في نفس اللحظة.'
              : 'No need for fragmented software. In MADAR, every transaction updates the warehouse, ledger, and cash drawer simultaneously.'}
          </p>
        </div>

        {/* Antigravity Alternating Blocks */}
        <div className="space-y-16 mb-20">
          {modules.map((m, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={m.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-[#CDE2F5] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Text & Stats Column (5 cols) */}
                  <div className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E0F2FE] text-[#0066FF] border border-[#BAE6FD]">
                      {lang === 'ar' ? m.badgeAr : m.badgeEn}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] leading-snug">
                      {lang === 'ar' ? m.titleAr : m.titleEn}
                    </h3>

                    <p className="text-sm text-[#526E8C] leading-relaxed">
                      {lang === 'ar' ? m.descriptionAr : m.descriptionEn}
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-2.5 py-2">
                      {(lang === 'ar' ? m.statsAr : m.statsEn).map((stat, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-[#F2F7FC] border border-[#CDE2F5]/80">
                          <div className="text-[10px] text-[#526E8C] truncate">{stat.label}</div>
                          <div className="text-xs sm:text-sm font-bold text-[#0A2540] mt-0.5 truncate">{stat.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <button
                      onClick={() => setSelectedModule(m)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-bold shadow-md shadow-[#0066FF]/20 hover:shadow-lg transition-all"
                    >
                      <span>{lang === 'ar' ? 'اعرف المزيد عن هذه الوحدة' : 'Learn More Details'}</span>
                      {lang === 'ar' ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Screenshot Visual Column (7 cols) */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div 
                      onClick={() => setSelectedModule(m)}
                      className="cursor-pointer relative rounded-2xl overflow-hidden border border-[#CDE2F5] shadow-md hover:shadow-xl transition-all duration-300 group bg-[#0A2540]"
                    >
                      <img
                        src={m.imageLight}
                        alt={lang === 'ar' ? m.titleAr : m.titleEn}
                        className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/30">
                          <ExternalLink className="w-3.5 h-3.5" />
                          {lang === 'ar' ? 'انقر لتكبير الشاشة واستعراض كامل التفاصيل' : 'Click to inspect full screenshot & details'}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal for "Learn More" */}
      <ModuleDetailModal
        module={selectedModule}
        lang={lang}
        onClose={() => setSelectedModule(null)}
      />

    </section>
  );
};
