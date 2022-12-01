import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

import { useNavigation } from "@react-navigation/native";

import { StackRoutes } from "constants/routes";
import imgPlaceholder from "mocks/Search/recipe-placeholder.jpg";
import Text from "components/Text";
import { useTheme } from "hooks/useTheme";

import styles from "./styles";
import { FeaturedCardProps } from "./types";

export default function FeaturedCard({ recipe }: FeaturedCardProps) {
  const { RECIPE } = StackRoutes;
  const theme = useTheme();
  const textColor = theme.colors.neutral.white;
  const navigation = useNavigation();

  const handleNavigation = () =>
    navigation.navigate(RECIPE as never, { recipe } as never);
  const { name, img_url } = recipe;

  return (
    <TouchableOpacity onPress={handleNavigation} style={styles.searchCard}>
      <Image
        style={styles.image}
        source={img_url ? { uri: img_url } : imgPlaceholder}
      />
      <LinearGradient colors={["#0000003b", "#000000"]} style={styles.mask} />
      <View style={styles.title}>
        <Text.Small bold color={textColor}>
          {name}
        </Text.Small>
      </View>
    </TouchableOpacity>
  );
}
