import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyledView } from "@/shared/ui";


export default function mainScreen() {
	return (
		<StyledView>
			<SafeAreaView>
				<Text>Edit src/app/index.tsx to edit this scree1.</Text>
			</SafeAreaView>
		</StyledView>
	);
}
