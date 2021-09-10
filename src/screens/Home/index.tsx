import React, { useState } from "react";
import { Text, View, Animated } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import Avatar from "../../components/Avatar";
import Background from "../../components/Background";
import Categories from "../../components/Categories";
import Doctors from "../../components/Doctors";

import { styles } from "./styles";

const Home = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (
    <Background>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.header,
            {
              height: scrollY.interpolate({
                inputRange: [10, 160, 185, 200],
                outputRange: [180, 40, 20, 0],
                extrapolate: "clamp",
              }),
              opacity: scrollY.interpolate({
                inputRange: [1, 75, 170],
                outputRange: [1, 1, 0],
                extrapolate: "clamp",
              }),
            },
          ]}
        >
          <Text style={styles.logo}>Spital</Text>
          <View style={styles.profile}>
            <Avatar
              uri="https://hsmuniversity.com.br/wp-content/uploads/2019/04/jeff_bezos-150x150.jpg"
              source={{
                uri: "https://hsmuniversity.com.br/wp-content/uploads/2019/04/jeff_bezos-150x150.jpg",
              }}
            />

            <View style={styles.greeting}>
              <Text style={styles.hello}>Olá</Text>
              <Text style={styles.name}>Daniela!</Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.field,
            {
              marginTop: scrollY.interpolate({
                inputRange: [10, 160],
                outputRange: [30, 40],
              }),
            },
          ]}
        >
          <Text style={styles.title}>Categorias</Text>
          <RectButton>
            <Text style={styles.subtitle}>Ver mais</Text>
          </RectButton>
        </Animated.View>
        <Categories />

        <View style={styles.field}>
          <Text style={styles.title}>Profissionais</Text>
          <RectButton></RectButton>
        </View>
        <Doctors
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
      </View>
    </Background>
  );
};

export default Home;
