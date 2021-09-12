import React, { useState } from "react";
import { Image, ScrollView, Text, View, Animated } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { theme } from "../../../global/styles/theme";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { MedicPagesProps } from "../../../screens/Medic";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import GreenButton from "../../GreenButton";
import Stars from "../../Stars";

const Info = ({ nextPage }: MedicPagesProps) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const navigation = useNavigation();

  const { dark } = theme.colors;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Animated.View style={styles.header}>
        <View style={styles.headerButtons}>
          <RectButton onPress={handleGoBack} style={styles.headerButton}>
            <Entypo name="chevron-left" size={34} color={dark} />
          </RectButton>
          <RectButton style={styles.headerButton}>
            <FontAwesome name="bookmark-o" size={24} color={dark} />
          </RectButton>
        </View>

        <View style={styles.medicInfo}>
          <Image
            style={styles.medicInfoAvatar}
            source={{
              uri: "https://blog.portalpos.com.br/app/uploads/2019/07/steve-jobs.png",
            }}
          />

          <View style={styles.medicInfoText}>
            <Text style={styles.medicInfoTextName}>Dr. Jason</Text>
            <Text style={styles.medicInfoTextArea}>Cardiologista</Text>
          </View>
        </View>
      </Animated.View>

      <RectButton
        onPress={nextPage}
        style={[styles.button, { marginTop: -25 }]}
      >
        <GreenButton onPress={nextPage} title="Agendar consulta" />
      </RectButton>

      <ScrollView
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
        showsVerticalScrollIndicator={false}
        style={styles.info}
      >
        <View style={styles.infoToday}>
          <Text style={styles.infoTodayText}>
            Horário de trabalho hoje:{" "}
            <Text style={styles.infoTodayTextBold}>8:00 AM - 4:30 PM</Text>
          </Text>
        </View>

        <View style={styles.address}>
          <Text style={styles.addressTitle}>Endereço:</Text>

          <View style={styles.addressText}>
            <Feather name="map-pin" size={20} color={dark} />
            <Text style={styles.addressTextLabel}>
              Rua Capitão Waldemar de Figueiredo 650
            </Text>
          </View>

          <View style={styles.addressDistance}>
            <View style={styles.addressDistanceFlex}>
              <MaterialCommunityIcons
                name="map-marker-distance"
                size={20}
                color={dark}
              />
              <Text style={styles.addressTextLabel}>10 km</Text>
            </View>

            <RectButton style={{ padding: 5 }}>
              <Text style={styles.seeMap}>Ver no mapa</Text>
            </RectButton>
          </View>
        </View>

        <RectButton style={styles.reviews}>
          <View style={styles.reviewsStars}>
            <Stars rating={4} />
            <Text style={styles.reviewsStarText}>4.0</Text>
          </View>
          <View style={styles.reviewsText}>
            <Text style={styles.reviewsTextLabel}>Ver avaliações</Text>
          </View>
        </RectButton>

        <View style={styles.academy}>
          <Text style={styles.academyTitle}>Sobre Dr. Jason</Text>

          <View style={styles.academyContent}>
            <Text style={styles.academyText}>
              <Text style={styles.academyTextBold}>Graduação: </Text>
              Universidade de São Paulo
            </Text>

            <Text style={styles.academyText}>
              <Text style={styles.academyTextBold}>Pós-graduação: </Text>
              Ortopedia - Universidade de Campinas
            </Text>

            <Text style={styles.academyText}>
              <Text style={styles.academyTextBold}>Especialização: </Text>
              Cirurgia geral (2010) - Cirurgia plástica (2013)
            </Text>

            <Text style={styles.academyText}>
              <Text style={styles.academyTextBold}>Mestrado: </Text>
              Faculdade de medicina de São Paulo
            </Text>

            <Text style={styles.academyText}>
              <Text style={styles.academyTextBold}>Doutorado: </Text>
              Faculdade Federal do Ceará
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Info;
