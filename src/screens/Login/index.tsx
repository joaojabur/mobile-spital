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

import { useAuth } from "../../context/AuthProvider";
import { useNavigation } from "@react-navigation/native";

interface LoginProps {
  email: string | null;
  password: string | null;
}

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const [isThereError, setIsThereError] = useState<boolean>(false);

  const { signIn } = useAuth();

  async function handleLogin() {
    if (credentials.email && credentials.password) {
      const { error } = await signIn(credentials.email, credentials.password);

      setIsThereError(false);
      setError(error);
    } else {
      setIsThereError(true);
    }
  }

  const [credentials, setCredentials] = useState<LoginProps>({} as LoginProps);

  const { secondary100 } = theme.colors;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Background>
        <View style={styles.container}>
          <SimpleHeader
            title="Entrar"
            component={
              <MaterialCommunityIcons
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

              <View style={styles.buttonContainer}>
                <Button onPress={handleLogin} title="Logar" />
              </View>

              {isThereError && (
                <Text style={styles.error}>Preencha os campos</Text>
              )}

              {error && <Text style={styles.error}>{error}</Text>}

              <Medic width="100%" height="80%" style={styles.hero} />
            </View>
          </View>
        </View>
      </Background>
    </KeyboardAvoidingView>
  );
};

export default Login;
