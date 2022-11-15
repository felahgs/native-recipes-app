import { StyleSheet } from "react-native";

export default StyleSheet.create({
  searchCard: {
    position: "relative",
    height: 160,
    width: 160,
    justifyContent: "flex-end",
    marginBottom: 15,
  },
  mask: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 10,
  },
  title: {
    position: "absolute",
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  image: {
    height: 160,
    width: 160,
    borderRadius: 10,
  },
});
