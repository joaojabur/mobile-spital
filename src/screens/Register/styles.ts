import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { dark, correct } = theme.colors;
const { text700, text400, text600 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  success: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: text700,
    color: correct,
    fontSize: 30,
  },
});
