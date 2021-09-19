import React from "react";
import { ScrollView, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useMedic } from "../../../context/MedicProvider";
import { MedicPagesProps } from "../../../screens/Medic";
import GreenButton from "../../GreenButton";
import Line from "../../Line";
import SimpleHeader from "../../SimpleHeader";
import { styles } from "./styles";

const Payment = ({ nextPage, previousPage, medic }: MedicPagesProps) => {
  const { appointmentData } = useMedic();

  const day =
    appointmentData?.date?.day.toString().length < 1
      ? "0" + appointmentData?.date?.day
      : appointmentData?.date?.day;

  const month =
    appointmentData?.date?.month.toString().length < 1
      ? "0" + appointmentData?.date?.month
      : appointmentData?.date?.month;

  const year = appointmentData?.date?.year;
  const time = appointmentData?.time;

  return (
    <View style={styles.container}>
      <SimpleHeader returnFunction={previousPage} title="Pagamento" />

      <ScrollView style={styles.scroll}>
        <View style={styles.content}>
          <Text style={styles.title}>Informações</Text>
          <Line />
          <Text style={styles.date}>
            Dia {day}/{month}/{year}, {time}
          </Text>
          <Line />
          <Text style={styles.title}>Dr(a). {medic?.firstName}</Text>
          <Text style={styles.type}>{appointmentData?.type}</Text>
          <Text style={styles.date}>R$ {appointmentData?.price},00</Text>
          <Line />
          <View style={styles.flex}>
            <Text style={styles.title}>Total</Text>
            <Text style={styles.price}>R$ {appointmentData?.price},00</Text>
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
