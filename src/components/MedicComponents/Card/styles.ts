import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

const { dark, gray, white, primary100, error } = theme.colors;
const { text700, text500 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 30,
    alignSelf: "flex-start",
  },
  title: {
    fontFamily: text700,
    color: dark,
    fontSize: 24,
  },
  form: {
    marginTop: 10,
    width: "100%",
    flex: 1,
  },
  formWrap: {
    width: "100%",
  },
  inputsLabel: {
    fontFamily: text500,
    color: gray,
    fontSize: 18,
    marginBottom: 5,
    paddingLeft: 5,
    marginTop: 10,
  },
  half: {
    width: "48%",
  },
  button: {
    width: "100%",
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 66,
    color: dark,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: primary100,
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  error: {
    fontFamily: text700,
    color: error,
    fontSize: 16,
    marginTop: 10,
  },
});
