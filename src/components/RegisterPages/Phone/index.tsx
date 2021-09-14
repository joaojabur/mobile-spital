import React from "react";
import { Text, View } from "react-native";
import { RegisterPageProps } from "../../../screens/Register";
import Button from "../../Button";
import FormInput from "../../FormInput";
import { styles } from "./styles";

const Phone = ({ nextPage }: RegisterPageProps) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>3. Seu número do celular</Text>
      <View style={styles.form}>
        <FormInput label="Telefone" placeholder="Digite seu número..." />

        <View style={styles.button}>
          <Button onPress={nextPage} title="Próximo" />
        </View>
      </View>
    </View>
  );
};

export default Phone;
