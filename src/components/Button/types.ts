import { PressableProps, View, StyleProp } from "react-native";

export interface ButtonType
  extends JSX.IntrinsicAttributes,
    PressableProps,
    React.RefAttributes<View> {
  passedStyle?: StyleProp<{}>;
  isLoading?: boolean;
  title?: string;
  onPress: () => void;
  secondary?: boolean;
  icon?: string;
  small?: boolean;
}
