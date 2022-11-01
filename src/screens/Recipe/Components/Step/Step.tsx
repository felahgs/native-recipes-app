import { View } from "react-native";
import React from "react";

import Text from "components/Text";
import { useTheme } from "hooks/useTheme";

import { StepProps } from "./types";
import styles from "./styles";

const Step = ({ content }: StepProps) => {
  const theme = useTheme();

  const customStyle = {
    backgroundColor: theme.colors.neutral.gray4,
  };

  return (
    <View style={[styles.container, customStyle]}>
      <Text.Smaller>{content}</Text.Smaller>
    </View>
  );
};

export default Step;
