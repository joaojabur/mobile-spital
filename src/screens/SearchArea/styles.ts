import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { white, dark, darkGray } = theme.colors;
const { text700 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  search: {
    marginTop: 10,
    width: "90%",
  },
  filter: {
    width: "90%",
    height: "90%",
    backgroundColor: white,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  filterTitle: {
    fontFamily: text700,
    color: dark,
    fontSize: 36,
  },
  filterForm: {
    paddingTop: 30,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  filterBox: {
    marginTop: 20,
    width: "100%",
  },
  label: {
    paddingLeft: 16,
    fontFamily: text700,
    color: darkGray,
    fontSize: 16,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  filterButton: {
    width: "90%",
    marginTop: 20,
  },
  closeButton: {
    width: 50,
    height: 50,
    backgroundColor: dark,
    alignSelf: "flex-end",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
});
