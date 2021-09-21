import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

import FinishLineSvg from "../../assets/images/finish-line.svg";
import Button from "../../components/Button";
import Background from "../../components/Background";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const OrderSuccess = () => {
  const navigation = useNavigation();

  function handleGoConsults() {
    navigation.navigate("Consults");
  }

  return (
    <Background>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Pagamento concluído!</Text>
          <FinishLineSvg width="100%" height={300} />
          <Text style={styles.subtitle}>Coloque em sua agenda a consulta</Text>
          <View style={styles.date}>
            <Text style={styles.dateText}>19/09/2021</Text>
            <Text style={styles.dateText}>10:00</Text>
          </View>

          <RectButton onPress={handleGoConsults} style={styles.button}>
            <Button onPress={handleGoConsults} title="Voltar" />
          </RectButton>
        </View>
      </ScrollView>
    </Background>
  );
};

export default OrderSuccess;
