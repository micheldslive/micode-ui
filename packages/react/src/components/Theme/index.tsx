import { darkTheme } from "../../styles";
import { type PropsWithChildren } from "react";
import { ThemeWrapper } from "./styles";

interface ThemeProviderProps extends PropsWithChildren {
  theme: boolean;
}

export const Theme = ({ children, theme }: ThemeProviderProps) => {
  return (
    <ThemeWrapper className={theme ? darkTheme : ""}>{children}</ThemeWrapper>
  );
};

Theme.displayName = "Theme";
