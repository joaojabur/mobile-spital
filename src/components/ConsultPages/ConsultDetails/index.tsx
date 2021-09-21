import React, { useState } from "react";

import { styles } from "./styles";

import SimpleHeader from "../../SimpleHeader";
import { ConsultPagesProps } from "../../../screens/Consult";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import CheckedSvg from "../../../assets/icons/checked.svg";
import DoneSvg from "../../../assets/icons/done.png";
import Line from "../../Line";
import card from "../../../assets/icons/card.png";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../../global/styles/theme";
import ModalView from "../../ModalView";
import api from "../../../services/api";
import { useNavigation } from "@react-navigation/native";

const ConsultsList = ({
  setLoading,
  loading,
  data,
  nextPage,
}: ConsultPagesProps) => {
  const navigation = useNavigation();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const stars = [1, 2, 3, 4, 5];
  const { gray, error, lightGray, white, primary100 } = theme.colors;
  let t, hour, minute;

  if (data.created_at !== undefined) {
    t = data?.created_at?.split(/[-  T:.]/);
    hour = Number(t[3]);
    minute = Number(t[4]);
  }

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  async function handleCancelAppointment() {
    setLoading(true);

    api.delete(`appointments/${data?.transactionID}`).then((response) => {
      if (response.data.success) {
        navigation.navigate("RefundSuccess");
        setLoading(false);
      }
    });
  }

  return (
    <>
      <SimpleHeader title="Detalhes da consulta" />
      {loading ? (
        <ActivityIndicator size={100} color={primary100} />
      ) : (
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <View style={styles.medic}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://s2.glbimg.com/FUcw2usZfSTL6yCCGj3L3v3SpJ8=/smart/e.glbimg.com/og/ed/f/original/2019/04/25/zuckerberg_podcast.jpg",
                }}
              />

              <View style={styles.name}>
                <Text style={styles.nameText}>Dr. {data.first_name}</Text>
                <Text style={styles.areaText}>{data.area}</Text>
              </View>

              <RectButton style={styles.seeProfile}>
                <Text style={styles.seeProfileText}>Ver perfil</Text>
              </RectButton>
            </View>

            <View style={styles.paid}>
              <CheckedSvg width={36} height={36} />
              <Text style={styles.paidText}>
                Consulta paga às {hour}:{minute}
              </Text>
            </View>

            <View style={styles.details}>
              <Text style={styles.number}>
                Nº da consulta {data?.transactionID}
              </Text>

              <Line />

              <View style={styles.type}>
                <View style={styles.typeQuantity}>
                  <View style={styles.TypeQuantityBall}>
                    <Text style={styles.TypeQuantityBallText}>1</Text>
                  </View>
                  <Text style={styles.typeConsult}>{data?.type}</Text>
                </View>
                <Text style={styles.typePrice}>R$ {data?.price},00</Text>
              </View>

              <Line />

              <View style={styles.payment}>
                <Text style={styles.paymentMethod}>Pago pelo app</Text>
                <View style={styles.paymentCard}>
                  <Image source={card} style={styles.paymentCardImage} />
                </View>
              </View>

              <Line />

              <View style={styles.address}>
                <Text style={styles.addressTitle}>
                  Endereço do profissional
                </Text>
                <Text style={styles.addressStreet}>{data?.address}</Text>
              </View>

              <Line />

              {data?.confirmed ? (
                <>
                  {data?.rated ? (
                    <View style={styles.done}>
                      <Image source={DoneSvg} style={styles.doneImg} />
                      <Text style={styles.doneText}>
                        Avaliação já realizada!
                      </Text>
                    </View>
                  ) : (
                    <TouchableOpacity
                      onPress={nextPage}
                      activeOpacity={0.7}
                      style={styles.assess}
                    >
                      <Text style={styles.assessTitle}>
                        Como foi sua consulta?
                      </Text>
                      <View style={styles.assessStars}>
                        {stars.map((star: number) => {
                          return (
                            <AntDesign
                              name="star"
                              size={20}
                              color={gray}
                              key={star}
                              style={{ marginLeft: 6 }}
                            />
                          );
                        })}
                      </View>
                      <Text style={styles.assessSubtitle}>
                        Clique aqui para avaliar
                      </Text>
                    </TouchableOpacity>
                  )}
                </>
              ) : (
                <TouchableOpacity
                  onPress={handleOpenModal}
                  style={styles.cancelButton}
                >
                  <Text style={styles.cancel}>Cancelar consulta</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ScrollView>
      )}

      <ModalView visible={isOpen}>
        <View style={styles.sure}>
          <AntDesign name="closecircleo" size={100} color={error} />
          <Text style={styles.sureTitle}>Você tem certeza?</Text>
          <Text style={styles.sureSubtitle}>
            Você tem certeza que deseja cancelar sua consulta?
          </Text>
          <View style={styles.sureButtons}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleCloseModal}
              style={[styles.sureButtonsWrap, { backgroundColor: lightGray }]}
            >
              <Text style={styles.sureButtonsWrapText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleCancelAppointment}
              activeOpacity={0.7}
              style={[styles.sureButtonsWrap, { backgroundColor: error }]}
            >
              <Text style={[styles.sureButtonsWrapText, { color: white }]}>
                Confirmar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalView>
    </>
  );
};

export default ConsultsList;
