import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { gray } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1,
    backgroundColor: gray,
    marginVertical: 10,
  },
});
