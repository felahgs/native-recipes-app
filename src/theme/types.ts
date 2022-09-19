import { ColorValue } from "react-native";

export interface ThemeType {
  primary: ColorValue;
  primaryLight: ColorValue;
  secondary: ColorValue;

  primaryBackground: ColorValue;
  primaryBackgroundSelected: ColorValue;
  secondaryBackground: ColorValue;

  text: ColorValue;
  label: ColorValue;
  background: ColorValue;
  rating: ColorValue;

  colors: {
    [key: string | number]: ColorValue | { [ḱey: string | number]: ColorValue };
  };
}
