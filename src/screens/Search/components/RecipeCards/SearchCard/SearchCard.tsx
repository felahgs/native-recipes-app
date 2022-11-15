import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

import { useNavigation } from "@react-navigation/native";

import { LoginRoutesNames } from "constants/routes";
import mockedImage from "mocks/Search/recipe-search.png";
import Text from "components/Text";
import { useTheme } from "hooks/useTheme";

import styles from "./styles";
import { FeaturedCardProps } from "./types";

export default function FeaturedCard({ recipe }: FeaturedCardProps) {
  const { RECIPE } = LoginRoutesNames;
  const theme = useTheme();
  const textColor = theme.colors.neutral.white;
  // const navigation = useNavigation<NativeStackNavigationProp<PageStackProps>>();
  const navigation = useNavigation();

  const handleNavigation = () => navigation.navigate(RECIPE, { recipe });
  // const handleNavigation = () => console.log("navigate with recipe", recipe);
  const { name } = recipe;

  return (
    <TouchableOpacity onPress={handleNavigation} style={styles.searchCard}>
      <Image style={styles.image} source={mockedImage} />
      <LinearGradient colors={["#0000003b", "#000000"]} style={styles.mask} />
      <View style={styles.title}>
        <Text.Small bold color={textColor}>
          {name}
        </Text.Small>
      </View>
    </TouchableOpacity>
  );
}
