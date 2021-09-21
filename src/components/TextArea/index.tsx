import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

type TextAreaProps = TextInputProps;

const TextArea = ({ ...rest }: TextAreaProps) => {
  return <TextInput placeholder="Digite sua experiência... (opcional)" {...rest} style={styles.container} />;
};

export default TextArea;
