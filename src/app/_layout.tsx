import { RootProvider } from "@/providers/RootProvider/ui/RootProvider";
import { useTheme } from "@/shared/hooks";
import type { Theme } from "@/shared/types";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import '@/configs/i18n/i18n.config';

export default function RootLayout() {
	return (
		<RootProvider>
			<RootLayoutStyled />
		</RootProvider>
	);
}

const RootLayoutStyled = () => {
	const { theme } = useTheme();
	const style = createStyle(theme);

	return (
		<Stack
			screenOptions={{
				headerShown: false,
				contentStyle: style.rootLayout,
			}}
		/>
	);
};

const createStyle = (theme: Theme) =>
	StyleSheet.create({
		rootLayout: {
			color: theme.primaryText,
			backgroundColor: theme.primaryBackground,
		},
	});
