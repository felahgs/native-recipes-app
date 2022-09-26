import { StyleSheet } from "react-native";

export default StyleSheet.create({
  box: {
    width: "100%",
    height: 200,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    resizeMode: "cover",
    padding: 40,
  },
  mask: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  maskBottom: {
    width: "100%",
    height: "20%",
    position: "absolute",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  logo: {
    paddingBottom: 15,
  },
  content: {
    alignItems: "center",
  },
  title: {
    marginBottom: 60,
    alignItems: "center",
  },
  button: {
    alignSelf: "stretch",
  },
});
