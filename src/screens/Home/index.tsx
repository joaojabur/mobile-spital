import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, Animated } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import Avatar from "../../components/Avatar";
import Background from "../../components/Background";
import Categories from "../../components/Categories";
import Doctors, { Medic } from "../../components/Doctors";
import { useAuth } from "../../context/AuthProvider";
import api from "../../services/api";

import { styles } from "./styles";

const Home = () => {
  const { user } = useAuth();
  const [page, setPage] = useState<number>(0);
  const [doctors, setDoctors] = useState<Array<Medic>>([]);

  const navigation = useNavigation();

  function handleGoSearch() {
    navigation.navigate("Search");
  }

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  async function loadMore() {
    let { data } = await api.get(
      `medics?offset=${page}&lat=-21.233574&lon=-47.836621`
    );
    setDoctors(data);
  }

  useEffect(() => {
    loadMore();
  }, []);

  return (
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
              <Text style={styles.name}>{user?.firstName}!</Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.field,
            {
              marginTop: scrollY.interpolate({
                inputRange: [10, 140],
                outputRange: [30, 40],
              }),
            },
          ]}
        >
          <Text style={styles.title}>Categorias</Text>
          <RectButton onPress={handleGoSearch}>
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
          doctors={doctors}
        />
      </View>
    </Background>
  );
};

export default Home;
