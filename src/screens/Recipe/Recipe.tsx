import { ScrollView, Image, View } from "react-native";
import React, { useState } from "react";

import { useRoute } from "@react-navigation/native";

import imgPlaceholder from "mocks/Search/recipe-placeholder.jpg";
import Text from "components/Text";
import Tabs from "components/Tabs";
import Icon from "components/Icon";
import { useTheme } from "hooks/useTheme";

import Step from "./Components/Step";

import styles from "./styles";
import { RecipesProps } from "./types";

const Recipe = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const route = useRoute();
  const textColor = theme.colors.neutral.gray3;

  const { recipe } = route.params as RecipesProps;
  const { img_url } = recipe;

  const pageTabs = [
    { name: "Preparo", action: () => setSelectedTab(0) },
    { name: "Ingredientes", action: () => setSelectedTab(1) },
  ];

  const RecipeContent = () => {
    const stepList = selectedTab ? "ingredients" : "preparation";

    return (
      <React.Fragment>
        {recipe[stepList].map((step, idx) => (
          <Step key={`step_${idx}`} content={step} />
        ))}
      </React.Fragment>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}>
      <Image
        style={styles.image}
        source={img_url ? { uri: img_url } : imgPlaceholder}
      />

      <Text.Small passedStyle={styles.title} bold>
        {recipe.name}
      </Text.Small>

      <Tabs
        style={styles.tabs}
        buttonStyle={styles.tabButtons}
        values={pageTabs}
      />

      <View style={styles.details}>
        <View style={styles.servings}>
          {recipe.servings && <Icon style={styles.icon} name="serving" />}
          {recipe.servings && (
            <Text.Small passedStyle={styles.text} color={textColor}>
              {`${recipe.servings}`}
            </Text.Small>
          )}
        </View>
        {recipe.preparation && (
          <Text.Small color={textColor}>
            {`${recipe.preparation.length} passos`}
          </Text.Small>
        )}
      </View>

      <RecipeContent />
    </ScrollView>
  );
};

export default Recipe;
