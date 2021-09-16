import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  CheckBox,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useAuth } from "../../../context/AuthProvider";
import { useRegister } from "../../../context/RegisterProvider";
import { theme } from "../../../global/styles/theme";
import { RegisterPageProps } from "../../../screens/Register";
import validateRegisterInfo from "../../../utils/validateRegisterInfo";
import Accordion from "../../Accordion";
import Button from "../../Button";
import ModalView from "../../ModalView";
import { styles } from "./styles";

interface ReviewProps {
  nextPage: () => void;
  returnName: () => void;
  returnCredentials: () => void;
  returnPhone: () => void;
}

const Review = ({
  nextPage,
  returnName,
  returnCredentials,
  returnPhone,
}: ReviewProps) => {
  const navigation = useNavigation();
  const { primary100 } = theme.colors;

  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [backendError, setBackendError] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  const { userData } = useRegister();
  const { signUp } = useAuth();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [errors, setErrors] = useState(validateRegisterInfo(userData));

  useEffect(() => {
    setErrors(validateRegisterInfo(userData));
  }, [userData]);

  async function handleSubmitForm() {
    setLoading(true);
    const loopedErrors = Object.values(errors);

    if (!isChecked) {
      setBackendError("É necessário aceitar os termos de serviço");
      setLoading(false);
    } else if (loopedErrors.length > 0) {
      setHasError(true);
      setBackendError("");
      setLoading(false);
    } else {
      let response = await signUp({ ...userData, xp: 0 });

      if (response.status === 201) {
        setHasError(false);
        setBackendError("");
        setLoading(false);
        navigation.navigate("Success");
      } else {
        setHasError(false);
        setBackendError(response.data.message);
        setLoading(false);
      }
    }
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>4. Revise seus dados</Text>
      <ScrollView
        style={styles.accordions}
        showsVerticalScrollIndicator={false}
      >
        <Accordion
          title="Nome"
          items={[
            { label: "Nome", text: userData.firstName },
            { label: "Sobrenome", text: userData.lastName },
          ]}
          handleFunction={returnName}
        />
        <Accordion
          title="Credenciais"
          items={[
            { label: "E-mail", text: userData.email },
            { label: "Senha", text: userData.password },
          ]}
          handleFunction={returnCredentials}
        />
        <Accordion
          title="Telefone"
          items={[{ label: "Telefone", text: userData.phoneNumber }]}
          handleFunction={returnPhone}
        />

        <View style={styles.terms}>
          <CheckBox
            value={isChecked}
            onValueChange={setIsChecked}
            style={styles.checkbox}
          />

          <Text style={styles.termsText}>
            Concordo com os termos de uso e serviço
          </Text>
        </View>

        <View style={styles.button}>
          <Button onPress={handleSubmitForm} title="Cadastrar" />
        </View>

        {backendError.length > 0 && (
          <Text style={styles.error}>{backendError}</Text>
        )}

        {hasError && (
          <Text style={styles.error}>O formulário possui erros</Text>
        )}
      </ScrollView>

      <ModalView animationType="fade" visible={loading} transparent>
        <ActivityIndicator size={50} color={primary100} />
      </ModalView>
    </View>
  );
};

export default Review;
