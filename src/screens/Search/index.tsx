import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Animated,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  GooglePlacesAutocomplete,
  Point,
} from "react-native-google-places-autocomplete";

import Background from "../../components/Background";
import Button from "../../components/Button";
import ModalView from "../../components/ModalView";
import SearchCategories from "../../components/SearchCategories";
import SearchInput from "../../components/SearchInput";
import { useLocation } from "../../context/LocationProvider";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

const Search = () => {
  const navigation = useNavigation();

  const [inUseLocation, setInUseLocation] = useState<string | null>(null);
  const [inUseCoordinates, setInUseCoordinates] = useState<Point | undefined>(
    undefined
  );

  const { white, primary100 } = theme.colors;

  const [visible, setVisible] = useState<boolean>(false);
  const { location, setLocation, setCoordinates } = useLocation();

  const [category, setCategory] = useState<string>("");

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  useEffect(() => {
    if (location === null) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [handleSetLocation]);

  function handleSetLocation() {
    if (inUseLocation !== null || inUseCoordinates !== undefined) {
      setLocation(inUseLocation);
      setCoordinates(inUseCoordinates);
      navigation.navigate("Search");
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
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
            <Text style={styles.title}>
              Encontre os melhores médicos da sua região
            </Text>
          </Animated.View>

          <Animated.View
            style={{
              marginTop: scrollY.interpolate({
                inputRange: [0, 180],
                outputRange: [10, 40],
                extrapolate: "clamp",
              }),
              width: scrollY.interpolate({
                inputRange: [0, 180],
                outputRange: ["80%", "90%"],
                extrapolate: "clamp",
              }),
            }}
          >
            <SearchInput
              value={category}
              onChangeText={(text: string) => setCategory(text)}
            />
          </Animated.View>

          <SearchCategories
            search={category}
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
        <ModalView transparent animationType="slide" visible={visible}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Digite seu endereço</Text>
            <GooglePlacesAutocomplete
              placeholder="Onde você mora?"
              styles={{
                container: {
                  width: "100%",
                  height: 30,
                  backgroundColor: white,
                },
                textInput: {
                  fontSize: 18,
                  borderWidth: 1,
                  borderColor: primary100,
                  height: 70,
                  paddingLeft: 10,
                },
              }}
              onPress={(data, details = null) => {
                setInUseLocation(data?.description);
                setInUseCoordinates(details?.geometry?.location);
              }}
              fetchDetails={true}
              minLength={2}
              query={{
                key: "AIzaSyBwBMYDrJYpFEyAX8RFAahelYouDrstv3k",
                language: "pt-br",
              }}
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={200}
            />

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleSetLocation}
              style={styles.modalButton}
            >
              <Button onPress={handleSetLocation} title="Cadastrar endereço" />
            </TouchableOpacity>
          </View>
        </ModalView>
      </Background>
    </>
  );
};

export default Search;
