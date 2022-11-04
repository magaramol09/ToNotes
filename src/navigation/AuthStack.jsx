import React from "react";
import { OnboardingScreen, LogIn, Home } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from "./AppStack";
const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="login" component={LogIn} />
        <Stack.Screen name="appstack" component={AppStack} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
