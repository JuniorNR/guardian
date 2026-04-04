import { ThemeSwitcher } from "@/features";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function mainScreen() {
  return (
    <View>
      <SafeAreaView>
        <Text>Edit src/app/index.tsx to edit this scree1.</Text>
        <ThemeSwitcher />
      </SafeAreaView>
    </View>
  );
}