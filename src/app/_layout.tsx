import { RootProvider } from "@/providers/RootProvider/ui/RootProvider";
import { useTheme } from "@/shared/hooks";
import { Theme } from "@/shared/types";
import { Stack } from "expo-router";

export const RootLayoutStyled = () => {
  const { theme } = useTheme()
  const style = createStyle(theme)

  return (
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: style
    }} />
  );
}

export default function RootLayout() {
  return (
    <RootProvider>
      <RootLayoutStyled />
    </RootProvider>
  )
}

const createStyle = (theme: Theme) => {
  return {
    color: theme.primaryText,
    backgroundColor: theme.primaryBackground
  }
}
