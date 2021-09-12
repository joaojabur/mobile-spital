import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";

interface GreenButtonProps extends RectButtonProps {
  title: string;
}

const GreenButton = ({ title, ...rest }: GreenButtonProps) => {
  return (
    <RectButton {...rest} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export default GreenButton;
