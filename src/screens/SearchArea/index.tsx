import React, { useState } from "react";
import { Text, View, Animated, Slider, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Background from "../../components/Background";
import Doctors from "../../components/Doctors";
import SearchInput from "../../components/SearchInput";
import SimpleHeader from "../../components/SimpleHeader";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import ModalView from "../../components/ModalView";
import Button from "../../components/Button";
import { RectButton } from "react-native-gesture-handler";

const SearchArea = ({ route }: any) => {
  const { white } = theme.colors;

  const [price, setPrice] = useState(2000);
  const [distance, setDistance] = useState(100);

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const { dark, primary100 } = theme.colors;

  const area = route.params.goTo;

  function handleOpenFilterModal() {
    setIsFilterOpen(true);
  }

  function handleCloseFilterModal() {
    setIsFilterOpen(false);
  }

  return (
    <Background>
      <View style={styles.container}>
        <SimpleHeader
          title={`${
            area.charAt(0).toUpperCase() + area.slice(1).replace("-", " ")
          }s`}
          component={<Feather name="filter" size={24} color={dark} />}
          action={handleOpenFilterModal}
        />

        <View style={styles.search}>
          <SearchInput />
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

      <ModalView visible={isFilterOpen} transparent animationType="slide">
        <View style={styles.filter}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleCloseFilterModal}
            style={styles.closeButton}
          >
            <AntDesign name="close" size={24} color={white} />
          </TouchableOpacity>
          <Text style={styles.filterTitle}>Filtros</Text>

          <View style={styles.filterForm}>
            <View style={styles.filterBox}>
              <Text style={styles.label}>
                Preço Máx: R$ {parseInt(price.toString())}
              </Text>

              <Slider
                style={styles.slider}
                minimumValue={100}
                maximumValue={2000}
                minimumTrackTintColor={primary100}
                maximumTrackTintColor={dark}
                onValueChange={(value) => {
                  setPrice(value);
                }}
                value={price}
              />
            </View>

            <View style={styles.filterBox}>
              <Text style={styles.label}>
                Distância Máx: {parseInt(distance.toString())} Km
              </Text>

              <Slider
                style={styles.slider}
                minimumValue={2}
                maximumValue={100}
                minimumTrackTintColor={primary100}
                maximumTrackTintColor={dark}
                onValueChange={(value) => {
                  setDistance(value);
                }}
                value={distance}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleCloseFilterModal}
              style={styles.filterButton}
            >
              <Button onPress={handleCloseFilterModal} title="Ver resultados" />
            </TouchableOpacity>
          </View>
        </View>
      </ModalView>
    </Background>
  );
};

export default SearchArea;
