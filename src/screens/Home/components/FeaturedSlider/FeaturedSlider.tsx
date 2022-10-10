import { ScrollView } from "react-native";
import React from "react";

import FeaturedCard from "../RecipeCards/FeaturedCard/FeaturedCard";

import { FeaturedSliderProps } from "./types";

export default function FeaturedSlider({ recipeList }: FeaturedSliderProps) {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
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
