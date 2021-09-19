import React from "react";
import { Text, View, TextInputProps, TextInput } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

import { TextInputMask } from "react-native-masked-text";

interface FormInputProps extends TextInputProps {
  label: string;
  error: string;
  mask?: string;
}

const FormInput = ({ label, error, mask, ...rest }: FormInputProps) => {
  const { gray } = theme.colors;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {mask ? (
        <TextInputMask
          type={"cel-phone"}
          {...rest}
          style={styles.input}
          placeholderTextColor={gray}
        />
      ) : (
        <TextInput {...rest} style={styles.input} placeholderTextColor={gray} />
      )}

      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default FormInput;
