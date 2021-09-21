import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { darkGreen, dark } = theme.colors;
const { text500, text600 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 100,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontFamily: text500,
    color: darkGreen,
    fontSize: 30,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: text600,
    color: dark,
    fontSize: 20,
    textAlign: "center",
  },
});
