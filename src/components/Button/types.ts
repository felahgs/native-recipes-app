import { PressableProps, View, StyleProp } from "react-native";

export interface ButtonType
  extends JSX.IntrinsicAttributes,
    PressableProps,
    React.RefAttributes<View> {
  passedStyle?: StyleProp<{}>;
  title?: string;
  secondary?: boolean;
}
