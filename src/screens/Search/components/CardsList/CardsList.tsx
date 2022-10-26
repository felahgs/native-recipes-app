import { View } from "react-native";
import React from "react";

import SearchCard from "../../components/RecipeCards/SearchCard";

import { FeaturedSliderProps } from "./types";
import styles from "./styles";

export default function FeaturedSlider({ recipesList }: FeaturedSliderProps) {
  return (
    <View style={styles.container}>
      {recipesList.map((item, idx) => {
        return <SearchCard key={`${item.name}_${idx}`} title={item.name} />;
      })}
    </View>
  );
}
