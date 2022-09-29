import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface SignInScreenProps {
  navigation: {
    navigate: (name: string) => NativeStackNavigationProp<{}>;
  };
}
