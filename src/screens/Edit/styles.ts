import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { secondary100, gray, dark, white, primary100, error, correct } =
  theme.colors;
const { text700, text500 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    marginTop: 15,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    padding: 20,
  },
  imageAvatar: {
    width: 80,
    height: 80,
    borderRadius: 51.5,
  },
  imageText: {
    fontFamily: text700,
    color: secondary100,
    fontSize: 12,
    textAlign: "center",
    marginTop: 6,
  },
  inputs: {
    marginTop: -20,
    flex: 1,
    width: "90%",
  },
  inputsLabel: {
    fontFamily: text500,
    color: gray,
    fontSize: 12,
    marginBottom: 5,
    paddingLeft: 5,
    marginTop: 10,
  },
  input: {
    width: "100%",
    height: 50,
    color: dark,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: primary100,
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 12,
  },
  button: {
    width: "100%",
    marginTop: 15,
  },
  error: {
    fontFamily: text700,
    color: error,
    fontSize: 14,
  },
  success: {
    marginTop: 10,
    fontFamily: text700,
    color: correct,
    fontSize: 20,
  },
});
