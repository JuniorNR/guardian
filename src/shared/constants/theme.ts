import type { Theme } from "../types";

const mainTheme = {
	success: "rgba(48, 209, 88, 1)",
	warning: "rgba(255, 159, 10, 1)",
	danger: "rgba(255, 69, 58, 1)",
	info: "rgba(10, 132, 255, 1)",
	buttonSize: {
		sm: 50,
		md: 75,
		lg: 100,
	},
	textSize: {
		sm: 12,
		md: 14,
		lg: 16,
	},
	radius: {
		sm: 10,
		md: 15,
		lg: 25,
		circle: 50,
	},
};

export const darkTheme: Theme = {
	name: "dark",
	primaryText: "rgba(92, 200, 239, 1)",
	primaryBackground: "rgba(0, 0, 0, 1)",
	primaryTextReverse: "rgba(0, 0, 0, 1)",
	primaryBackgroundReverse: "rgba(92, 200, 239, 1)",
	...mainTheme,
};

export const lightTheme: Theme = {
	name: "light",
	primaryText: "rgba(20, 54, 202, 1)",
	primaryBackground: "rgba(220, 234, 243, 1)",
	primaryTextReverse: "rgba(220, 234, 243, 1)",
	primaryBackgroundReverse: "rgba(20, 54, 202, 1)",
	...mainTheme,
};
