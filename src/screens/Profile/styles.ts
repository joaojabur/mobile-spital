import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

const { primary100, dark, white, gray } = theme.colors;
const { text700, text400 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: 150,
    borderBottomRightRadius: 110,
    backgroundColor: primary100,
    paddingTop: getStatusBarHeight(),
    paddingLeft: 30,
  },
  name: {
    fontFamily: text700,
    color: dark,
    fontSize: 24,
    marginLeft: 20,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "90%",
    height: 68,
    backgroundColor: white,
    shadowColor: dark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 2,
    marginTop: 20,
    borderRadius: 8,
    paddingHorizontal: 24,
  },
  boxText: {
    fontFamily: text700,
    color: primary100,
    fontSize: 16,
    textAlign: "center",
    marginLeft: 30,
  },
  level: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    width: "90%",
    height: 168,
    backgroundColor: white,
    shadowColor: dark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 2,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  levelTitle: {
    fontFamily: text700,
    color: dark,
    fontSize: 30,
  },
  levelBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  levelText: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  levelTextItem: {
    fontFamily: text400,
    color: dark,
    fontSize: 18,
  },
  levelBar: {
    width: "100%",
    height: 50,
    borderRadius: 30,
    backgroundColor: gray,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  levelBarExp: {
    height: "100%",
    backgroundColor: primary100,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  levelBarExpText: {
    fontFamily: text700,
    color: white,
    fontSize: 20,
  },
});
