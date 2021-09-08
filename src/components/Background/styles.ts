import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { background } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: background,
  },
});
