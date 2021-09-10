import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";

import { styles } from "./styles";

interface CategoryProps extends TouchableOpacityProps {
  Img: React.FC<SvgProps>;
  label: string;
  goTo: string;
}

const Category = ({ Img, label, goTo, ...rest }: CategoryProps) => {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Img width={40} height={40} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Category;
