import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, Text } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      <View style={{ alignItems: "center" }}>
        <Text> Hello World!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
