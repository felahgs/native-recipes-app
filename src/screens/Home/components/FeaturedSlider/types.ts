import { StyleProp } from "react-native";
export interface FeaturedSliderProps {
  style?: StyleProp<{}>;
  recipeList: Array<{
    title: string;
    time: number | string;
  }>;
}
