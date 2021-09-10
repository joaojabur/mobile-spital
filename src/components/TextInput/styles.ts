import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { dark, white, primary100 } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 66,
    color: dark,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: primary100,
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});
