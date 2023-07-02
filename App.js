import React, { useState } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./screens/home";
import Memo from "./screens/memo";

import { Provider } from "react-redux";
import { store } from "./redux/store";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ title: 'My Tasks', headerBackButtonMenuEnabled: true }} >
            {(props) => <Home {...props} extraData={"someData"} />}
          </Stack.Screen>
          <Stack.Screen name="Memo" >
            {(props) => <Memo {...props} extraData={"someData"} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
