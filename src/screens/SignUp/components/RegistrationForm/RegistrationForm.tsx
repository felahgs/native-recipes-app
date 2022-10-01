import { View, Pressable } from "react-native";
import React, { useState } from "react";

import TextInput from "components/TextInput";
import Text from "components/Text";
import Button from "components/Button";
import { useTheme } from "hooks/useTheme";

import styles from "./styles";

const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const theme = useTheme();

  return (
    <View>
      <Text>Name</Text>
      <TextInput
        passedStyle={styles.input}
        onChangeText={setLogin}
        placeholder="Digite seu nome de usuário"
        value={login}
      />

      <Text>Email</Text>
      <TextInput
        passedStyle={styles.input}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        value={email}
      />

      <Text>Senha</Text>
      <TextInput
        passedStyle={styles.input}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
        value={password}
      />

      {/* TODO: adicionar verificação e debounce */}
      <Text>Confirmar Senha</Text>
      <TextInput
        passedStyle={styles.input}
        onChangeText={setConfirmPassword}
        placeholder="Redigite a senha"
        value={confirmPassword}
      />

      <Pressable onPress={() => console.log("TODO: go to forget password")}>
        <Text.Smaller color={theme.secondary}>Esqueceu a senha?</Text.Smaller>
      </Pressable>

      <Button
        onPress={() => console.log("TODO: handle login and press animation")}
        accessibilityLabel="Fazer cadastro de conta"
        title="Registrar"
        icon="arrow-right"
        passedStyle={styles.button}
      />
    </View>
  );
};

export default RegistrationForm;
