import * as React from "react";

import DefaultTheme from "theme/defaultTheme";

export const ThemeContext = React.createContext(DefaultTheme);

export function useTheme() {
  const theme = React.useContext(ThemeContext);
  return theme;
}
