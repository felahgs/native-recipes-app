import { Pressable, View, ScrollView } from "react-native";
import React from "react";

import Text from "components/Text";
import { useTheme } from "hooks/useTheme";
import SocialMediaLogin from "components/SocialMediaLogin";

import RegistrationForm from "./components/RegistrationForm";

import styles from "./styles";

const SignIn = () => {
  const theme = useTheme();

  return (
    <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text.Large bold>Criar uma conta</Text.Large>
        <Text.Smaller>Prencha os dados da conta.</Text.Smaller>
      </View>

      <RegistrationForm />

      <SocialMediaLogin />

      <View style={styles.signUp}>
        <Text.Smaller color={theme.text}>Já possuí conta?</Text.Smaller>
        <Pressable onPress={() => console.log("TODO: go to create account")}>
          <Text.Smaller color={theme.secondary}> Entre aqui</Text.Smaller>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default SignIn;
