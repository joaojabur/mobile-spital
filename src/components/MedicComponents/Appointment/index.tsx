import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../../global/styles/theme";

import {
  AppointmentProps,
  MedicPagesProps,
  ScheduleProps,
  ConsultTypeProps,
} from "../../../screens/Medic";
import SimpleHeader from "../../SimpleHeader";
import { Calendar, LocaleConfig } from "react-native-calendars";

import GreenButton from "../../GreenButton";
import api from "../../../services/api";
import { useMedic } from "../../../context/MedicProvider";
import convertDate from "../../../utils/convertDate";

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

const Appointment = ({
  nextPage,
  previousPage,
  medic,
  day,
  setDay,
}: MedicPagesProps) => {
  const [error, setError] = useState<string | null>(null);

  const [consultTypes, setConsultTypes] = useState<Array<ConsultTypeProps>>(
    [] as Array<ConsultTypeProps>
  );

  const today = new Date();
  const formattedToday = convertDate(today);

  const { appointmentData, setAppointmentData } = useMedic();

  const [loading, setLoading] = useState<boolean>(false);

  const [appointments, setAppointments] = useState<Array<AppointmentProps>>(
    [] as Array<AppointmentProps>
  );
  const [scheduleWeekDay, setScheduleWeekDay] = useState<ScheduleProps>(
    {} as ScheduleProps
  );

  const { text700 } = theme.fonts;
  const { primary100, secondary100, secondary30 } = theme.colors;

  const formattedDay =
    appointmentData?.date?.day.toString().length < 2
      ? "0" + appointmentData?.date?.day
      : appointmentData?.date?.day;

  const completeDate = `${appointmentData?.date?.month}/${formattedDay}/${appointmentData?.date?.year}`;
  const datedCompleteDate = new Date(completeDate);

  const weekDay = datedCompleteDate.getDay();

  async function getAppointments() {
    const response = await api.get(
      `appointments?medicID=${medic?.id}&date=${completeDate}`
    );

    setAppointments(response.data);
  }

  async function getScheduleWeekDay() {
    const week_day_schedule = await api.get(
      `medic-schedule?medicID=${medic?.id}&week_day=${weekDay}`
    );

    setScheduleWeekDay(week_day_schedule.data[0]);
  }

  async function getConsultTypes() {
    const types = await api.get(`consult-type?medicID=${medic?.id}`);

    setConsultTypes(types.data);
  }

  useEffect(() => {
    getConsultTypes();
  }, []);

  useEffect(() => {
    setLoading(true);
    getAppointments();
    getScheduleWeekDay().then(() => {
      setLoading(false);
    });
  }, [appointmentData.date]);

  const dateFrom = Number(scheduleWeekDay?.from);
  const dateTo = Number(scheduleWeekDay?.to);

  const quantityOfItems = (dateTo - dateFrom) / 30;
  const quantityOfItemsArray = [];
  for (let i = 0; i < quantityOfItems; i++) {
    quantityOfItemsArray.push(i);
  }

  function verifyAppointmentData() {
    if (
      appointmentData?.time === undefined ||
      appointmentData?.type === undefined
    ) {
      setError("Consulta ou horário não selecionado(s)");
    } else {
      setError("");
      nextPage();
    }
  }

  return (
    <View style={styles.container}>
      <SimpleHeader returnFunction={previousPage} title="Agendamento" />
      <ScrollView style={styles.scroll}>
        <View style={styles.content}>
          <Calendar
            style={styles.calendar}
            onDayPress={(day) => {
              setDay(day.dateString);
              setAppointmentData({ ...appointmentData, date: day });
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
            {quantityOfItemsArray.length < 1 ? (
              <Text style={styles.sleeping}>
                Médico descansando neste dia 😴
              </Text>
            ) : (
              <>
                {loading ? (
                  <ActivityIndicator
                    style={{ alignSelf: "center" }}
                    size={50}
                    color={primary100}
                  />
                ) : (
                  quantityOfItemsArray.map((time) => {
                    const total = dateFrom + 30 * time;
                    const hour = total / 60;
                    const stringHour = hour.toString();
                    const [hours, minutes] = stringHour.split(".");
                    const completeMinutes = Number(minutes) * 6;

                    let isReserved = false;

                    for (let appointment of appointments) {
                      if (
                        appointment.time ==
                        `${hours}:${
                          isNaN(completeMinutes)
                            ? "00"
                            : completeMinutes.toString().substring(0, 2)
                        }`
                      ) {
                        isReserved = true;
                      }
                    }

                    if (isReserved) {
                      return (
                        <RectButton
                          key={time}
                          style={[
                            styles.timesBox,
                            { backgroundColor: secondary30 },
                          ]}
                        >
                          <Text style={styles.timesBoxText}>Reservado</Text>
                        </RectButton>
                      );
                    }

                    return (
                      <RectButton
                        onPress={() => {
                          setAppointmentData({
                            ...appointmentData,
                            time: `${hours}:${
                              isNaN(completeMinutes)
                                ? "00"
                                : completeMinutes.toString().substring(0, 2)
                            }`,
                          });
                        }}
                        key={time}
                        style={[
                          styles.timesBox,
                          {
                            backgroundColor:
                              appointmentData.time ===
                              `${hours}:${
                                isNaN(completeMinutes)
                                  ? "00"
                                  : completeMinutes.toString().substring(0, 2)
                              }`
                                ? primary100
                                : secondary100,
                          },
                        ]}
                      >
                        <Text style={styles.timesBoxText}>
                          {hours}:
                          {isNaN(completeMinutes)
                            ? "00"
                            : completeMinutes.toString().substring(0, 2)}
                        </Text>
                      </RectButton>
                    );
                  })
                )}
              </>
            )}
          </View>

          <View style={[styles.times]}>
            {consultTypes?.map((type, index) => {
              return (
                <RectButton
                  onPress={() => {
                    setAppointmentData({
                      ...appointmentData,
                      type: type.type,
                      price: type.price,
                    });
                  }}
                  key={index}
                  style={[
                    styles.types,
                    {
                      backgroundColor:
                        appointmentData.type === type.type
                          ? primary100
                          : secondary100,
                    },
                  ]}
                >
                  <Text style={styles.timesBoxText}>{type.type}</Text>
                  <Text style={styles.timesBoxText}>R$ {type.price}</Text>
                </RectButton>
              );
            })}
          </View>

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <RectButton onPress={verifyAppointmentData} style={styles.button}>
            <GreenButton onPress={verifyAppointmentData} title="Revisar" />
          </RectButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default Appointment;
