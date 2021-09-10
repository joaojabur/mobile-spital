import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {
  placeholder: string;
}

const Input = ({ placeholder, ...rest }: InputProps) => {
  return (
    <TextInput {...rest} placeholder={placeholder} style={styles.container} />
  );
};

export default Input;
