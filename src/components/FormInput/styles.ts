import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { darkGray, white, dark, primary100, error } = theme.colors;
const { text500, text600 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    height: 66,
    marginBottom: 20
  },
  label: {
    fontFamily: text500,
    color: darkGray,
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: "100%",
    fontFamily: text600,
    fontSize: 18,
    backgroundColor: white,
    color: dark,
    borderWidth: 1,
    borderColor: primary100,
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  error: {
    fontFamily: text600,
    color: error,
    fontSize: 16,
    marginTop: 2,
  },
});
