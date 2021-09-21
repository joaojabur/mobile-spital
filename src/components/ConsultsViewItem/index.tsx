import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AppointmentsProps } from "../../screens/Consults";
import { styles } from "./styles";

interface ConsultsViewItemProps {
  data: AppointmentsProps;
}

const ConsultsViewItem = ({ data }: ConsultsViewItemProps) => {
  const navigation = useNavigation();

  function handleGoConsult() {
    navigation.navigate("Main", {
      screen: "Consults",
      params: {
        screen: "Consult",
        params: {
          scheduleID: data.scheduleID,
        },
      },
    });
  }

  return (
    <TouchableOpacity
      onPress={handleGoConsult}
      activeOpacity={0.7}
      style={styles.container}
    >
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Image
            source={{
              uri: "https://s2.glbimg.com/FUcw2usZfSTL6yCCGj3L3v3SpJ8=/smart/e.glbimg.com/og/ed/f/original/2019/04/25/zuckerberg_podcast.jpg",
            }}
            style={styles.profileInfoImage}
          />

          <View style={styles.profileInfoData}>
            <Text style={styles.name}>Dr. {data.first_name}</Text>
            <Text style={styles.area}>{data.area}</Text>
          </View>
        </View>

        <View style={styles.profileConsult}>
          <View style={styles.status}>
            <Text style={styles.statusText}>
              {!data.confirmed ? "Ativa" : "Finalizada"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.date}>
        <Text style={styles.dateText}>{data.date}</Text>
        <Text style={styles.dateText}>{data.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ConsultsViewItem;
