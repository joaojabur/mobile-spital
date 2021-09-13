import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

import HomeNavigation from "./HomeStack";
import SearchNavigation from "./SearchStack";
import Consults from "../../screens/Consults";
import ProfileNavigation from "./ProfileStack";

import HomeTabBarIcon from "../BottomTabsComponents/HomeTabBarIcon";
import SearchTabBarIcon from "../BottomTabsComponents/SearchTabBarIcon";
import ConsultsTabBarIcon from "../BottomTabsComponents/ConsultsTabBarIcon";
import ProfileTabBarIcon from "../BottomTabsComponents/ProfileTabBarIcon";
import ConsultsNavigation from "./ConsultsStack";

const { white, dark, primary100 } = theme.colors;

const BottomTabsStack = createBottomTabNavigator();

const BottomTabsNavigation = () => {
  return (
    <BottomTabsStack.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          backgroundColor: white,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <BottomTabsStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeTabBarIcon
              color={focused ? white : primary100}
              iconSize={focused ? 35 : 30}
              background={focused ? primary100 : white}
            />
          ),
        }}
        name="Home"
        component={HomeNavigation}
      />
      <BottomTabsStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <SearchTabBarIcon
              color={focused ? white : primary100}
              iconSize={focused ? 35 : 30}
              background={focused ? primary100 : white}
            />
          ),
        }}
        name="Search"
        component={SearchNavigation}
      />
      <BottomTabsStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <ConsultsTabBarIcon
              color={focused ? white : primary100}
              iconSize={focused ? 35 : 30}
              background={focused ? primary100 : white}
            />
          ),
        }}
        name="Consults"
        component={ConsultsNavigation}
      />
      <BottomTabsStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <ProfileTabBarIcon
              color={focused ? white : primary100}
              iconSize={focused ? 35 : 30}
              background={focused ? primary100 : white}
            />
          ),
        }}
        name="Profile"
        component={ProfileNavigation}
      />
    </BottomTabsStack.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: dark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default BottomTabsNavigation;
