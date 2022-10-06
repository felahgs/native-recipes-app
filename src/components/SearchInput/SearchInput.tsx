import { TextInput as NativeTextInput, View, Pressable } from "react-native";
import React, { useState } from "react";

import { useTheme } from "hooks/useTheme";
import Icon from "components/Icon";

import { SearchInputProps } from "./types";
import styles from "./styles";

const TextInput = (props: SearchInputProps) => {
  const theme = useTheme();
  const { passedStyle, onFilter } = props;

  const [value, setValue] = useState("");

  const placeholderStyle = value.length
    ? null
    : {
        lineHeight: 16,
        fontSize: 11,
      };

  const fontColor = theme.buttonLabel;
  const colors = {
    borderColor: theme.colors.neutral.gray4,
  };

  const buttonColors = {
    backgroundColor: theme.primary,
  };

  return (
    <View style={styles.searchContainer}>
      <View style={[styles.inputContainer, passedStyle, colors]}>
        <Icon name="search" color={theme.colors.neutral.gray4} />
        <NativeTextInput
          value={value}
          onChangeText={setValue}
          style={[styles.input, colors, placeholderStyle]}
          {...props}
        />
      </View>
      <Pressable onPress={onFilter} style={[styles.filterButton, buttonColors]}>
        <Icon name="setting" color={fontColor} size={22} />
      </Pressable>
    </View>
  );
};

export default TextInput;
