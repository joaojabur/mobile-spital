import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

import { RegisterPageProps } from "../../../screens/Register";
import FormInput from "../../FormInput";
import Button from "../../Button";
import { useRegister } from "../../../context/RegisterProvider";
import validateRegisterInfo from "../../../utils/validateRegisterInfo";

const Name = ({ nextPage }: RegisterPageProps) => {
  const { userData, setUserData } = useRegister();
  const [errors, setErrors] = useState(validateRegisterInfo(userData));

  useEffect(() => {
    setErrors(validateRegisterInfo(userData));
  }, [userData]);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>1. Seu nome</Text>
      <View style={styles.form}>
        <FormInput
          value={userData.firstName}
          onChangeText={(text) => setUserData({ ...userData, firstName: text })}
          label="Nome"
          placeholder="Digite seu nome..."
          error={errors.firstName}
          keyboardType="default"
        />
        <View style={{ marginTop: 40 }}>
          <FormInput
            value={userData.lastName}
            onChangeText={(text) =>
              setUserData({ ...userData, lastName: text })
            }
            label="Sobrenome"
            placeholder="Digite seu sobrenome..."
            error={errors.lastName}
            keyboardType="default"
          />
        </View>

        <View style={styles.button}>
          <Button onPress={nextPage} title="Próximo" />
        </View>
      </View>
    </View>
  );
};

export default Name;
