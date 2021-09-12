import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../../screens/Search";
import { theme } from "../../global/styles/theme";
import SearchArea from "../../screens/SearchArea";
import Medic from "../../screens/Medic";

const SearchStack = createStackNavigator();

const SearchNavigation = () => {
  const { secondary100 } = theme.colors;

  return (
    <SearchStack.Navigator
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
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="SearchArea" component={SearchArea} />
      <SearchStack.Screen
        name="Medic"
        component={Medic}
      />
    </SearchStack.Navigator>
  );
};

export default SearchNavigation;
