import React, { useState } from "react";
import { KeyboardAvoidingView, Text, View, Platform } from "react-native";

import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import Medic from "../../assets/images/medic.svg";

import Input from "../../components/TextInput";
import Background from "../../components/Background";
import SimpleHeader from "../../components/SimpleHeader";
import Button from "../../components/Button";
import ModalView from "../../components/ModalView";
import { useNavigation } from "@react-navigation/native";

interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate("Home");
  }

  const [credentials, setCredentials] = useState<LoginProps>({} as LoginProps);
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  const { secondary100 } = theme.colors;

  function handleOpenInfoModal() {
    setIsInfoOpen(true);
  }

  function handleCloseInfoModal() {
    setIsInfoOpen(false);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Background>
        <View style={styles.container}>
          <SimpleHeader
            action={handleOpenInfoModal}
            title="Entrar"
            component={
              <MaterialCommunityIcons
                onPress={handleOpenInfoModal}
                name="information"
                size={24}
                color={secondary100}
              />
            }
          />

          <View style={styles.content}>
            <Text style={styles.title}>Insira suas credenciais</Text>

            <View style={styles.form}>
              <Text style={styles.label}>E-mail</Text>
              <Input
                onChangeText={(text) =>
                  setCredentials({ ...credentials, email: text })
                }
                placeholder="Digite seu e-mail"
              />
              <Text style={styles.label}>Senha</Text>
              <Input
                onChangeText={(text) =>
                  setCredentials({ ...credentials, password: text })
                }
                placeholder="Digite sua senha"
              />

              <View  style={styles.buttonContainer}>
                <Button onPress={handleLogin} title="Logar" />
              </View>

              <Medic width="100%" height="80%" style={styles.hero} />
            </View>
          </View>
        </View>
      </Background>
      <ModalView
        visible={isInfoOpen}
        transparent
        animationType="slide"
        closeModal={handleCloseInfoModal}
      >
        <View></View>
      </ModalView>
    </KeyboardAvoidingView>
  );
};

export default Login;
