import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { primary100, dark, white } = theme.colors;
const { text700 } = theme.fonts;

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
  title: {
    fontFamily: text700,
    fontSize: 36,
    color: dark,
  },
  statusBar: {
    flexDirection: "row",
    width: "90%",
    height: 56,
    backgroundColor: white,
    shadowColor: dark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    borderRadius: 28,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  statusBarButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "80%",
    borderRadius: 50,
  },
  statusBarButtonText: {
    fontFamily: text700,
    fontSize: 20,
    textAlign: "center",
  },
});
