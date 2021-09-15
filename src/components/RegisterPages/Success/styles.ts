import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

const { correct } = theme.colors;
const { text700 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  success: {
    fontFamily: text700,
    color: correct,
    fontSize: 40,
  },
});
