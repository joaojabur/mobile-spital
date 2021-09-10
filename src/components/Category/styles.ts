import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { overlay, gray, white } = theme.colors;
const { text400 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    width: 105,
    height: 88,
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
  },
  label: {
    fontFamily: text400,
    color: gray,
    fontSize: 9,
  },
});
