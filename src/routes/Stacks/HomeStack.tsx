import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import { theme } from "../../global/styles/theme";

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
  const { secondary100 } = theme.colors;

  return (
    <HomeStack.Navigator
      headerMode="none"
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: secondary100,
          opacity: 1,
        },
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
