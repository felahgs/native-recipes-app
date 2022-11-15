import { View } from "react-native";
import React from "react";

import SearchCard from "../../components/RecipeCards/SearchCard";

import { FeaturedSliderProps } from "./types";
import styles from "./styles";

export default function FeaturedSlider({ recipesList }: FeaturedSliderProps) {
  return (
    <View style={styles.container}>
      {recipesList.map(recipe => {
        return <SearchCard key={recipe.id} recipe={recipe} />;
      })}
    </View>
  );
}
