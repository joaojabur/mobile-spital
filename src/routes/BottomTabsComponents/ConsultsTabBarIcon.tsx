import React from "react";
import { RectButton } from "react-native-gesture-handler";

import TabBarProps from "../../interfaces/TabBarProps";

import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";

const ConsultsTabBarIcon = ({ color, iconSize, background }: TabBarProps) => {
  return (
    <RectButton style={[styles.container, { backgroundColor: background }]}>
      <AntDesign
        name="calendar"
        size={iconSize}
        color={color}
        style={{ backgroundColor: background }}
      />
    </RectButton>
  );
};

export default ConsultsTabBarIcon;
