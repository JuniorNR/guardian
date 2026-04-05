import type { FC } from "react";
import { StyleSheet, View, type ViewProps } from "react-native";
import { useTheme } from "@/shared/hooks";
import type { Theme } from "@/shared/types";

export const StyledView: FC<ViewProps> = ({ children }) => {
	const { theme } = useTheme();
	const style = styleCreate(theme);
	return <View style={style.styledView}>{children}</View>;
};

const styleCreate = (theme: Theme) =>
	StyleSheet.create({
		styledView: {
			backgroundColor: theme.primaryBackground,
			height: "100%",
		},
	});
