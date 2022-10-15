import { StyleProp } from "react-native";

export interface NewRecipesSliderProps {
  style?: StyleProp<{}>;
  recipeList: Array<{
    title: string;
    time: number | string;
  }>;
}
