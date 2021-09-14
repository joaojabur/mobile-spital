import React from "react";
import { StatusBar, Text, View } from "react-native";

import Background from "../../components/Background";

import { styles } from "./styles";
import GoogleIconSvg from "../../assets/icons/google.svg";
import SpitalIconSvg from "../../assets/icons/spital.svg";

import DoctorsSvg from "../../assets/images/doctors.svg";
import LoginButton from "../../components/LoginButton";
import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

const Landing = () => {
  const { googleButton, primary100 } = theme.colors;

  const navigation = useNavigation();

  function handleGoogleButton() {
    console.log("Login with google!");
  }

  function handleGoRegister() {
    navigation.navigate("Register");
  }

  function handleSpitalButton() {
    navigation.navigate("Login");
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Background>
        <View style={styles.container}>
          <Text style={styles.logo}>Spital</Text>
          <DoctorsSvg width={345} height={255} style={styles.image} />
          <Text style={[styles.title, { marginBottom: 40 }]}>
            Como deseja continuar?
          </Text>
          <View style={styles.button}>
            <LoginButton
              onPress={handleGoogleButton}
              title="Entrar com o Google"
              Icon={GoogleIconSvg}
              bgColor={googleButton}
            />
          </View>

          <Text style={styles.title}>Ou</Text>

          <View style={styles.button}>
            <LoginButton
              onPress={handleSpitalButton}
              title="Entrar com a Spital"
              Icon={SpitalIconSvg}
              bgColor={primary100}
            />
          </View>

          <RectButton onPress={handleGoRegister} style={styles.registerButton}>
            <Text style={styles.registerText}>Registrar com Spital</Text>
          </RectButton>
        </View>
      </Background>
    </>
  );
};

export default Landing;
