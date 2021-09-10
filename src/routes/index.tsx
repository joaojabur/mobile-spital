import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Background from "../components/Background";
import RootRoutes from "./auth.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <Background>
        <RootRoutes />
      </Background>
    </NavigationContainer>
  );
};

export default Routes;
