import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { createContext, type FC, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "@/shared/constants";
import type { Theme } from "@/shared/types";
import type { ThemeContextType } from "../model/themeProvider.types";

export const ThemeContext = createContext<ThemeContextType>({
	theme: darkTheme,
	changeTheme: () => {},
});

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
  const { getItem, setItem } = useAsyncStorage("theme");
  const [theme, setTheme] = useState<Theme>(darkTheme);
  const [isLoading, setIsLoading] = useState(true);

		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	  useEffect(() => {
			const loadTheme = async () => {
				try {
					const savedTheme = await getItem();
					
					if (savedTheme === 'light') {
						setTheme(lightTheme);
					} else if (savedTheme === 'dark') {
						setTheme(darkTheme);
					} else {
						setTheme(darkTheme);
					}
				} catch (error) {
					console.error('Failed to load theme:', error);
				} finally {
					setIsLoading(false);
				}
			};
	
			loadTheme();
		}, []);

		const changeTheme: ThemeContextType["changeTheme"] = async (name) => {
			try {
				await setItem(name);
				switch (name) {
					case "light":
						setTheme(lightTheme);
						break;
					case "dark":
						setTheme(darkTheme);
						break;
					default:
						setTheme(darkTheme);
				}
			} catch (error) {
				console.error('Failed to save theme:', error);
			}
		};
	
		if (isLoading) {
			return null;
		}

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
