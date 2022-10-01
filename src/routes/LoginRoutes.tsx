import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "screens/Splash";
import SignIn from "screens/SignIn";
import SignUp from "screens/SignUp";
import Home from "screens/Home";
import { LoginRoutesNames } from "constants/routes";

const Stack = createNativeStackNavigator();

const LoginRoutes = () => {
  const { SPLASH, SIGNIN, SIGNUP, HOME } = LoginRoutesNames;
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
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoginRoutes;
