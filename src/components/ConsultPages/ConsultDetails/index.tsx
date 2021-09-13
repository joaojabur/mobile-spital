import React from "react";

import { styles } from "./styles";

import SimpleHeader from "../../SimpleHeader";
import { ConsultPagesProps } from "../../../screens/Consult";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import CheckedSvg from "../../../assets/icons/checked.svg";
import Line from "../../Line";
import card from "../../../assets/icons/card.png";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../../global/styles/theme";

const ConsultsList = ({ nextPage }: ConsultPagesProps) => {
  const stars = [1, 2, 3, 4, 5];
  const { gray } = theme.colors;

  return (
    <>
      <SimpleHeader title="Detalhes da consulta" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.medic}>
            <Image
              style={styles.image}
              source={{
                uri: "https://s2.glbimg.com/FUcw2usZfSTL6yCCGj3L3v3SpJ8=/smart/e.glbimg.com/og/ed/f/original/2019/04/25/zuckerberg_podcast.jpg",
              }}
            />

            <View style={styles.name}>
              <Text style={styles.nameText}>Dr. Jason</Text>
              <Text style={styles.areaText}>Cardiologista</Text>
            </View>

            <RectButton style={styles.seeProfile}>
              <Text style={styles.seeProfileText}>Ver perfil</Text>
            </RectButton>
          </View>

          <View style={styles.paid}>
            <CheckedSvg width={36} height={36} />
            <Text style={styles.paidText}>Consulta paga às 13:30</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.number}>Nº da consulta 5691</Text>

            <Line />

            <View style={styles.type}>
              <View style={styles.typeQuantity}>
                <View style={styles.TypeQuantityBall}>
                  <Text style={styles.TypeQuantityBallText}>1</Text>
                </View>
                <Text style={styles.typeConsult}>Consulta mensal</Text>
              </View>
              <Text style={styles.typePrice}>R$ 207,90</Text>
            </View>

            <Line />

            <View style={styles.payment}>
              <Text style={styles.paymentMethod}>Pago pelo app</Text>
              <View style={styles.paymentCard}>
                <Image source={card} style={styles.paymentCardImage} />
                <Text style={styles.paymentCardLastNumbers}>
                  Terminado em 6865
                </Text>
              </View>
            </View>

            <Line />

            <View style={styles.address}>
              <Text style={styles.addressTitle}>Endereço do profissional</Text>
              <Text style={styles.addressStreet}>
                Rua Capitão Waldemar De Figueiredo, 650 Casa 51 - Royal Park -
                Ribeirão Preto - SP
              </Text>
            </View>

            <Line />

            <TouchableOpacity
              onPress={nextPage}
              activeOpacity={0.7}
              style={styles.assess}
            >
              <Text style={styles.assessTitle}>Como foi sua consulta?</Text>
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
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ConsultsList;
