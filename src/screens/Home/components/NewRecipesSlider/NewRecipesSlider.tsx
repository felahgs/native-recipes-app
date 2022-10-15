import { ScrollView } from "react-native";
import React from "react";

import NewCard from "../RecipeCards/NewCard";

import { NewRecipesSliderProps } from "./types";

export default function NewRecipesSlider({
  recipeList,
  style,
}: NewRecipesSliderProps) {
  return (
    <ScrollView
      contentContainerStyle={style}
      showsHorizontalScrollIndicator={false}
      horizontal={true}>
      {recipeList.map((card, idx) => (
        <NewCard
          key={`${card.title}-${idx}`}
          name={card.title}
          time={card.time}
        />
      ))}
    </ScrollView>
  );
}
