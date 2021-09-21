import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  Animated,
  ActivityIndicator,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { theme } from "../../../global/styles/theme";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { MedicPagesProps } from "../../../screens/Medic";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import GreenButton from "../../GreenButton";
import Stars from "../../Stars";

const Info = ({ nextPage, medic, workday, loading }: MedicPagesProps) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const navigation = useNavigation();

  const { dark, primary100 } = theme.colors;

  function handleGoBack() {
    navigation.goBack();
  }

  const formattedRating =
    medic?.rating?.length === 1 ? medic?.rating + ".0" : medic?.rating;

  let formattedFrom,
    formattedTo,
    hourFrom,
    minuteFrom,
    hourTo,
    minuteTo,
    endMinuteFrom,
    endMinuteTo;

  if (workday !== undefined) {
    formattedFrom = Number(workday.from) / 60;
    formattedTo = Number(workday.to) / 60;

    hourFrom = formattedFrom.toString().split(".")[0];
    minuteFrom = formattedFrom.toString().split(".")[1];

    hourTo = formattedTo.toString().split(".")[0];
    minuteTo = formattedTo.toString().split(".")[1];

    endMinuteFrom = minuteFrom ? Number(minuteFrom) * 6 : "00";
    endMinuteTo = minuteTo ? Number(minuteTo) * 6 : "00";
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
          {loading ? (
            <ActivityIndicator size={50} color={primary100} />
          ) : (
            <Image
              style={styles.medicInfoAvatar}
              source={{
                uri: "https://www.smartei.com.br/blog/wp-content/uploads/2020/10/F52361.jpg",
              }}
            />
          )}

          <View style={styles.medicInfoText}>
            {loading ? (
              <ActivityIndicator size={50} color={primary100} />
            ) : (
              <>
                <Text style={styles.medicInfoTextName}>
                  Dr(a). {medic?.firstName}
                </Text>
                <Text style={styles.medicInfoTextArea}>{medic?.area}</Text>
              </>
            )}
          </View>
        </View>
      </Animated.View>

      <RectButton
        onPress={nextPage}
        style={[styles.button, { marginTop: -25 }]}
      >
        <GreenButton onPress={nextPage} title="Agendar consulta" />
      </RectButton>

      {loading ? (
        <ActivityIndicator size={100} color={primary100} />
      ) : (
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
            <Text style={styles.infoTodayText}>Horário de trabalho hoje: </Text>
            <Text style={styles.infoTodayTextBold}>
              {workday === undefined
                ? "Descansando 😴"
                : `${hourFrom}:${endMinuteFrom} - ${hourTo}:${endMinuteTo}`}
            </Text>
          </View>

          <View style={styles.address}>
            <Text style={styles.addressTitle}>Endereço:</Text>

            <View style={styles.addressText}>
              <Feather name="map-pin" size={20} color={dark} />
              <Text style={styles.addressTextLabel}>
                {medic?.location?.address.substring(0, 80)} -{" "}
                {medic?.location?.number}
              </Text>
            </View>

            <RectButton>
              <Text style={styles.seeMap}>Ver no mapa</Text>
            </RectButton>
          </View>

          <RectButton style={styles.reviews}>
            <View style={styles.reviewsStars}>
              <Stars rating={4} />
              <Text style={styles.reviewsStarText}>{formattedRating}</Text>
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
                {medic?.graduation}
              </Text>

              {medic?.master_degree ? (
                <Text style={styles.academyText}>
                  <Text style={styles.academyTextBold}>Mestrado: </Text>
                  {medic.master_degree}
                </Text>
              ) : null}

              {medic?.doctorate_degree ? (
                <Text style={styles.academyText}>
                  <Text style={styles.academyTextBold}>Doutorado: </Text>
                  Faculdade Federal do Ceará
                </Text>
              ) : null}
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Info;
