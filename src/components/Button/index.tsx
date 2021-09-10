import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
}

const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <RectButton {...rest} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export default Button;
