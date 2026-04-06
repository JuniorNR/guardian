import { I18nResources, SupportedLanguage } from '@/configs/i18n/i18n.types';

declare module 'i18next' {
  interface CustomTypeOptions {
    // Тип для всех ресурсов
    resources: I18nResources;
    
    // Тип для языков
    lng: SupportedLanguage;
  }
}