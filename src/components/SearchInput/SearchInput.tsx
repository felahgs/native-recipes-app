import { TextInput as NativeTextInput, View } from "react-native";
import React, { useState } from "react";

import { useTheme } from "hooks/useTheme";
import Icon from "components/Icon";

import { SearchInput } from "./types";
import styles from "./styles";

const TextInput = (props: SearchInput) => {
  const theme = useTheme();
  const { passedStyle } = props;
  const [value, setValue] = useState("");

  const placeholderStyle = value.length
    ? null
    : {
        lineHeight: 16,
        fontSize: 11,
      };

  const colors = {
    borderColor: theme.colors.neutral.gray4,
  };

  console.log("value", !!value.length);

  return (
    <View style={[styles.inputContainer, colors, passedStyle]}>
      <Icon name="search" color={theme.colors.neutral.gray4} />
      <NativeTextInput
        value={value}
        onChangeText={setValue}
        style={[styles.input, colors, placeholderStyle]}
        {...props}
      />
    </View>
  );
};

export default TextInput;
