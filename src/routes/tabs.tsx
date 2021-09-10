import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Consults from "../screens/Consults";

const { Navigator, Screen } = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Consults" component={Consults} />
      <Screen name="Search" component={Search} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default Tabs;
