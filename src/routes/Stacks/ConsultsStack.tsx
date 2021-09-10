import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Consults from "../../screens/Consults";
import { theme } from "../../global/styles/theme";

const ConsultsStack = createStackNavigator();

const ConsultsNavigation = () => {
  const { secondary100 } = theme.colors;

  return (
    <ConsultsStack.Navigator
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
      <ConsultsStack.Screen name="Consults" component={Consults} />
    </ConsultsStack.Navigator>
  );
};

export default ConsultsNavigation;
