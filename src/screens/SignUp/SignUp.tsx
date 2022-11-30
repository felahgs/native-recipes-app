import { View, ScrollView } from "react-native";
import React from "react";

import Text from "components/Text";

import RegistrationForm from "./components/RegistrationForm";

import * as T from "./types";
import styles from "./styles";

const SignIn = ({ navigation }: T.SignUpScreenProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text.Large bold>Criar uma conta</Text.Large>
          <Text.Smaller>Prencha os dados da conta.</Text.Smaller>
        </View>

        <RegistrationForm />
      </View>
    </ScrollView>
  );
};

export default SignIn;
