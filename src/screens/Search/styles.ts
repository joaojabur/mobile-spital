import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { primary100, dark, white, gray } = theme.colors;
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
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: text700,
    fontSize: 30,
    color: dark,
  },
  modal: {
    width: "95%",
    height: "90%",
    backgroundColor: white,
    borderRadius: 8,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  modalInput: {
    width: "100%",
  },
  modalTitle: {
    fontFamily: text700,
    color: gray,
    fontSize: 20,
    textAlign: "left",
    marginBottom: 10,
  },
  modalButton: {
    width: "100%",
  },
});
