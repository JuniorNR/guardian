import type { PressableProps } from "react-native";

export interface ButtonProps extends PressableProps {
	children: React.ReactNode;
	title?: string;
	size?: "sm" | "md" | "lg";
	radius?: "sm" | "md" | "lg" | "circle";
}
