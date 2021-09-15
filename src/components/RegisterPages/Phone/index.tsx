import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useRegister } from "../../../context/RegisterProvider";
import { RegisterPageProps } from "../../../screens/Register";
import validateRegisterInfo from "../../../utils/validateRegisterInfo";
import Button from "../../Button";
import FormInput from "../../FormInput";
import { styles } from "./styles";
import mask from "../../../utils/mask";

const Phone = ({ nextPage }: RegisterPageProps) => {
  const { userData, setUserData } = useRegister();

  const [errors, setErrors] = useState(validateRegisterInfo(userData));

  useEffect(() => {
    setErrors(validateRegisterInfo(userData));
  }, [userData]);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>3. Seu número do celular</Text>
      <View style={styles.form}>
        <FormInput
          value={userData.phoneNumber}
          onChangeText={(text) =>
            setUserData({
              ...userData,
              phoneNumber: text,
            })
          }
          label="Telefone"
          placeholder="Digite seu número..."
          error={errors.phoneNumber}
          keyboardType="numeric"
          mask="cel-phone"
        />

        <View style={styles.button}>
          <Button onPress={nextPage} title="Próximo" />
        </View>
      </View>
    </View>
  );
};

export default Phone;
