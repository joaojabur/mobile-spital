import React from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";

const LoadMoreButton = () => {
  return (
    <RectButton style={styles.container}>
      <Text style={styles.title}>Carregar mais</Text>
    </RectButton>
  );
};

export default LoadMoreButton;
