import { useTheme } from "@/shared/hooks";
import { FC, useRef } from "react";
import { Animated, Easing, Pressable, Text } from "react-native";
import { ButtonProps } from "../model/button.types";
import { createStyle } from "./button.,styles";

export const Button:FC<ButtonProps> = ({ title, size, radius, onPress, children }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const { theme } = useTheme()
  const style = createStyle(theme, size, radius)
  
  const handlePressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.75,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }

  const handlePressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }

  const renderContent = () => {
    return (
      <Text style={style.buttonText}>{children}{title}</Text>
    )
  }

  return (
    <Pressable
    style={style.button}
    onPressIn={handlePressIn}
    onPressOut={handlePressOut}
    onPress={onPress}
  >
    <Animated.View
      style={{
        transform: [{ scale: scaleAnim }],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {renderContent()}
    </Animated.View>
  </Pressable>
  )
}