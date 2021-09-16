import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../../global/styles/theme";

import { MedicPagesProps } from "../../../screens/Medic";
import SimpleHeader from "../../SimpleHeader";
import { Calendar, LocaleConfig } from "react-native-calendars";

import convertDate from "../../../utils/convertDate";
import GreenButton from "../../GreenButton";

LocaleConfig.locales["pt"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Nov",
    "Dez",
  ],
  today: "Hoje",
  dayNames: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
};

LocaleConfig.defaultLocale = "pt";

const Appointment = ({ nextPage, previousPage, types }: MedicPagesProps) => {
  const { text700 } = theme.fonts;
  const { primary100 } = theme.colors;

  const today = new Date();
  const formattedToday = convertDate(today);

  const [day, setDay] = useState<string>(formattedToday);

  return (
    <View style={styles.container}>
      <SimpleHeader returnFunction={previousPage} title="Agendamento" />
      <ScrollView style={styles.scroll}>
        <View style={styles.content}>
          <Calendar
            style={styles.calendar}
            onDayPress={(day) => {
              setDay(day.dateString);
            }}
            current={day}
            minDate={formattedToday}
            enableSwipeMonths
            markedDates={{
              [day]: {
                activeOpacity: 0.5,
                dotColor: primary100,
                selectedColor: primary100,
                selected: true,
              },
            }}
            theme={{ textDayFontFamily: text700 }}
          />

          <View style={styles.times}>
            <RectButton style={styles.timesBox}>
              <Text style={styles.timesBoxText}>08:00</Text>
            </RectButton>
            <RectButton style={styles.timesBox}>
              <Text style={styles.timesBoxText}>08:30</Text>
            </RectButton>
            <RectButton style={styles.timesBox}>
              <Text style={styles.timesBoxText}>09:00</Text>
            </RectButton>
            <RectButton style={styles.timesBox}>
              <Text style={styles.timesBoxText}>09:30</Text>
            </RectButton>
            <RectButton style={styles.timesBox}>
              <Text style={styles.timesBoxText}>10:00</Text>
            </RectButton>
          </View>

          <View style={[styles.times]}>
            <RectButton style={styles.types}>
              <Text style={styles.timesBoxText}>Consulta simples</Text>
            </RectButton>
          </View>

          <RectButton onPress={nextPage} style={styles.button}>
            <GreenButton onPress={nextPage} title="Revisar" />
          </RectButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default Appointment;
