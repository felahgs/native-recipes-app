export interface FeaturedCardProps {
  recipe: {
    id: string;
    name: string;
    ingredients: string[];
    preparation: string[];
    servings?: string;
  };
}
