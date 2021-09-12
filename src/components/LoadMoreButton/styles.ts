import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { primary100, white } = theme.colors;
const { text700 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primary100,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 8,
  },
  title: {
    fontFamily: text700,
    fontSize: 24,
    color: white,
  },
});
