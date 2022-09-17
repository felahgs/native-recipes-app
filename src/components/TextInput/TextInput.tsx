import { TextInput as NativeTextInput, TextInputProps } from "react-native";
import React from "react";

import styles from "./styles";

const TextInput = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<NativeTextInput> &
    Readonly<TextInputProps>,
) => {
  return <NativeTextInput style={styles.input} {...props} />;
};

export default TextInput;
