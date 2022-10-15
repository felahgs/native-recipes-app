import { View, Image } from "react-native";
import React from "react";

import mockedImage from "mocks/Home/recipe-image.png";
import Text from "components/Text";
import Icon from "components/Icon";
import { useTheme } from "hooks/useTheme";

import styles from "./styles";
import { NewCardProps } from "./types";

export default function NewCard({ time, name }: NewCardProps) {
  const theme = useTheme();

  const timeColor = theme.colors.neutral.gray3;

  return (
    <View style={styles.newCard}>
      <View style={styles.left}>
        <Text.Small>{name}</Text.Small>
      </View>
      <View style={styles.right}>
        <Image style={styles.image} source={mockedImage} />
        <View style={styles.time}>
          <Icon
            style={styles.icon}
            size={15}
            color={timeColor}
            name={"timer"}
          />
          <Text.Smaller color={timeColor} bold>
            {time} Mins
          </Text.Smaller>
        </View>
      </View>
    </View>
  );
}
