import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const { primary30, white, dark } = theme.colors;
const { text700 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: getStatusBarHeight() + 70,
    backgroundColor: primary30,
    borderBottomRightRadius: 50,
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: getStatusBarHeight(),
  },
  returnContainer: {
    width: 50,
    height: 50,
    backgroundColor: white,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: text700,
    fontSize: 28,
    color: dark,
    textAlign: "center",
  },
  componentContainer: {
    width: 40,
    height: 40,
    backgroundColor: white,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
