import { ColorValue } from "react-native";

export interface ThemeType {
  colors: {
    [key: string]: ColorValue | { [ḱey: string]: ColorValue };
  };
}
