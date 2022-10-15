import { ScrollView } from "react-native";
import React from "react";

import FeaturedCard from "../RecipeCards/FeaturedCard/FeaturedCard";

import { FeaturedSliderProps } from "./types";
import styles from "./styles";

export default function FeaturedSlider({
  recipeList,
  style,
}: FeaturedSliderProps) {
  return (
    <ScrollView
      contentContainerStyle={[style, styles.container]}
      showsHorizontalScrollIndicator={false}
      horizontal={true}>
      {recipeList.map((card, idx) => (
        <FeaturedCard
          key={`${card.title}-${idx}`}
          name={card.title}
          time={card.time}
        />
      ))}
    </ScrollView>
  );
}
