import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { primary100, dark } = theme.colors;
const { text700 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
    height: 251,
    backgroundColor: primary100,
    borderBottomRightRadius: 120,
    justifyContent: "space-evenly",
    paddingHorizontal: 30,
  },
  title: {
    fontFamily: text700,
    fontSize: 36,
    color: dark,
  },
});
