import { Text as NativeText, StyleProp } from "react-native";
import React from "react";

import { useTheme } from "hooks/useTheme";

import { TextType } from "./types";

import styles from "./styles";

const _generateText = (props: TextType, textStyle: StyleProp<{}>) => {
  const theme = useTheme();
  const { color, bold } = props;
  const boldStyle = bold ? styles.bold : null;
  const fontColor = {
    color: color || theme.text,
  };

  return (
    <NativeText
      style={[styles.base, textStyle, boldStyle, fontColor]}
      {...props}
    />
  );
};

const TextInput = (props: TextType) => _generateText(props, styles.normal);
TextInput.Title = (props: TextType) => _generateText(props, styles.title);
TextInput.Header = (props: TextType) => _generateText(props, styles.header);
TextInput.Large = (props: TextType) => _generateText(props, styles.large);
TextInput.Medium = (props: TextType) => _generateText(props, styles.medium);
TextInput.Small = (props: TextType) => _generateText(props, styles.small);
TextInput.Smaller = (props: TextType) => _generateText(props, styles.smaller);

export default TextInput;
