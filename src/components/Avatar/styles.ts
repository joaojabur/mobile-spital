import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { dark } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: dark,
  },
});
