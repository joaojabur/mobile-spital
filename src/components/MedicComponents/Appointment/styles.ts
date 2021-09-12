import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

const { white, secondary100 } = theme.colors;
const { text700 } = theme.fonts;

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
  timesBoxText: {
    fontFamily: text700,
    color: white,
    fontSize: 20,
  },
  types: {
    width: "100%",
    height: 50,
    backgroundColor: secondary100,
    alignSelf: "center",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "85%",
    marginTop: 30,
    paddingBottom: 100,
  },
});
