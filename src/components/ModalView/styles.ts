import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { overlay } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: overlay,
  },
});
