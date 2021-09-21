import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { white } = theme.colors;
const { text700 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  iconContainer: {
    width: 52,
    height: 52,
    backgroundColor: white,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 0,
  },
  title: {
    color: white,
    fontFamily: text700,
    fontSize: 14,
    textAlign: "center",
  },
});
