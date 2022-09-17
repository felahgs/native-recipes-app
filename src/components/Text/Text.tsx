import { Text as NativeText, TextProps } from "react-native";
import React from "react";

import styles from "./styles";

const TextInput = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<NativeText> &
    Readonly<TextProps>,
) => {
  return <NativeText style={[styles.base, styles.normal]} {...props} />;
};

TextInput.Title = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<NativeText> &
    Readonly<TextProps>,
) => {
  return <NativeText style={[styles.base, styles.title]} {...props} />;
};

TextInput.Header = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<NativeText> &
    Readonly<TextProps>,
) => {
  return <NativeText style={[styles.base, styles.header]} {...props} />;
};

TextInput.Large = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<NativeText> &
    Readonly<TextProps>,
) => {
  return <NativeText style={[styles.base, styles.large]} {...props} />;
};

TextInput.Medium = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<NativeText> &
    Readonly<TextProps>,
) => {
  return <NativeText style={[styles.base, styles.medium]} {...props} />;
};

TextInput.Small = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<NativeText> &
    Readonly<TextProps>,
) => {
  return <NativeText style={[styles.base, styles.small]} {...props} />;
};

TextInput.Smaller = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<NativeText> &
    Readonly<TextProps>,
) => {
  return <NativeText style={[styles.base, styles.smaller]} {...props} />;
};

export default TextInput;
