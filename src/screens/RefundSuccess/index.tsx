import React from "react";
import { Text, View } from "react-native";
import Background from "../../components/Background";
import { styles } from "./styles";
import WalletSvg from "../../assets/images/wallet.svg";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const RefundSuccess = () => {
  const navigation = useNavigation();

  function handleBackPlatform() {
    navigation.navigate("Consults");
  }

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Reembolso concluído!</Text>
        <WalletSvg width="100%" height={300} />
        <Text style={styles.subtitle}>
          A consulta foi cancelada e o dinheiro retornou para sua carteira...
        </Text>
        <Button onPress={handleBackPlatform} title="Voltar" />
      </View>
    </Background>
  );
};

export default RefundSuccess;
