import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { text700 } = theme.fonts;
const { dark, primary100 } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontFamily: text700,
    color: primary100,
    fontSize: 60,
    marginBottom: 50
  },
  image: {
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    fontFamily: text700,
    color: dark,
    fontSize: 24,
    marginVertical: 12,
  },
  button: {
    width: "80%",
  },
});
