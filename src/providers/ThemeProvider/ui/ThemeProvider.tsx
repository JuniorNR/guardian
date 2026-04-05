import { darkTheme, lightTheme } from "@/shared/constants";
import type { Theme } from "@/shared/types";
import { createContext, type FC, useState } from "react";
import type { ThemeContextType } from "../model/themeProvider.types";

export const ThemeContext = createContext<ThemeContextType>({
	theme: darkTheme,
	changeTheme: () => {},
});

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useState<Theme>(darkTheme);

	const changeTheme: ThemeContextType["changeTheme"] = (name) => {
		switch (name) {
			case "light": {
				setTheme(lightTheme);
				break;
			}
			case "dark": {
				setTheme(darkTheme);
				break;
			}
			default:
				setTheme(darkTheme);
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
