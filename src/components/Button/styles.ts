import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { primary100, white } = theme.colors;
const { text700 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    backgroundColor: primary100,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: white,
    fontFamily: text700,
    fontSize: 25,
    textAlign: "center",
    lineHeight: 28
  },
});
