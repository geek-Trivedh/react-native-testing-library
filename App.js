import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./src/screens/SignIn";
import Example from "./src/screens/Example";
import Main from "./src/screens/Main";
import { NameProvider } from "./src/utils/NameManager";

const Stack = createStackNavigator();

export default () => (
  <NameProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Main " }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "Sign In" }}
        />
        <Stack.Screen
          name="App"
          component={Example}
          options={{ title: "Success!" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </NameProvider>
);
