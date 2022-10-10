import { StyleSheet } from "react-native";

export default StyleSheet.create({
  featuredCard: {
    backgroundColor: "#D9D9D9",
    height: 186,
    width: 150,
    borderRadius: 12,
    marginTop: 40,
    marginRight: 15,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontColor: "black",
    fontWeight: "bold",
    lineHeight: 21,
    marginBottom: 10,
  },
  timeContainer: {
    marginTop: 20,
  },
  text: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  image: {
    position: "absolute",
    bottom: 70,
    maxWidth: 150,
  },
});
