import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/styles/theme";

import Landing from "../screens/Landing";
import Login from "../screens/Login";
import BottomTabsNavigation from "./Stacks/BottomTabs";
import { useAuth } from "../context/AuthProvider";
import Register from "../screens/Register";

const RootStack = createStackNavigator();

const RootRoutes = () => {
  const { secondary100 } = theme.colors;
  const { authenticated } = useAuth();

  console.log("Authenticated", authenticated);

  return (
    <RootStack.Navigator
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
      {!authenticated ? (
        <>
          <RootStack.Screen name="Landing" component={Landing} />
          <RootStack.Screen name="Login" component={Login} />
          <RootStack.Screen name="Register" component={Register} />
        </>
      ) : (
        <>
          <RootStack.Screen name="Main" component={BottomTabsNavigation} />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default RootRoutes;
