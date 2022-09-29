import { Pressable, View, ScrollView } from "react-native";
import React from "react";

import Text from "components/Text";
import { useTheme } from "hooks/useTheme";
import SocialMediaLogin from "components/SocialMediaLogin";
import { LoginRoutesNames } from "constants/routes";

import RegistrationForm from "./components/RegistrationForm";

import * as T from "./types";
import styles from "./styles";

const SignIn = ({ navigation }: T.SignUpScreenProps) => {
  const theme = useTheme();
  const { SIGNIN } = LoginRoutesNames;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text.Large bold>Criar uma conta</Text.Large>
          <Text.Smaller>Prencha os dados da conta.</Text.Smaller>
        </View>

        <RegistrationForm />

        <SocialMediaLogin />

        <View style={styles.signUp}>
          <Text.Smaller color={theme.text}>Já possuí conta?</Text.Smaller>
          <Pressable onPress={() => navigation.navigate(SIGNIN)}>
            <Text.Smaller color={theme.secondary}> Entre aqui</Text.Smaller>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
