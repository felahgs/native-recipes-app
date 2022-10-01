import { View, Pressable } from "react-native";
import React, { useState } from "react";

import TextInput from "components/TextInput";
import Text from "components/Text";
import Button from "components/Button";
import { useTheme } from "hooks/useTheme";

import styles from "./styles";
import { LoginFormProps } from "./types";

const LoginForm = ({ redirect }: LoginFormProps) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        passedStyle={styles.input}
        onChangeText={setLogin}
        placeholder="Digite seu Email"
        value={login}
      />

      <Text>Senha</Text>
      <TextInput
        passedStyle={styles.input}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
        value={password}
      />

      <Pressable onPress={() => console.log("TODO: go to forget password")}>
        <Text.Smaller color={theme.secondary}>Esqueceu a senha?</Text.Smaller>
      </Pressable>

      <Button
        // TODO: propper handle login
        onPress={() => redirect()}
        accessibilityLabel="Fazer cadastro de conta"
        title="Entrar"
        icon="arrow-right"
        passedStyle={styles.button}
      />
    </View>
  );
};

export default LoginForm;
