import { StyleSheet, type TextStyle, type ViewStyle } from "react-native";
import type { Theme } from "@/shared/types";
import type { ButtonProps } from "../model/button.types";

export const createStyle = (
	theme: Theme,
	size: ButtonProps["size"] = "md",
	radius: ButtonProps["radius"] = "md",
) => {
	const buttonSize = (): ViewStyle => {
		const sizesStyle: Record<string, ViewStyle> = {
			sm: {
				width: theme.buttonSize.sm,
				height: theme.buttonSize.sm,
			},
			md: {
				width: theme.buttonSize.md,
				height: theme.buttonSize.md,
			},
			lg: {
				width: theme.buttonSize.lg,
				height: theme.buttonSize.lg,
			},
		};

		return sizesStyle[size];
	};

	const textSize = (): TextStyle => {
		const sizesStyle: Record<string, TextStyle> = {
			sm: {
				fontSize: theme.textSize.sm,
			},
			md: {
				fontSize: theme.textSize.md,
			},
			lg: {
				fontSize: theme.textSize.lg,
			},
		};

		return sizesStyle[size];
	};

	const buttonRadius = (): ViewStyle => {
		const radiusStyle = {
			sm: {
				borderRadius: theme.radius.sm,
			},
			md: {
				borderRadius: theme.radius.md,
			},
			lg: {
				borderRadius: theme.radius.lg,
			},
			circle: {
				borderRadius: theme.radius.circle,
			},
		};
		return radiusStyle[radius];
	};

	return StyleSheet.create({
		button: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			borderWidth: 3,
			backgroundColor: theme.primaryBackground,
			borderColor: theme.primaryText,
			...buttonRadius(),
			...buttonSize(),
		},
		buttonText: {
			textAlign: "center",
			color: theme.primaryText,
			width: 50,
			...textSize(),
		},
	});
};
