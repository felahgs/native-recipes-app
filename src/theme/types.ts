import { ColorValue } from "react-native";

export interface ThemeType {
  primary: ColorValue;
  primaryLight: ColorValue;
  secondary: ColorValue;

  primaryBackground: ColorValue;
  primaryBackgroundSelected: ColorValue;
  secondaryBackground: ColorValue;

  text: ColorValue;
  buttonLabel: ColorValue;
  label: ColorValue;
  background: ColorValue;
  rating: ColorValue;

  colors: ColorProps;
}

export interface ColorProps {
  neutral: {
    black: ColorValue;
    gray1: ColorValue;
    gray2: ColorValue;
    gray3: ColorValue;
    gray4: ColorValue;
    white: ColorValue;
  };
  primary: {
    100: ColorValue;
    80: ColorValue;
    60: ColorValue;
    40: ColorValue;
    20: ColorValue;
  };
  secondary: {
    100: ColorValue;
    80: ColorValue;
    60: ColorValue;
    40: ColorValue;
    20: ColorValue;
  };
  rating: ColorValue;
  warning: {
    regular: ColorValue;
    light: ColorValue;
  };
  success: ColorValue;
}
