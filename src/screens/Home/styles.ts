import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { primary100, white, dark, secondary100, gray } = theme.colors;
const { text700, text500 } = theme.fonts;

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
  logo: {
    fontFamily: text700,
    color: white,
    fontSize: 40,
  },
  profile: {
    width: "100%",
    flexDirection: "row",
  },
  greeting: {
    flexDirection: "column",
    marginLeft: 20,
  },
  hello: {
    fontFamily: text700,
    color: dark,
    fontSize: 32,
  },
  name: {
    fontFamily: text500,
    color: secondary100,
    fontSize: 26,
    marginTop: -6,
    marginLeft: 12,
  },
  field: {
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  title: {
    fontFamily: text700,
    color: dark,
    fontSize: 20,
  },
  subtitle: {
    fontFamily: text500,
    color: gray,
    fontSize: 20,
  },
});
