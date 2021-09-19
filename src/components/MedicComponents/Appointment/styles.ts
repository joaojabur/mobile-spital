import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

const { white, secondary100, dark, secondary30, error } = theme.colors;
const { text700, text500 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  scroll: {
    flex: 1,
    width: "100%",
  },
  content: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  calendar: {
    width: 350,
    marginTop: 20,
    borderRadius: 16,
    alignSelf: "center",
  },
  times: {
    marginTop: 30,
    width: "85%",
    padding: 20,
    backgroundColor: white,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignSelf: "center",
  },
  timesBox: {
    marginBottom: 20,
    width: "48%",
    height: 50,
    borderRadius: 16,
    backgroundColor: secondary100,
    alignItems: "center",
    justifyContent: "center",
  },
  timesBoxReserved: {
    marginBottom: 20,
    width: "48%",
    height: 50,
    borderRadius: 16,
    backgroundColor: secondary30,
    alignItems: "center",
    justifyContent: "center",
  },
  timesBoxText: {
    fontFamily: text700,
    color: white,
    fontSize: 16,
  },
  types: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    backgroundColor: secondary100,
    alignSelf: "center",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  button: {
    width: "85%",
    marginTop: 30,
    paddingBottom: 100,
  },
  sleeping: {
    fontFamily: text500,
    color: dark,
    textAlign: "center",
    fontSize: 16,
    alignSelf: "center",
  },
  error: {
    marginTop: 10,
    fontFamily: text700,
    color: error,
    fontSize: 16,
    paddingHorizontal: 10,
    textAlign: "left",
  },
});
