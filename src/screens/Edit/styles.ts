import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { secondary100, gray } = theme.colors;
const { text700, text500 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    marginTop: 15,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    padding: 20,
  },
  imageAvatar: {
    width: 103,
    height: 103,
    borderRadius: 51.5,
  },
  imageText: {
    fontFamily: text700,
    color: secondary100,
    fontSize: 14,
    marginTop: 6,
  },
  inputs: {
    flex: 1,
    width: "90%",
  },
  inputsLabel: {
    fontFamily: text500,
    color: gray,
    fontSize: 18,
    marginBottom: 5,
    paddingLeft: 5,
    marginTop: 10,
  },
});
