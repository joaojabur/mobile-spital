import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../../screens/Search";
import { theme } from "../../global/styles/theme";

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
    </SearchStack.Navigator>
  );
};

export default SearchNavigation;
