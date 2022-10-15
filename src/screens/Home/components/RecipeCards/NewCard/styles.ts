import { StyleSheet } from "react-native";

export default StyleSheet.create({
  newCard: {
    backgroundColor: "#fff",
    height: 95,
    width: 251,
    borderRadius: 12,
    marginTop: 30,
    marginRight: 15,
    padding: 15,
    flexDirection: "row",
  },
  left: {
    textAlign: "center",
    fontSize: 16,
    fontColor: "black",
    fontWeight: "bold",
    lineHeight: 21,
    marginBottom: 10,
    width: "65%",
  },
  right: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  time: {
    flexDirection: "row",
  },
  icon: {
    paddingHorizontal: 5,
  },
  image: {
    position: "absolute",
    bottom: 15,
    right: -15,
    height: 90,
    width: 85,
  },
});
