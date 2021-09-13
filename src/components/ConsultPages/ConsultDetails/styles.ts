import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

const { dark, darkGray, secondary100, secondary30, primary100, white } =
  theme.colors;
const { text700, text500, text400 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  content: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  image: {
    width: 84,
    height: 84,
    borderRadius: 42,
  },
  medic: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    marginLeft: -45,
  },
  nameText: {
    fontFamily: text700,
    color: dark,
    fontSize: 24,
  },
  areaText: {
    fontFamily: text500,
    color: darkGray,
    fontSize: 16,
  },
  seeProfile: {
    padding: 5,
  },
  seeProfileText: {
    fontFamily: text700,
    color: secondary100,
    fontSize: 16,
  },
  paid: {
    marginTop: 30,
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: secondary30,
    borderRadius: 20,
    flexDirection: "row",
  },
  paidText: {
    fontFamily: text700,
    color: dark,
    fontSize: 18,
    paddingLeft: 10,
  },
  details: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  number: {
    marginTop: 30,
    fontFamily: text500,
    color: dark,
    fontSize: 20,
    textAlign: "left",
  },
  type: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  typeQuantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  TypeQuantityBall: {
    width: 48,
    height: 48,
    backgroundColor: primary100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  TypeQuantityBallText: {
    fontFamily: text700,
    color: dark,
    fontSize: 28,
    textAlign: "center",
  },
  typeConsult: {
    marginLeft: 10,
    fontFamily: text400,
    color: dark,
    fontSize: 18,
  },
  typePrice: {
    fontFamily: text700,
    color: dark,
    fontSize: 18,
  },
  payment: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paymentMethod: {
    fontFamily: text400,
    color: dark,
    fontSize: 18,
  },
  paymentCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  paymentCardImage: {
    width: 32,
    height: 32,
  },
  paymentCardLastNumbers: {
    fontFamily: text700,
    color: dark,
    fontSize: 14,
    marginLeft: 10,
  },
  address: {
    width: "100%",
  },
  addressTitle: {
    fontFamily: text400,
    color: dark,
    fontSize: 16,
  },
  addressStreet: {
    fontFamily: text700,
    color: dark,
    fontSize: 16,
    marginTop: 6,
  },
  assess: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 4,
    paddingVertical: 10,
    backgroundColor: white,
    shadowColor: dark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 3,
    borderRadius: 8,
  },
  assessTitle: {
    fontFamily: text700,
    color: dark,
    fontSize: 16,
    marginLeft: 6,
  },
  assessStars: {
    marginTop: 4,
    flexDirection: "row",
  },
  assessSubtitle: {
    marginTop: 4,
    fontFamily: text400,
    color: dark,
    fontSize: 16,
    marginLeft: 6,
  },
});
