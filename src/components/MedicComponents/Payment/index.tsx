import React from "react";
import { ScrollView, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { MedicPagesProps } from "../../../screens/Medic";
import GreenButton from "../../GreenButton";
import Line from "../../Line";
import SimpleHeader from "../../SimpleHeader";
import { styles } from "./styles";

const Payment = ({ nextPage, previousPage }: MedicPagesProps) => {
  return (
    <View style={styles.container}>
      <SimpleHeader returnFunction={previousPage} title="Pagamento" />

      <ScrollView style={styles.scroll}>
        <View style={styles.content}>
          <Text style={styles.title}>Informações</Text>
          <Line />
          <Text style={styles.date}>Dia 30/12, 12:00 AM</Text>
          <Line />
          <Text style={styles.title}>Dr. Jason</Text>
          <Text style={styles.type}>Consulta Urologia Comum </Text>
          <Text style={styles.date}>R$ 150,00</Text>
          <Line />
          <View style={styles.flex}>
            <Text style={styles.title}>Total</Text>
            <Text style={styles.price}>R$ 150,00</Text>
          </View>
          <Line />

          <RectButton onPress={nextPage} style={styles.button}>
            <GreenButton onPress={nextPage} title="Pagamento" />
          </RectButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default Payment;
