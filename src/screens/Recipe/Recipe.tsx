import { ScrollView, Image } from "react-native";
import React, { useState } from "react";

import mockedImage from "mocks/Recipe/recipe_image-2.png";
import mockedRecipe from "mocks/Recipe/recipe_mock.json";
import Text from "components/Text";

import Step from "./Components/Step";

import styles from "./styles";

const Recipe = ({}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}>
      <Image style={styles.image} source={mockedImage} />
      <Text.Small bold>{mockedRecipe.name}</Text.Small>

      {mockedRecipe.preparation.map(step => (
        <Step content={step} />
      ))}
    </ScrollView>
  );
};

export default Recipe;
