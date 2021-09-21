import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { text700, text400 } = theme.fonts;
const { dark, gray, red } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 36,
  },
  title: {
    fontFamily: text700,
    color: dark,
    fontSize: 20,
  },
  form: {
    width: "100%",
    flex: 1,
    marginTop: 20,
  },
  label: {
    fontFamily: text400,
    color: gray,
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
  },
  hero: {
    alignSelf: "flex-end",
  },
  error: {
    fontFamily: text700,
    color: red,
    fontSize: 18,
    marginTop: 22,
  },
});
