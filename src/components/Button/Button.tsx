import { Pressable, View } from "react-native";
import React from "react";

import Icon from "components/Icon";
import Text from "components/Text";
import { useTheme } from "hooks/useTheme";

import { ButtonType } from "./types";
import styles from "./styles";

const TextInput = (props: ButtonType) => {
  const theme = useTheme();
  const { icon, title, secondary, passedStyle, small } = props;

  const themeColors = {
    backgroundColor: secondary ? "transparent" : theme.primary,
  };
  const fontColor = secondary ? theme.primaryLight : theme.buttonLabel;

  return (
    <Pressable
      style={[
        small ? styles.smallButton : styles.button,
        themeColors,
        passedStyle,
      ]}
      {...props}>
      <View style={icon ? styles.withIcon : null}>
        {small ? (
          <Text.Smaller color={fontColor} bold>
            {title}
          </Text.Smaller>
        ) : (
          <Text color={fontColor} bold>
            {title}
          </Text>
        )}
        {icon && (
          <Icon style={styles.icon} name={icon} color={fontColor} size={16} />
        )}
      </View>
    </Pressable>
  );
};

export default TextInput;
