export interface FeaturedCardProps {
  recipe: {
    id: string;
    name: string;
    img_url: string;
    ingredients: string[];
    preparation: string[];
    servings?: string;
  };
}
