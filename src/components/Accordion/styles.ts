import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { white, dark, overlay, darkGray, secondary100 } = theme.colors;
const { text600, text500, text700 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 55,
    backgroundColor: white,
    borderRadius: 8,
    borderTopColor: overlay,
    paddingHorizontal: 20,
    borderColor: darkGray,
    borderWidth: 0.6,
  },
  title: {
    fontFamily: text600,
    color: dark,
    fontSize: 18,
  },
  downButton: {
    borderRadius: 50,
  },
  content: {
    width: "100%",
    height: 130,
    backgroundColor: white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 0.1,
    borderColor: dark,
    position: "relative",
  },
  details: {
    width: "100%",
  },
  detailsFlex: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
  },
  detail: {
    fontFamily: text500,
    color: dark,
    fontSize: 16,
  },
  detailBold: {
    fontFamily: text700,
    color: dark,
    fontSize: 16,
    paddingRight: 10,
  },
  handleButton: {
    position: "absolute",
    bottom: 15,
    right: 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: white,
    borderColor: secondary100,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
