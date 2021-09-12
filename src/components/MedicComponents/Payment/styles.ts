import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

const { dark, primary100 } = theme.colors;
const { text700, text500 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  scroll: {
    flex: 1,
    width: "100%",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingTop: 20,
  },
  title: {
    fontFamily: text700,
    color: dark,
    fontSize: 24,
  },
  date: {
    fontFamily: text700,
    color: dark,
    fontSize: 18,
  },
  type: {
    fontFamily: text500,
    color: dark,
    fontSize: 18,
  },
  flex: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontFamily: text700,
    color: primary100,
    fontSize: 24,
  },
  button: {
    width: "100%",
    marginTop: 20,
  },
});
