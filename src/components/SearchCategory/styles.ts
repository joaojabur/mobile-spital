import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { white, dark } = theme.colors;
const { text700 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    width: "49%",
    height: 120,
    backgroundColor: white,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    padding: 5,
  },
  label: {
    fontFamily: text700,
    color: dark,
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
});
