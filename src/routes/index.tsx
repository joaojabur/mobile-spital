import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Background from "../components/Background";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <Background>
        <AuthRoutes />
      </Background>
    </NavigationContainer>
  );
};

export default Routes;
