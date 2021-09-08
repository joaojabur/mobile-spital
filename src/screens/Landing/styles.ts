import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { text700 } = theme.fonts;
const { dark } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    fontFamily: text700,
    color: dark,
    fontSize: 24,
    marginVertical: 24,
  },
  button: {
    width: "80%",
  },
});
