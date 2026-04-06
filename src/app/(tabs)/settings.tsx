import { SafeAreaView } from "react-native-safe-area-context";
import { LanguageSwitcher, ThemeSwitcher } from "@/features";
import { StyledText, StyledView } from "@/shared/ui";

export default function settingsScreen() {
	return (
		<StyledView>
			<SafeAreaView>
				<StyledText>Edit src/app/index.tsx to edit this scree1.</StyledText>
				<ThemeSwitcher />
				<LanguageSwitcher />
			</SafeAreaView>
		</StyledView>
	);
}
