import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    height: 60,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    lineHeight: 24,
    fontWeight: 600,
  },
  smallButton: {
    borderRadius: 10,
    height: 31,
    marginVertical: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    lineHeight: 16,
    fontWeight: 600,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
  },
  smallText: {
    fontSize: 11,
    lineHeight: 16,
  },
  withIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 100,
  },
  icon: {
    marginLeft: 10,
  },
});
