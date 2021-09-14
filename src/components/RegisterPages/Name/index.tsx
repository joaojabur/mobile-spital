import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

import { RegisterPageProps } from "../../../screens/Register";
import FormInput from "../../FormInput";
import Button from "../../Button";

const Name = ({ nextPage }: RegisterPageProps) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>1. Seu nome</Text>
      <View style={styles.form}>
        <FormInput label="Nome" placeholder="Digite seu nome..." />
        <View style={{ marginTop: 40 }}>
          <FormInput label="Sobrenome" placeholder="Digite seu sobrenome..." />
        </View>

        <View style={styles.button}>
          <Button onPress={nextPage} title="Próximo" />
        </View>
      </View>
    </View>
  );
};

export default Name;
