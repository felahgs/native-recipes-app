import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, View } from "react-native";

import { ThemeContext } from "hooks/useTheme";
import DefaultTheme from "theme/defaultTheme";
import SignIn from "screens/SignIn";

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
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      <ThemeContext.Provider value={DefaultTheme}>
        <View style={styles.view}>
          <SignIn />
        </View>
      </ThemeContext.Provider>
    </SafeAreaView>
  );
};

export default App;
