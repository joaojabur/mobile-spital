import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { dark, white, primary100, darkGray, correct } = theme.colors;
const { text700, text600 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 125,
    backgroundColor: white,
    marginTop: 16,
    borderRadius: 16,
    alignSelf: "center",
    shadowColor: dark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  profile: {
    flexDirection: "row",
    height: "70%",
    width: "100%",
    backgroundColor: white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 12,
  },
  profileInfo: {
    height: "100%",
    flexDirection: "row",
  },
  profileInfoImage: {
    alignItems: "center",
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  profileInfoData: {
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: -5,
  },
  name: {
    fontFamily: text700,
    fontSize: 18,
    color: dark,
  },
  area: {
    fontFamily: text600,
    fontSize: 12,
    color: darkGray,
  },
  profileConsult: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: -16,
  },
  status: {
    width: 70,
    height: 30,
    borderRadius: 16,
    backgroundColor: correct,
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    fontFamily: text700,
    color: white,
    fontSize: 16,
    textAlign: "center",
  },
  date: {
    flexDirection: "row",
    height: "30%",
    width: "100%",
    backgroundColor: primary100,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22
  },
  dateText: {
    fontFamily: text700,
    color: dark,
    fontSize: 18,
  },
});
