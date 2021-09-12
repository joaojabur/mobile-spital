import React from "react";
import { TextInput, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

const SearchInput = () => {
  const { secondary100, gray } = theme.colors;

  return (
    <View style={styles.container}>
      <RectButton style={styles.button}>
        <Ionicons name="search-outline" size={34} color={secondary100} />
      </RectButton>
      <TextInput
        style={styles.input}
        placeholder="Procurar..."
        placeholderTextColor={gray}
      />
    </View>
  );
};

export default SearchInput;
