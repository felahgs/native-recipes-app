import { View, Image } from "react-native";
import React from "react";

import mockedImage from "mocks/Home/recipe-image.png";
import Text from "components/Text";
import { useTheme } from "hooks/useTheme";

import styles from "./styles";
import { FeaturedCardProps } from "./types";

export default function FeaturedCard({ time, name }: FeaturedCardProps) {
  const theme = useTheme();

  const textColor = theme.colors.neutral.gray2;

  return (
    <View style={styles.featuredCard}>
      <Image style={styles.image} source={mockedImage} />
      <View style={styles.text}>
        <Text.Small style={styles.title}>{name}</Text.Small>
        <Text.Smaller bold color={textColor}>
          Preparo
        </Text.Smaller>
        <Text.Smaller bold>{time} Mins</Text.Smaller>
      </View>
    </View>
  );
}
