import React from "react";
import { Text, View } from "react-native";
import { RegisterPageProps } from "../../../screens/Register";
import Button from "../../Button";
import FormInput from "../../FormInput";
import { styles } from "./styles";

const Credentials = ({ nextPage }: RegisterPageProps) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>2. Suas credenciais</Text>
      <View style={styles.form}>
        <FormInput label="E-mail" placeholder="Digite seu e-mail..." />
        <View style={{ marginTop: 40 }}>
          <FormInput label="Senha" placeholder="Digite sua senha..." />
        </View>
        <View style={{ marginTop: 40 }}>
          <FormInput
            label="Confirmar senha"
            placeholder="Digite sua confirmação de senha..."
          />
        </View>

        <View style={styles.button}>
          <Button onPress={nextPage} title="Próximo" />
        </View>
      </View>
    </View>
  );
};

export default Credentials;
