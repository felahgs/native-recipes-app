import { View } from "react-native";
import React, { Component } from "react";

import Text from "components/Text";
import SearchInput from "components/SearchInput";

import styles from "./styles";

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.user}>
          <Text.Large>Olá Usuário</Text.Large>
          <Text.Smaller>O que vamos cozinhar hoje?</Text.Smaller>
        </View>
        <SearchInput placeholder="Procure por uma receita ou ingrediente" />
      </View>
    );
  }
}

export default Home;
