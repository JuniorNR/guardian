import { Theme } from "@/shared/types"
import { StyleSheet } from "react-native";

export const createStyle = (theme: Theme) => {
  return StyleSheet.create({
    switchButton: {
      backgroundColor: theme.primaryBackground
    },
    switchButtonText: {
      color: theme.primaryText
    }
  })
}