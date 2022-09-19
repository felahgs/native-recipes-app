import { ThemeType } from "../types";

import { colors } from "./colors";

export const DefaultTheme: ThemeType = {
  primary: colors.primary[100],
  primaryLight: colors.primary[80],
  secondary: colors.secondary[100],

  primaryBackground: colors.primary[40],
  primaryBackgroundSelected: colors.primary[80],
  secondaryBackground: colors.secondary[20],

  text: colors.neutral.black,
  background: colors.neutral.gray4,
  label: colors.neutral.gray3,
  rating: colors.rating,

  colors: { ...colors },
};

export default DefaultTheme;
