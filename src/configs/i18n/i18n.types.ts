import type commonEn from "@/assets/locales/en/common.json";
import type settingsEn from "@/assets/locales/en/settings.json";
import type { SUPPORTED_LANGUAGES } from "@/shared/utils";

export interface I18nResources {
	settings: typeof settingsEn;
	common: typeof commonEn;
}

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
