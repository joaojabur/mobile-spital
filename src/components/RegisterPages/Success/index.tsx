import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const Success = () => {
  return <View style={styles.container}>
      <Text style={styles.success}>Sucesso!</Text>
  </View>;
};

export default Success;
