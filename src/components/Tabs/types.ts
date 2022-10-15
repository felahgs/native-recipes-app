import { StyleProp } from "react-native";
export interface TabsProps {
  style?: StyleProp<{}>;
  values: Array<{
    name: string;
    action: () => void;
  }>;
}
