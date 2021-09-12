import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { secondary100 } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
