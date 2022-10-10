import { View } from "react-native";
import React, { useState } from "react";

import Text from "components/Text";
import SearchInput from "components/SearchInput";
import Tabs from "components/Tabs";

import FeaturedSlider from "./components/FeaturedSlider";

import styles from "./styles";

const Home = () => {
  const [selectedTab, setSelected] = useState<number>();

  const mockedTabs = [
    { name: "Tab 1", action: () => setSelected(1) },
    { name: "Tab 2", action: () => setSelected(2) },
    { name: "Tab 3", action: () => setSelected(3) },
    { name: "Tab 4", action: () => setSelected(4) },
    { name: "Tab 5", action: () => setSelected(5) },
    { name: "Tab 6", action: () => setSelected(6) },
    { name: "Tab 7", action: () => setSelected(7) },
    { name: "Tab 8", action: () => setSelected(8) },
    { name: "Tab 9", action: () => setSelected(9) },
    { name: "Tab 10", action: () => setSelected(10) },
    { name: "Tab 11", action: () => setSelected(11) },
  ];

  const mockedFeaturedCards = [
    { title: "Classic Greek Salad", time: 15 },
    { title: "Crunch Nut Coleslaw", time: 10 },
    { title: "Classic Greek Salad", time: 15 },
    { title: "Crunch Nut Coleslaw", time: 10 },
    { title: "Crunch Nut Coleslaw", time: 10 },
    { title: "Crunch Nut Coleslaw", time: 10 },
    { title: "Crunch Nut Coleslaw", time: 10 },
    { title: "Crunch Nut Coleslaw", time: 10 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Text.Large bold>Olá Usuário</Text.Large>
        <Text.Smaller>O que vamos cozinhar hoje?</Text.Smaller>
      </View>

      <SearchInput
        onFilter={() => console.log("TODO: filter")}
        placeholder="Procure por uma receita ou ingrediente"
      />

      <Tabs values={mockedTabs} />

      {selectedTab && <Text.Large>SELECTED TAB {selectedTab}</Text.Large>}

      <FeaturedSlider recipeList={mockedFeaturedCards} />
    </View>
  );
};

export default Home;
