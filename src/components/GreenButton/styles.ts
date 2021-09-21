import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { white, correct } = theme.colors;
const { text700 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 58,
    borderRadius: 16,
    alignSelf: "center",
    backgroundColor: correct,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: text700,
    color: white,
    fontSize: 20,
  },
});
