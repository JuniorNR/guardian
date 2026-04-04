
import { useTheme } from "@/shared/hooks";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { createStyle } from "./themeSwitcher.styles";

export const ThemeSwitcher: FC = () => {
  const { theme, changeTheme } = useTheme()
  const style = createStyle(theme)

  const handleChangeTheme = () => {
    if (theme.name === 'light') {
      changeTheme('dark')
      return
    }
    changeTheme('light')
  }

  return (
    <View>
      <Pressable
        style={style.switchButton}
        onPress={handleChangeTheme}
      >
        <Text style={style.switchButtonText}>{theme.name}867786</Text>
      </Pressable>
    </View>
  )
}