import { Pressable, View } from "react-native";
import React from "react";

import Text from "components/Text";
import FacebookIcon from "assets/icons/facebook.svg";
import GoogleIcon from "assets/icons/google.svg";
import { useTheme } from "hooks/useTheme";

import styles from "./styles";

const SocialMediaLogin = () => {
  const theme = useTheme();

  const HorizontalLine = () => {
    const customColor = {
      borderBottomColor: theme.colors.neutral.gray4,
    };

    return <View style={[styles.horizontalLine, customColor]} />;
  };

  const backgroundColor = { backgroundColor: theme.background };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <HorizontalLine />
        <Text.Smaller color={theme.colors.neutral.gray4}>
          Ou Faça Login Com
        </Text.Smaller>
        <HorizontalLine />
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => console.log("TODO: Google login")}
          style={[styles.button, backgroundColor]}>
          <GoogleIcon />
        </Pressable>

        <Pressable
          onPress={() => console.log("TODO: Facebook login")}
          style={[styles.button, backgroundColor]}>
          <FacebookIcon />
        </Pressable>
      </View>
    </View>
  );
};

export default SocialMediaLogin;
