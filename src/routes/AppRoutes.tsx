import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "screens/Splash";
import SignIn from "screens/SignIn";
import SignUp from "screens/SignUp";
import Recipe from "screens/Recipe";
// import Home from "screens/Home";
import Search from "screens/Search";
import { StackRoutes } from "constants/routes";

const Stack = createNativeStackNavigator();

const LoginRoutes = () => {
  const { SPLASH, SIGNIN, SIGNUP, HOME, SEARCH, RECIPE } = StackRoutes;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SPLASH}
        component={Splash}
        options={{ title: "Welcome", headerShown: false }}
      />
      <Stack.Screen
        name={SIGNIN}
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SIGNUP}
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={HOME}
        // component={Home}
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SEARCH}
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={RECIPE} component={Recipe} />
    </Stack.Navigator>
  );
};

export default LoginRoutes;
