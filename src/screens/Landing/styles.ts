import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { text700 } = theme.fonts;
const { dark, primary100 } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  logo: {
    fontFamily: text700,
    color: primary100,
    fontSize: 50,
    marginBottom: 30,
  },
  image: {
    alignSelf: "center",
    marginBottom: 0,
  },
  title: {
    fontFamily: text700,
    color: dark,
    fontSize: 20,
    marginVertical: 12,
    textAlign: "center",
  },
  button: {
    width: "80%",
  },
  registerButton: {
    marginTop: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    fontFamily: text700,
    color: primary100,
    fontSize: 16,
  },
});
