import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface SignUpScreenProps {
  navigation: {
    navigate: (name: string) => NativeStackNavigationProp<{}>;
  };
}
