export interface Theme {
	name: "dark" | "light";
	primaryText: string;
	primaryBackground: string;
	primaryTextReverse: string;
	primaryBackgroundReverse: string;
	success: string;
	warning: string;
	danger: string;
	info: string;
	buttonSize: {
		sm: number;
		md: number;
		lg: number;
	};
	textSize: {
		sm: number;
		md: number;
		lg: number;
	};
	radius: {
		sm: number;
		md: number;
		lg: number;
		circle: number;
	};
}
