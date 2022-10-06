import { StyleSheet } from "react-native";

export default StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterButton: {
    flexDirection: "row",
    height: 50,
    width: 50,
    marginLeft: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: 10,
    fontFamily: "Poppins-Regular",
    height: 55,
  },
  input: {
    fontSize: 16,
    marginHorizontal: 10,
    fontFamily: "Poppins-Regular",
    flex: 1,
    top: 5,
    marginBottom: 5,
  },
});
