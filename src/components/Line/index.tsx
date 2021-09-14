import React from "react";
import { View, ViewProps } from "react-native";
import { styles } from "./styles";

type LineProps = ViewProps;

const Line = ({ ...rest }: LineProps) => {
  return <View {...rest} style={styles.container} />;
};

export default Line;
