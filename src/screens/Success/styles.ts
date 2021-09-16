import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { dark, correct, white } = theme.colors;
const { text700, text400, text600 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 35,
  },
  title: {
    fontFamily: text700,
    color: correct,
    fontSize: 30,
    textAlign: "center",
  },
  description: {
    fontFamily: text600,
    color: dark,
    fontSize: 18,
    textAlign: "center",
  },
  help: {
    fontFamily: text400,
    color: dark,
    fontSize: 16,
    textAlign: "center",
    marginTop: -40,
  },
  button: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: correct,
    borderRadius: 16,
  },
  buttonTitle: {
    fontFamily: text700,
    color: white,
    fontSize: 24,
    textAlign: "center",
  },
});
