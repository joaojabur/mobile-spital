import React from "react";
import { StatusBar } from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import Background from "./src/components/Background";
import Routes from "./src/routes";
import AuthProvider from "./src/context/AuthProvider";
import LocationProvider from "./src/context/LocationProvider";

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AppLoading />
      </>
    );
  }

  return (
    <AuthProvider>
      <LocationProvider>
        <Background>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <Routes />
        </Background>
      </LocationProvider>
    </AuthProvider>
  );
}
