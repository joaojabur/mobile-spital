import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const ConsultsViewItem = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Image
            source={{
              uri: "https://s2.glbimg.com/FUcw2usZfSTL6yCCGj3L3v3SpJ8=/smart/e.glbimg.com/og/ed/f/original/2019/04/25/zuckerberg_podcast.jpg",
            }}
            style={styles.profileInfoImage}
          />

          <View style={styles.profileInfoData}>
            <Text style={styles.name}>Dr. Jason</Text>
            <Text style={styles.area}>Cardiologista</Text>
          </View>
        </View>

        <View style={styles.profileConsult}>
          <View style={styles.status}>
            <Text style={styles.statusText}>Ativo</Text>
          </View>
        </View>
      </View>
      <View style={styles.date}>
        <Text style={styles.dateText}>03/05/2021</Text>
        <Text style={styles.dateText}>14:00</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ConsultsViewItem;
