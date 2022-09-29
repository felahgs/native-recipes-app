import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface SplashScreenProps {
  navigation: {
    navigate: (name: string) => NativeStackNavigationProp<{}>;
  };
}
