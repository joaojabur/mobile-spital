import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { dark } = theme.colors;
const { text700 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    width: "100%",
    marginBottom: 110,
  },
  content: {
    width: "90%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  empty: {
    fontFamily: text700,
    color: dark,
    fontSize: 22,
    textAlign: "center",
  },
});
