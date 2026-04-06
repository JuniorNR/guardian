import { Button, StyledText, StyledView } from "@/shared/ui";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LanguageSwitcher: FC = () => {
  const { t, i18n } = useTranslation('common')
  const language = i18n.language === 'ru' ? t(`LanguageSwitcher.ru`) : t(`LanguageSwitcher.en`);
  
  const handleChange = async () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('ru')
      await AsyncStorage.setItem('language', 'ru')
      return
    }
    if (i18n.language === 'ru') {
      i18n.changeLanguage('en')
      await AsyncStorage.setItem('language', 'en')
    }
  }

  return (
    <Button onPress={handleChange}>
      <StyledText style={{ fontSize: 24 }}>
        {language.toLocaleUpperCase()}
      </StyledText>
    </Button>
  )
}