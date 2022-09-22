import { ThemeType } from "../types";

import { colors } from "./colors";

export const DefaultTheme: ThemeType = {
  primary: colors.primary[100],
  primaryLight: colors.primary[80],
  secondary: colors.secondary[100],

  iconBackground: colors.primary[40],
  iconBackgroundSelected: colors.primary[80],
  secondaryIconBackground: colors.secondary[20],

  text: colors.neutral.black,
  buttonLabel: colors.neutral.white,
  background: colors.neutral.white,
  label: colors.neutral.gray3,
  rating: colors.rating,

  colors: { ...colors },
};

export default DefaultTheme;
