import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Consults from "../../screens/Consults";
import { theme } from "../../global/styles/theme";
import Consult from "../../screens/Consult";
import RefundSuccess from "../../screens/RefundSuccess";
import ReviewSuccess from "../../screens/ReviewSuccess";

const ConsultsStack = createStackNavigator();

const ConsultsNavigation = () => {
  const { secondary100 } = theme.colors;

  return (
    <ConsultsStack.Navigator
      headerMode="none"
      initialRouteName="Consults"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: secondary100,
          opacity: 1,
        },
      }}
    >
      <ConsultsStack.Screen name="Consults" component={Consults} />
      <ConsultsStack.Screen name="Consult" component={Consult} />
      <ConsultsStack.Screen name="RefundSuccess" component={RefundSuccess} />
      <ConsultsStack.Screen name="ReviewSuccess" component={ReviewSuccess} />
    </ConsultsStack.Navigator>
  );
};

export default ConsultsNavigation;
