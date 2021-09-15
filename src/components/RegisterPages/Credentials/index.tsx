import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useRegister } from "../../../context/RegisterProvider";
import { RegisterPageProps } from "../../../screens/Register";
import validateRegisterInfo from "../../../utils/validateRegisterInfo";
import Button from "../../Button";
import FormInput from "../../FormInput";
import { styles } from "./styles";

const Credentials = ({ nextPage }: RegisterPageProps) => {
  const { userData, setUserData } = useRegister();
  const [errors, setErrors] = useState(validateRegisterInfo(userData));

  useEffect(() => {
    setErrors(validateRegisterInfo(userData));
  }, [userData]);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>2. Suas credenciais</Text>
      <View style={styles.form}>
        <FormInput
          value={userData.email}
          onChangeText={(text) => setUserData({ ...userData, email: text })}
          label="E-mail"
          placeholder="Digite seu e-mail..."
          error={errors.email}
          keyboardType="email-address"
        />
        <View style={{ marginTop: 40 }}>
          <FormInput
            secureTextEntry={true}
            value={userData.password}
            onChangeText={(text) =>
              setUserData({ ...userData, password: text })
            }
            label="Senha"
            placeholder="Digite sua senha..."
            error={errors.password}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          <FormInput
            secureTextEntry={true}
            value={userData.confirmPassword}
            onChangeText={(text) =>
              setUserData({ ...userData, confirmPassword: text })
            }
            label="Confirmar senha"
            placeholder="Digite sua confirmação de senha..."
            error={errors.confirmPassword}
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
