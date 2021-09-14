import React from "react";
import { Text, View, TextInputProps, TextInput } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface FormInputProps extends TextInputProps {
  label: string;
}

const FormInput = ({ label, ...rest }: FormInputProps) => {
  const { gray } = theme.colors;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...rest} style={styles.input} placeholderTextColor={gray} />
    </View>
  );
};

export default FormInput;
