import { ScrollView, View, Text } from "react-native";
import React from "react";

import SearchCard from "../../components/RecipeCards/SearchCard";

import { FeaturedSliderProps } from "./types";
import styles from "./styles";

export default function FeaturedSlider({
  // recipeList,
  recipesList,
}: FeaturedSliderProps) {
  return (
    <View style={styles.container}>
      {/* // contentContainerStyle={[style, styles.container]} */}
      {/* // showsHorizontalScrollIndicator={false} */}
      {/* {recipeList.map((card, idx) => (
        <SearchCard
          key={`${card.title}-${idx}`}
          name={card.title}
          time={card.time}
        />
      ))} */}
      {recipesList.map(item => {
        return <SearchCard title={item.name} />;
      })}
    </View>
  );
}
