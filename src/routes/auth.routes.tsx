import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../global/styles/theme";
import Landing from "../screens/Landing";
import Login from "../screens/Login";

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {
  const { secondary100 } = theme.colors;

  return (
    <Navigator
      headerMode="none"
      initialRouteName="Signin"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: secondary100,
          opacity: 1,
        },
      }}
    >
      <Screen name="Landing" component={Landing} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

export default AuthRoutes;
