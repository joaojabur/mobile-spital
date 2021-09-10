import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { text700, text400 } = theme.fonts;
const { dark, gray } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 42,
    paddingVertical: 36,
  },
  title: {
    fontFamily: text700,
    color: dark,
    fontSize: 26,
  },
  form: {
    width: "100%",
    flex: 1,
    marginTop: 30,
  },
  label: {
    fontFamily: text400,
    color: gray,
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 30,
  },
  hero: {
    alignSelf: "flex-end",
  },
});
