import React, { useState } from "react";
import { View, Animated, Text, StatusBar } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import Background from "../../components/Background";
import ConsultsView from "../../components/ConsultsView";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

const Consults = () => {
  const { secondary100, white, dark } = theme.colors;
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
              Aqui estão suas futuras e antigas consultas
            </Text>
          </Animated.View>

          <Animated.View
            style={[
              styles.statusBar,
              {
                marginTop: scrollY.interpolate({
                  inputRange: [0, 180],
                  outputRange: [-20, 40],
                  extrapolate: "clamp",
                }),
              },
            ]}
          >
            <RectButton
              style={[
                styles.statusBarButton,
                {
                  backgroundColor: secondary100,
                  borderTopLeftRadius: 28,
                  borderBottomLeftRadius: 28,
                },
              ]}
            >
              <Text style={[styles.statusBarButtonText, { color: white }]}>
                Ativas
              </Text>
            </RectButton>
            <RectButton
              style={[
                styles.statusBarButton,
                {
                  backgroundColor: "#FFF",
                  borderTopRightRadius: 28,
                  borderBottomRightRadius: 28,
                },
              ]}
            >
              <Text style={[styles.statusBarButtonText, { color: dark }]}>
                Realizadas
              </Text>
            </RectButton>
          </Animated.View>

          <ConsultsView
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

export default Consults;
