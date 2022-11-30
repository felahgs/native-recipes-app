import { View } from "react-native";
import React, { useState } from "react";

import TextInput from "components/TextInput";
import Text from "components/Text";
import Button from "components/Button";
import { useTheme } from "hooks/useTheme";
import { useAuth } from "hooks/auth";

import styles from "./styles";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const theme = useTheme();
  const { signUp } = useAuth();

  const showPasswordError =
    password !== confirmPassword && confirmPassword.length > 0;
  const isDataValid = username && !showPasswordError && email && password;

  const handleSignUp = () => {
    signUp({ username, email, password });
  };

  return (
    <View>
      <Text>Name</Text>
      <TextInput
        autoComplete="username-new"
        passedStyle={styles.input}
        onChangeText={setUsername}
        autoCapitalize="none"
        placeholder="Digite seu nome de usuário"
        value={username}
      />

      <Text>Email</Text>
      <TextInput
        autoComplete="email"
        autoCapitalize="none"
        keyboardType="email-address"
        passedStyle={styles.input}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        value={email}
      />

      <Text>Senha</Text>
      <TextInput
        autoComplete="password-new"
        passedStyle={styles.input}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
        value={password}
      />

      {/* TODO: adicionar verificação e debounce */}
      <View style={styles.inputWithMessage}>
        <Text>Confirmar Senha</Text>
        <TextInput
          autoComplete="password-new"
          passedStyle={styles.input}
          onChangeText={setConfirmPassword}
          placeholder="Redigite a senha"
          value={confirmPassword}
        />
        {showPasswordError && (
          <Text.Smaller
            passedStyle={styles.inlineError}
            color={theme.colors.warning.regular}>
            As senhas não conferem!
          </Text.Smaller>
        )}
      </View>

      <Button
        // "TODO: handle username and press animation"
        disabled={!isDataValid}
        onPress={handleSignUp}
        accessibilityLabel="Fazer cadastro de conta"
        title="Registrar"
        icon="arrow-right"
        passedStyle={styles.button}
      />
    </View>
  );
};

export default RegistrationForm;
