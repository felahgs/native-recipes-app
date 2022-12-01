export interface RecipeDataProps {
  id: string;
  name: string;
  img_url?: string;
  preparation: string[];
  ingredients: string[];
  servings?: string;
}
