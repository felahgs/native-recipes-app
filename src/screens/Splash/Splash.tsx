import { View, ImageBackground } from "react-native";
import React from "react";

import Button from "components/Button";
import Text from "components/Text";
import Logo from "assets/images/logo.svg";
import backgroundImage from "assets/images/splash-background.jpg";

import styles from "./styles";

const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={backgroundImage}>
        <View>
          <Logo />
          <Text.Medium bold>Premium Recipe</Text.Medium>
        </View>

        <View>
          <Text.Title>Get</Text.Title>
          <Text.Title>Cooking</Text.Title>
          <Text>Simple way to find Tasty Recipe</Text>
        </View>

        <Button
          onPress={() => console.log("TODO: navigate to login screen")}
          title="Entrar"
          icon="arrow-right"
          passedStyle={styles.button}
        />
      </ImageBackground>
    </View>
  );
};

export default Splash;
