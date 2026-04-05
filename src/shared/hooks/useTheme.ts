import { useContext } from "react";
import { ThemeContext } from "@/providers";

export const useTheme = () => {
	const { theme, changeTheme } = useContext(ThemeContext);

	return { theme, changeTheme };
};
