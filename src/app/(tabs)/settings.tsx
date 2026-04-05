import { ThemeSwitcher } from "@/features";
import { StyledText, StyledView } from "@/shared/ui";
import { SafeAreaView } from "react-native-safe-area-context";

export default function settingsScreen() {
	return (
		<StyledView>
			<SafeAreaView>
				<StyledText>Edit src/app/index.tsx to edit this scree1.</StyledText>
				<ThemeSwitcher />
			</SafeAreaView>
		</StyledView>
	);
}
