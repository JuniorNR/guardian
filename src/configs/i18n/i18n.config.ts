import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import commonEn from "@/assets/locales/en/common.json";
import settingsEn from "@/assets/locales/en/settings.json";
import commonRu from "@/assets/locales/ru/common.json";
import settingsRu from "@/assets/locales/ru/settings.json";
import { NAMESPACES } from "@/shared/constants";
import type { SupportedLanguage } from "./i18n.types";

const resources = {
	en: { settings: settingsEn, common: commonEn },
	ru: { settings: settingsRu, common: commonRu },
} as const;

const initI18n = async () => {
	let savedLanguage = (await AsyncStorage.getItem(
		"language",
	)) as SupportedLanguage;

	if (!savedLanguage || !["en", "ru"].includes(savedLanguage)) {
		savedLanguage = Localization.getLocales()[0].languageCode;
	}

	i18n
		.use(initReactI18next)
		.init({
			compatibilityJSON: "v4",
			resources,
			lng: savedLanguage,
			fallbackLng: "ru",
			defaultNS: NAMESPACES.common,
			ns: Object.values(NAMESPACES),
			partialBundledLanguages: true,
			interpolation: {
				escapeValue: false,
			},
		});
};

initI18n();

export default i18n;
