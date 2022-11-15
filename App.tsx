import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { ThemeContext } from "hooks/useTheme";
import DefaultTheme from "theme/defaultTheme";
import Search from "screens/Search";
// import Recipe from "screens/Recipe";
import { AppRoutes } from "routes";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    alignItems: "center",
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.screen}>
        <StatusBar />
        <ThemeContext.Provider value={DefaultTheme}>
          <AppRoutes />
          {/* <Recipe /> */}
          {/* <Search /> */}
        </ThemeContext.Provider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
