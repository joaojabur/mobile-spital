import React from "react";
import { RectButton } from "react-native-gesture-handler";

import TabBarProps from "../../interfaces/TabBarProps";

import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const SearchTabBarIcon = ({ color, iconSize, background }: TabBarProps) => {
  return (
    <RectButton style={[styles.container, { backgroundColor: background }]}>
      <Ionicons
        name="search-outline"
        size={iconSize}
        color={color}
        style={{ backgroundColor: background }}
      />
    </RectButton>
  );
};

export default SearchTabBarIcon;
