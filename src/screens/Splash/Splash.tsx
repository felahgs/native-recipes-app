import { View, ImageBackground } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

import Button from "components/Button";
import Text from "components/Text";
import LogoImage from "assets/images/logo.svg";
import backgroundImage from "assets/images/splash-background.jpg";
import { useTheme } from "hooks/useTheme";

import styles from "./styles";

const Splash = () => {
  const theme = useTheme();

  const Logo = () => (
    <View style={styles.logo}>
      <LogoImage />
    </View>
  );

  return (
    <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
      <LinearGradient colors={["#0000003b", "#000000"]} style={styles.mask} />

      <View style={styles.container}>
        <View style={styles.content}>
          <Logo />
          <Text.Medium color={theme.buttonLabel} bold>
            Premium Recipe
          </Text.Medium>
        </View>

        <View style={styles.content}>
          <View style={styles.title}>
            <Text.Title bold color={theme.buttonLabel}>
              Get
            </Text.Title>
            <Text.Title bold color={theme.buttonLabel}>
              Cooking
            </Text.Title>
            <Text color={theme.buttonLabel}>
              Simple way to find Tasty Recipe
            </Text>
          </View>

          <Button
            onPress={() => console.log("TODO: navigate to login screen")}
            title="Comerçar"
            icon="arrow-right"
            passedStyle={styles.button}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Splash;
