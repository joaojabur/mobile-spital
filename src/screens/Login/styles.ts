import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { text700 } = theme.fonts;
const { dark } = theme.colors;

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
  form: {},
});
