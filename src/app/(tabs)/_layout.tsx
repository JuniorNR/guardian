import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useTheme } from "@/shared/hooks";

export default function TabLayout() {
	const { theme } = useTheme();
	return (
		<NativeTabs
			labelStyle={{ color: theme.primaryText }}
			backgroundColor={theme.primaryBackground}
			tintColor={theme.primaryText}
			iconColor={theme.primaryText}
			badgeBackgroundColor={theme.primaryBackground}
		>
			<NativeTabs.Trigger name="index">
				<NativeTabs.Trigger.Icon
					sf={{ default: "house", selected: "house.fill" }}
					md="home"
				/>
			</NativeTabs.Trigger>
			<NativeTabs.Trigger name="settings">
				<NativeTabs.Trigger.Icon
					sf={{ default: "house", selected: "house.fill" }}
					md="settings"
				/>
			</NativeTabs.Trigger>
		</NativeTabs>
	);
}
