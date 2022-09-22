import { Pressable, View } from "react-native";
import React from "react";

import Text from "components/Text";
import { useTheme } from "hooks/useTheme";

import LoginForm from "./components/LoginForm";

import styles from "./styles";

const SignIn = () => {
  const theme = useTheme();

  return (
    <View>
      <View style={styles.welcome}>
        <Text.Header color={theme.label} bold>
          Olá,
        </Text.Header>
        <Text.Large> Bem vindo de volta!</Text.Large>
      </View>

      <LoginForm />

      <View style={styles.signIn}>
        <Text.Smaller color={theme.text}>Ainda não possuí conta?</Text.Smaller>
        <Pressable onPress={() => console.log("TODO: go to create account")}>
          <Text.Smaller color={theme.secondary}> Cadastre aqui</Text.Smaller>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
