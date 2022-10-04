import { TextInput as NativeTextInput } from "react-native";
import React from "react";

import { useTheme } from "hooks/useTheme";

import { TextInputType } from "./types";
import styles from "./styles";

const TextInput = (props: TextInputType) => {
  const theme = useTheme();
  const { value, passedStyle } = props;

  const placeholderStyle = value
    ? null
    : {
        lineHeight: 16,
        fontSize: 11,
      };

  const colors = {
    borderColor: theme.colors.neutral.gray4,
  };

  return (
    <NativeTextInput
      style={[styles.input, colors, placeholderStyle, passedStyle]}
      {...props}
    />
  );
};

export default TextInput;
