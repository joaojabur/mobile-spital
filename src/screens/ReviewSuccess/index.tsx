import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import ReviewSvg from "../../assets/images/review.svg";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Background from "../../components/Background";

const ReviewSuccess = () => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("Consults");
  }

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Consulta avaliada com sucesso!</Text>
        <ReviewSvg width="100%" height={300} />
        <Text style={styles.subtitle}>
          Sua avaliação nos ajuda muito a encontrar melhores médicos para você!
        </Text>
        <Button onPress={handleGoBack} title="Voltar" />
      </View>
    </Background>
  );
};

export default ReviewSuccess;
