import { StyleProp } from "react-native";
export interface FeaturedSliderProps {
  recipesList: Array<{
    id: string;
    name: string;
    ingredients: string[];
    preparation: string[];
    servigs?: string;
  }>;
  style?: StyleProp<{}>;
  // recipeList: Array<{
  //   time: number | string;
  // }>;
}
