import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { white, gray, dark, darkGray } = theme.colors;
const { text700, text600, text500 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 94,
    flexDirection: "row",
    backgroundColor: white,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    shadowColor: dark,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 1.5,
    marginTop: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  personalInfo: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginLeft: 12,
  },
  name: {
    fontFamily: text700,
    color: dark,
    fontSize: 14,
  },
  area: {
    fontFamily: text600,
    color: darkGray,
    fontSize: 12,
  },
  rating: {
    marginTop: 18,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  stars: {
    fontFamily: text700,
    marginLeft: 4,
    color: dark,
  },
  distance: {
    flex: 1,
    alignSelf: "flex-end",
    marginBottom: 6,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingRight: 20,
  },
  distanceText: {
    fontFamily: text500,
    color: darkGray,
    fontSize: 16,
  },
});
