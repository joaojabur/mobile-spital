import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./HomeStack";
import SearchNavigation from "./SearchStack";
import Consults from "../../screens/Consults";
import ProfileNavigation from "./ProfileStack";

const BottomTabsStack = createBottomTabNavigator();

const BottomTabsNavigation = () => {
  return (
    <BottomTabsStack.Navigator>
      <BottomTabsStack.Screen name="Home" component={HomeNavigation} />
      <BottomTabsStack.Screen name="Search" component={SearchNavigation} />
      <BottomTabsStack.Screen name="Consults" component={Consults} />
      <BottomTabsStack.Screen name="Profile" component={ProfileNavigation} />
    </BottomTabsStack.Navigator>
  );
};

export default BottomTabsNavigation;
