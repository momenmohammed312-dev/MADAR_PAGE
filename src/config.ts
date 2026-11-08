// Configuration file for MADAR ERP Landing Page
// All external links, contact details, and feature flags are centralized here for easy updates.

export const SITE_CONFIG = {
  brand: {
    nameAr: 'مِدار',
    nameEn: 'MADAR',
    fullNameAr: 'مِدار | MADAR ERP',
    taglineAr: 'إدارة. تشغيل. نمو.',
    taglineEn: 'Manage. Operate. Grow.',
    taglineShortAr: 'إدارة · تشغيل · نمو',
    taglineShortEn: 'Manage · Operate · Grow',
    subtaglineAr: 'المنظومة المحاسبية والتشغيلية المتكاملة المدعومة بالتحليل الذكي لإدارة المبيعات، المخازن، الحسابات، شؤون الموظفين والتصنيع.',
    subtaglineEn: 'The comprehensive accounting and operational ERP powered by smart predictive intelligence for sales, inventory, finance, HR, and manufacturing.',
    version: 'v2.3.0',
  },

  // Google Drive Download Links for Windows & Android
  downloads: {
    trialDurationDays: 7,
    windows: {
      trial7Days: 'https://drive.google.com/file/d/1J_TvtbRdMc-7w3J6KOh1npihcwplmKGQ/view?usp=drive_link',
      standard: 'https://drive.google.com/file/d/1-rTEnwMeu7sRZ-uImMUIq_crZfh_e-TX/view?usp=drive_link',
    },
    android: {
      trial7Days: 'https://drive.google.com/file/d/1I6nJJDa_0J7z_bPP3I5mhZBXO6sApjpG/view?usp=drive_link',
      standard: 'https://drive.google.com/file/d/1MKuxGTOvzMWjHWx5OC5V9KPt6biYZaSy/view?usp=drive_link',
    },
  },

  // Official Contact Information
  contacts: {
    phone: '+201025545211',
    phoneDisplay: '+20 102 554 5211',
    email: 'momenmohammed253@gmail.com',
  },

  // Feature Flags
  features: {
    showPricing: false,
    allowLanguageSwitch: true,
    enableSmoothScroll: true,
  },
};
