import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

const { dark, error } = theme.colors;
const { text700, text500 } = theme.fonts;

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  title: {
    fontFamily: text700,
    color: dark,
    fontSize: 24,
  },
  accordions: {
    marginTop: 40,
    width: "100%",
    flex: 1,
  },
  terms: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkbox: {
    marginRight: 10,
  },
  termsText: {
    fontFamily: text500,
    color: dark,
    fontSize: 14,
  },
  button: {
    width: "100%",
    marginTop: 20,
  },
  error: {
    marginTop: 10,
    fontFamily: text700,
    color: error,
    fontSize: 16,
  },
});
