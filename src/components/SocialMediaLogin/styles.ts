import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    margin: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  horizontalLine: {
    width: 50,
    borderBottomWidth: 1,
    margin: 5,
    bottom: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
    height: 44,
    width: 44,
    borderRadius: 10,

    elevation: 2,
  },
});
