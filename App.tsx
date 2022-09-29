import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { ThemeContext } from "hooks/useTheme";
import DefaultTheme from "theme/defaultTheme";
// import SignIn from "screens/SignIn";
import { LoginRoutes } from "routes";

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
          <LoginRoutes />
        </ThemeContext.Provider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
