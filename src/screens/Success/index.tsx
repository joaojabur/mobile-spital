import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

import Background from "../../components/Background";
import InboxSvg from "../../assets/images/inbox.svg";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Success = () => {
  const navigation = useNavigation();

  function handleGoLanding() {
    navigation.navigate("Landing");
  }

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro realizado com sucesso!</Text>
        <InboxSvg width="100%" height={300} />
        <Text style={styles.description}>
          Precisamos agora que você confirme seu e-mail para realizar-mos o
          login.
        </Text>
        <Text style={styles.help}>
          Leia vosso e-mail e clique em confirmar e-mail
        </Text>

        <RectButton onPress={handleGoLanding} style={styles.button}>
          <Text style={styles.buttonTitle}>Continuar</Text>
        </RectButton>
      </View>
    </Background>
  );
};

export default Success;
