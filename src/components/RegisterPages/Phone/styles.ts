import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

const { dark } = theme.colors;
const { text700 } = theme.fonts;

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
  form: {
    width: "100%",
    flex: 1,
  },
  button: {
    width: "100%",
    marginTop: 80,
  },
});
