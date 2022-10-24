import { View, ScrollView } from "react-native";
import React from "react";

import Text from "components/Text";
import SearchInput from "components/SearchInput";

import CardsList from "./components/CardsList";

import styles from "./styles";

const Home = () => {
  const mockedCards = [
    { name: "Taditional spare ribs backed" },
    { name: "Spicy roasted chicken" },
    { name: "Taditional spare ribs backed" },
    { name: "Taditional spare ribs backed" },
    { name: "Taditional spare ribs backed" },
    { name: "Taditional spare ribs backed" },
    { name: "Taditional spare ribs backed" },
    { name: "Taditional spare ribs backed" },
    { name: "Taditional spare ribs backed" },
    { name: "Taditional spare ribs backed" },
    { name: "Taditional spare ribs backed" },
    { name: "Taditional spare ribs backed" },
    { name: "Taditional spare ribs backed" },
    { name: "Taditional spare ribs backed" },
    { name: "Taditional spare ribs backed" },
    { name: "Taditional spare ribs backed" },
    { name: "Taditional spare ribs backed" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.user}>
          <Text.Large bold>Olá Usuário</Text.Large>
          <Text.Smaller>O que vamos cozinhar hoje?</Text.Smaller>
        </View>

        <SearchInput
          onFilter={() => console.log("TODO: filter")}
          placeholder="Procure por uma receita ou ingrediente"
        />
        <View style={styles.title}>
          <Text bold>Resultados</Text>
        </View>

        <CardsList recipesList={mockedCards} />
      </View>
    </ScrollView>
  );
};

export default Home;
