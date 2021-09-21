import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { overlay, dark, white } = theme.colors;
const { text700 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    width: 115,
    height: 94,
    backgroundColor: white,
    borderRadius: 8,
    marginLeft: 6,
    shadowColor: overlay,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1.53,
    shadowRadius: 13.97,

    elevation: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
  },
  label: {
    fontFamily: text700,
    color: dark,
    fontSize: 9,
    textAlign: "center",
  },
});
