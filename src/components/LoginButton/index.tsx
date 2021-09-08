import React from "react";
import { Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { styles } from "./styles";

interface LoginButtonProps extends RectButtonProps {
  title: string;
  Icon: React.FC<SvgProps>;
  bgColor: string;
}

const LoginButton = ({ title, Icon, bgColor, ...rest }: LoginButtonProps) => {
  return (
    <RectButton
      {...rest}
      style={[styles.container, { backgroundColor: bgColor }]}
    >
      <View style={styles.iconContainer}>
        <Icon width={40} height={40} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export default LoginButton;
