import { Pressable } from "react-native";
import React from "react";

import Text from "components/Text";
import { useTheme } from "hooks/useTheme";

import { ButtonType } from "./types";

import styles from "./styles";

const TextInput = (props: ButtonType) => {
  const theme = useTheme();
  const { title, secondary, passedStyle } = props;

  const themeColors = {
    backgroundColor: secondary ? "transparent" : theme.primary,
  };
  const fontColor = secondary ? theme.primaryLight : theme.buttonLabel;

  return (
    <Pressable style={[styles.button, themeColors, passedStyle]} {...props}>
      <Text color={fontColor} bold>
        {title}
      </Text>
    </Pressable>
  );
};

export default TextInput;
