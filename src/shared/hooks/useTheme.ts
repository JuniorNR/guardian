import { ThemeContext } from "@/providers";
import { useContext } from "react";

export const useTheme = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

  return { theme, changeTheme }
}