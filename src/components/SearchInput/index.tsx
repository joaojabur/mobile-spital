import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

interface SearchInputProps extends TextInputProps {
  reloadFunction?: () => void;
}

const SearchInput = ({ reloadFunction, ...rest }: SearchInputProps) => {
  const { secondary100, gray } = theme.colors;

  return (
    <View style={styles.container}>
      <RectButton onPress={reloadFunction} style={styles.button}>
        <Ionicons name="search-outline" size={34} color={secondary100} />
      </RectButton>
      <TextInput
        {...rest}
        style={styles.input}
        placeholder="Procurar..."
        placeholderTextColor={gray}
      />
    </View>
  );
};

export default SearchInput;
