import React, { useEffect, useState } from "react";
import {
  View,
  Animated,
  Text,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";

import Background from "../../components/Background";
import ConsultsView from "../../components/ConsultsView";
import { useAuth } from "../../context/AuthProvider";
import { theme } from "../../global/styles/theme";
import api from "../../services/api";

import { styles } from "./styles";

export interface AppointmentsProps {
  area: string;
  birth_date: string;
  clientID: number;
  cpf: string;
  created_at: string;
  crm: string;
  date: string;
  doctorate_degree: string;
  graduation: string;
  id: number;
  master_degree: string;
  medicID: number;
  phoneNumber: string;
  price: string;
  rg: string;
  scheduleID: number;
  time: string;
  email: string;
  first_name: string;
  last_name: string;
  confirmed: boolean;
  rated: boolean;
  transactionID: string;
  url: string;
  type: string;
  address: string;
}

const Consults = () => {
  const [confirmed, setConfirmed] = useState<boolean>(true);
  const { userID } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);
  const { secondary100, white, dark, primary100 } = theme.colors;
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const [appointments, setAppointments] = useState<Array<AppointmentsProps>>(
    [] as Array<AppointmentsProps>
  );
  const [clientID, setClientID] = useState<number | null>(null);

  async function getClientID() {
    const response = await api.get(`clients?id=${userID}`);

    setClientID(response.data.id);
  }

  async function getAppointments() {
    const response = await api.get(`appointments/${clientID}?confirmed=${confirmed}`);

    setAppointments(response.data);
  }

  useEffect(() => {
    getClientID();
  }, []);

  useEffect(() => {
    setLoading(true);
    getAppointments().then(() => {
      setLoading(false);
    });
  }, [clientID, confirmed]);

  function handleConfirmedAppointments() {
    setConfirmed(true);
  }

  function handleUnconfirmedAppointments() {
    setConfirmed(false);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Background>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.header,
              {
                height: scrollY.interpolate({
                  inputRange: [0, 250],
                  outputRange: [250, 0],
                  extrapolate: "clamp",
                }),
                opacity: scrollY.interpolate({
                  inputRange: [0, 250],
                  outputRange: [1, 0],
                  extrapolate: "clamp",
                }),
              },
            ]}
          >
            <Text style={styles.title}>
              Aqui estão suas futuras e antigas consultas
            </Text>
          </Animated.View>

          <Animated.View
            style={[
              styles.statusBar,
              {
                marginTop: scrollY.interpolate({
                  inputRange: [0, 180],
                  outputRange: [-20, 40],
                  extrapolate: "clamp",
                }),
              },
            ]}
          >
            <RectButton
              onPress={handleConfirmedAppointments}
              style={[
                styles.statusBarButton,
                {
                  backgroundColor: confirmed ? secondary100 : white,
                  borderTopLeftRadius: 28,
                  borderBottomLeftRadius: 28,
                },
              ]}
            >
              <Text
                style={[
                  styles.statusBarButtonText,
                  { color: confirmed ? white : dark },
                ]}
              >
                Ativas
              </Text>
            </RectButton>
            <RectButton
              onPress={handleUnconfirmedAppointments}
              style={[
                styles.statusBarButton,
                {
                  backgroundColor: !confirmed ? secondary100 : white,
                  borderTopRightRadius: 28,
                  borderBottomRightRadius: 28,
                },
              ]}
            >
              <Text
                style={[
                  styles.statusBarButtonText,
                  { color: !confirmed ? white : dark },
                ]}
              >
                Finalizadas
              </Text>
            </RectButton>
          </Animated.View>

          {loading ? (
            <ActivityIndicator
              style={{ marginTop: 40 }}
              size={100}
              color={primary100}
            />
          ) : (
            <ConsultsView
              data={appointments}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: { y: scrollY },
                    },
                  },
                ],
                { useNativeDriver: false }
              )}
            />
          )}
        </View>
      </Background>
    </>
  );
};

export default Consults;
