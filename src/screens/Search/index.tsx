import React, { useState } from "react";
import { Text, View, Animated, StatusBar } from "react-native";

import Background from "../../components/Background";
import SearchCategories from "../../components/SearchCategories";
import SearchInput from "../../components/SearchInput";

import { styles } from "./styles";

const Search = () => {
  const [category, setCategory] = useState<string>("");

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

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
      </Background>
    </>
  );
};

export default Search;
