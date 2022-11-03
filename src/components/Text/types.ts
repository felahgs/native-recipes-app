import { Text, TextProps, ColorValue, StyleProp } from "react-native";

export interface TextType
  extends JSX.IntrinsicAttributes,
    JSX.IntrinsicClassAttributes<Text>,
    Readonly<TextProps> {
  bold?: boolean;
  passedStyle?: StyleProp<{}>;
  color?: ColorValue;
}
