import { View, Image } from "react-native";
import React from "react";

import mockedImage from "mocks/Search/recipe-search.png";
import Text from "components/Text";
import { useTheme } from "hooks/useTheme";

import styles from "./styles";
import { FeaturedCardProps } from "./types";

export default function FeaturedCard({ title }: FeaturedCardProps) {
  const theme = useTheme();

  const textColor = theme.colors.neutral.white;

  return (
    <View style={styles.searchCard}>
      <Image style={styles.image} source={mockedImage} />
      <View style={styles.title}>
        <Text.Small bold color={textColor}>
          {title}
        </Text.Small>
      </View>
    </View>
  );
}
