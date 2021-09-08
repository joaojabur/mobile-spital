import React, { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {

  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default Background;
