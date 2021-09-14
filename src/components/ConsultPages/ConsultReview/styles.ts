import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

const { text700, text500 } = theme.fonts;
const { dark, darkGray } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  content: {
    width: "100%",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  title: {
    fontFamily: text700,
    color: dark,
    fontSize: 22,
    textAlign: "left",
  },
  stars: {
    marginLeft: -14,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontFamily: text500,
    color: darkGray,
    fontSize: 16,
    marginTop: 8,
  },
  line: {
    width: "100%",
    marginVertical: 15,
  },
  textTitle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textTitleText: {
    fontFamily: text700,
    color: dark,
    fontSize: 14,
    marginLeft: -14,
  },
  maxCaracteres: {
    fontFamily: text500,
    color: darkGray,
    fontSize: 14,
  },
  button: {
    width: "100%",
    marginTop: 30,
  },
});
