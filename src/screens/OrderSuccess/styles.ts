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
    paddingTop: 30,
  },
  title: {
    fontFamily: text500,
    color: darkGreen,
    fontSize: 30,
    alignItems: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: text400,
    color: dark,
    fontSize: 20,
    alignItems: "center",
    marginTop: 20,
  },
  date: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  dateText: {
    fontFamily: text700,
    color: primary100,
    fontSize: 25,
    alignItems: "center",
  },
  button: {
    width: "100%",
    marginTop: 30,
  },
});
