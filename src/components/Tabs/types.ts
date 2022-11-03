import { StyleProp } from "react-native";
export interface TabsProps {
  style?: StyleProp<{}>;
  buttonStyle?: StyleProp<{}>;
  values: Array<{
    name: string;
    action: () => void;
  }>;
}
