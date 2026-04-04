import { Theme } from "@/shared/constants"

export interface ThemeContextType {
  theme: Theme
  changeTheme: (name: Theme['name']) => void
}