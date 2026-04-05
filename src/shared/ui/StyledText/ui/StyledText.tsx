import type { FC } from "react";
import { StyleSheet, Text, type TextProps } from "react-native";
import { useTheme } from "@/shared/hooks";
import type { Theme } from "@/shared/types";

export const StyledText: FC<TextProps> = ({ children }) => {
	const { theme } = useTheme();
	const style = styleCreate(theme);
	return <Text style={style.styledText}>{children}</Text>;
};

const styleCreate = (theme: Theme) =>
	StyleSheet.create({
		styledText: {
			color: theme.primaryText,
		},
	});
