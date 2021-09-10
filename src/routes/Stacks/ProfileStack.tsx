import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../../screens/Profile";
import { theme } from "../../global/styles/theme";

const ProfileStack = createStackNavigator();

const ProfileNavigation = () => {
  const { secondary100 } = theme.colors;

  return (
    <ProfileStack.Navigator
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
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigation;
