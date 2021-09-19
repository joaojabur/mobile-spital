import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";
import { Medic } from "../Doctors";

interface DoctorProps {
  data: Medic;
}

const Doctor = ({ data }: DoctorProps) => {
  const navigation = useNavigation();

  function handleGoMedicProfile() {
    navigation.navigate("Main", {
      screen: "Search",
      params: {
        screen: "Medic",
        params: {
          id: data.userID,
          medicID: data.id,
        },
      },
    });
  }

  const { star } = theme.colors;

  const formattedDistance = Number(data?.distance?.toFixed(1));
  const formattedRating =
    data?.rating?.length === 1 ? data?.rating + ".0" : data?.rating;

  return (
    <TouchableOpacity
      onPress={handleGoMedicProfile}
      activeOpacity={0.7}
      style={styles.container}
    >
      <Image
        style={styles.avatar}
        source={{
          uri: "https://www.smartei.com.br/blog/wp-content/uploads/2020/10/F52361.jpg",
        }}
      />

      <View style={styles.personalInfo}>
        <View>
          <Text style={styles.name}>Dr. {data.firstName}</Text>
          <Text style={styles.area}>{data.area}</Text>
        </View>

        <View style={styles.rating}>
          <Ionicons name="ios-star" size={14} color={star} />
          <Text style={styles.stars}>{formattedRating}</Text>
        </View>
      </View>

      <View style={styles.distance}>
        <Text style={styles.distanceText}>{formattedDistance} km</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Doctor;
