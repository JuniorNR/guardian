import { Theme } from "@/shared/types";
import { StyleSheet } from "react-native";

export const createStyle = (theme: Theme) => {
  return StyleSheet.create({
    svgIcon: {
      width: theme.buttonSize.sm,
      height: theme.buttonSize.sm
    },
  })
}