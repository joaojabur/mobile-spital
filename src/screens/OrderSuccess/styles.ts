import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { dark, primary100, darkGreen } = theme.colors;
const { text700, text500, text400 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  content: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: text500,
    color: darkGreen,
    fontSize: 28,
    alignItems: "center",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: text400,
    color: dark,
    fontSize: 18,
    alignItems: "center",
    textAlign: "center",
  },
  date: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: "center",
  },
  dateText: {
    fontFamily: text700,
    color: primary100,
    fontSize: 24,
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    width: "100%",
    marginTop: 20,
  },
});
