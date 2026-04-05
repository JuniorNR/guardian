import type { FC } from "react";
import { ThemeProvider } from "../../ThemeProvider/ui/ThemeProvider";

export const RootProvider: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};
