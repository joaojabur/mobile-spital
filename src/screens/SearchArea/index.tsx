import React, { useEffect, useState } from "react";
import { Text, View, Animated, Slider, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Background from "../../components/Background";
import Doctors, { Medic } from "../../components/Doctors";
import SearchInput from "../../components/SearchInput";
import SimpleHeader from "../../components/SimpleHeader";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import ModalView from "../../components/ModalView";
import Button from "../../components/Button";
import api from "../../services/api";
import { useLocation } from "../../context/LocationProvider";

const SearchArea = ({ route }: any) => {
  const area = route.params.goTo;

  let capitalizeArea = area.charAt(0).toUpperCase() + area.slice(1);
  if (capitalizeArea === "Alergistas-e-imunologista") {
    capitalizeArea = "Alergista e Imunologista";
  }

  const { coordinates } = useLocation();
  const [page, setPage] = useState<number>(0);
  const [medicName, setMedicName] = useState<string>("");
  const [price, setPrice] = useState<number>(2000);
  const [distance, setDistance] = useState<number>(100);

  const [doctors, setDoctors] = useState<Array<Medic>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { white } = theme.colors;

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const { dark, primary100 } = theme.colors;

  async function loadMore() {
    setLoading(true);
    let name = medicName.replace(/[^0-9a-zA-Z:,]+/, "").toLowerCase();

    api
      .get(
        `medics/${capitalizeArea}?offset=${page}&lat=${coordinates.lat}&lon=${coordinates.lng}&distance=${distance}&price=${price}&name=${name}`
      )
      .then((response) => {
        setDoctors((previousState) => [...previousState, ...response.data]);
        setPage(page + 1);
        setLoading(false);
      });
  }

  async function reload() {
    let name = medicName.replace(/[^0-9a-zA-Z:,]+/, "").toLowerCase();
    api
      .get(
        `medics/${capitalizeArea}?offset=${page}&lat=${coordinates.lat}&lon=${coordinates.lng}&distance=${distance}&price=${price}&name=${name}`
      )
      .then((response) => {
        setDoctors(response.data);
        setPage(1);
        setLoading(false);
      });
  }

  useEffect(() => {
    loadMore();
  }, [medicName, price, distance]);

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
          <SearchInput
            reloadFunction={reload}
            value={medicName}
            onChangeText={(text: string) => setMedicName(text)}
          />
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
          loadMoreFunction={loadMore}
          loading={loading}
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
