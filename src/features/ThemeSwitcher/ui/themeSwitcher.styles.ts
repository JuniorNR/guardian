import { StyleSheet } from "react-native";
import type { Theme } from "@/shared/types";

export const createStyle = (theme: Theme) => {
	return StyleSheet.create({
		svgIcon: {
			width: theme.buttonSize.sm,
			height: theme.buttonSize.sm,
		},
	});
};
