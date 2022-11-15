import { Pressable, View } from "react-native";
import React from "react";

import Text from "components/Text";
import { useTheme } from "hooks/useTheme";
import SocialMediaLogin from "components/SocialMediaLogin";
import { LoginRoutesNames } from "constants/routes";

import LoginForm from "./components/LoginForm";

import styles from "./styles";
import * as T from "./types";

const SignIn = ({ navigation }: T.SignInScreenProps) => {
  const theme = useTheme();
  const { SIGNUP, HOME, SEARCH } = LoginRoutesNames;

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text.Header color={theme.label} bold>
          Olá,
        </Text.Header>
        <Text.Large> Bem vindo de volta!</Text.Large>
      </View>

      <LoginForm redirect={() => navigation.navigate(SEARCH)} />

      <SocialMediaLogin />

      <View style={styles.signIn}>
        <Text.Smaller color={theme.text}>Ainda não possuí conta?</Text.Smaller>
        <Pressable onPress={() => navigation.navigate(SIGNUP)}>
          <Text.Smaller color={theme.secondary}> Cadastre aqui</Text.Smaller>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
