import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "screens/Splash";
import SignIn from "screens/SignIn";
import SignUp from "screens/SignUp";
import { LoginRoutesNames } from "constants/routes";

const Stack = createNativeStackNavigator();

const LoginRoutes = () => {
  const { SPLASH, SIGNIN, SIGNUP } = LoginRoutesNames;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SPLASH}
        component={Splash}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen name={SIGNIN} component={SignIn} />
      <Stack.Screen name={SIGNUP} component={SignUp} />
    </Stack.Navigator>
  );
};

export default LoginRoutes;
