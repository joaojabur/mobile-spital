import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { white, dark } = theme.colors;
const { text500 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 64,
    borderRadius: 8,
    backgroundColor: white,
    shadowColor: dark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  button: {
    marginLeft: 14,
    padding: 6,
    borderRadius: 17,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingLeft: 10,
    fontFamily: text500,
    fontSize: 20,
    color: dark,
  },
});
