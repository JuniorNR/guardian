import type { FC } from "react";
import { ThemeDarkIcon } from "@/assets/icons/ThemeDarkIcon";
import { ThemeLightIcon } from "@/assets/icons/ThemeLightIcon";
import { useTheme } from "@/shared/hooks";
import { Button } from "@/shared/ui";
import { createStyle } from "./themeSwitcher.styles";

export const ThemeSwitcher: FC = () => {
	const { theme, changeTheme } = useTheme();
	const style = createStyle(theme);

	const handleChangeTheme = () => {
		if (theme.name === "light") {
			changeTheme("dark");
			return;
		}
		changeTheme("light");
	};

	return (
		<Button onPress={handleChangeTheme} title="test" radius="sm">
			{theme.name === "light" ? (
				<ThemeLightIcon
					width={style.svgIcon.width}
					height={style.svgIcon.height}
					color={theme.primaryText}
				/>
			) : (
				<ThemeDarkIcon
					width={style.svgIcon.width}
					height={style.svgIcon.height}
					color={theme.primaryText}
				/>
			)}
		</Button>
	);
};
