import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { CategoryProps } from "../../utils/categories";
import { styles } from "./styles";

const SearchCategory = ({ Img, label, goTo }: CategoryProps) => {
  const navigation = useNavigation();

  function handleGoSearchArea() {
    navigation.navigate("SearchArea", { label: label, goTo: goTo });
  }

  return (
    <TouchableOpacity
      onPress={handleGoSearchArea}
      activeOpacity={0.7}
      style={styles.container}
    >
      <Img width={50} height={50} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SearchCategory;
