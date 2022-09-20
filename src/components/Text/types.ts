import { Text, TextProps, ColorValue } from "react-native";

export interface TextType
  extends JSX.IntrinsicAttributes,
    JSX.IntrinsicClassAttributes<Text>,
    Readonly<TextProps> {
  bold?: boolean;
  color?: ColorValue;
}
