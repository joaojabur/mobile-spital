import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { dark, white } = theme.colors;
const { text400 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    height: 95,
    backgroundColor: white,
    color: dark,
    borderRadius: 8,
    fontFamily: text400,
    fontSize: 14,
    marginRight: 4,
    textAlign: "left",
    paddingHorizontal: 16,
    paddingTop: 16,
    textAlignVertical: "top",
    shadowColor: dark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
