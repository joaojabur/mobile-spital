import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

const Doctor = () => {
  const { star } = theme.colors;

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://s2.glbimg.com/FUcw2usZfSTL6yCCGj3L3v3SpJ8=/smart/e.glbimg.com/og/ed/f/original/2019/04/25/zuckerberg_podcast.jpg",
        }}
      />

      <View style={styles.personalInfo}>
        <View>
          <Text style={styles.name}>Dr. Jason</Text>
          <Text style={styles.area}>Cardiologista</Text>
        </View>

        <View style={styles.rating}>
          <Ionicons name="ios-star" size={14} color={star} />
          <Text style={styles.stars}>5.0</Text>
        </View>
      </View>

      <View style={styles.distance}>
        <Text style={styles.distanceText}>200 km</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Doctor;
