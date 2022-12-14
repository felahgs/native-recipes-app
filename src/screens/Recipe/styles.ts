import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    margin: 30,
    marginBottom: 0,
  },
  image: {
    height: 200,
    width: "100%",
    marginBottom: 10,
    resizeMode: "cover",
    borderRadius: 10,
  },
  tabButtons: {
    width: "50%",
  },
  tabs: {
    flex: 1,
  },
  text: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    paddingRight: 10,
  },
  title: {
    margin: 10,
  },
  content: {
    margin: 0,
  },
  details: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  servings: {
    flexDirection: "row",
    maxWidth: "50%",
    alignItems: "center",
  },
});
