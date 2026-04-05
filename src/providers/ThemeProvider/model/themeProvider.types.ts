import type { Theme } from "@/shared/types";

export interface ThemeContextType {
	theme: Theme;
	changeTheme: (name: Theme["name"]) => void;
}
