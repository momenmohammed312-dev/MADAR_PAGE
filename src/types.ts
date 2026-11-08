export type Language = 'ar' | 'en';
export type ThemeMode = 'light' | 'dark';

export interface ModuleData {
  id: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  badgeAr: string;
  badgeEn: string;
  iconName: string;
  imageLight: string;
  imageDark?: string;
  statsAr: { label: string; value: string }[];
  statsEn: { label: string; value: string }[];
  featuresAr: string[];
  featuresEn: string[];
}

export interface StoryStep {
  stepNumber: number;
  badgeAr: string;
  badgeEn: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  detailsAr: string[];
  detailsEn: string[];
  actionLabelAr: string;
  actionLabelEn: string;
}
