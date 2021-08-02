import React from 'react';
import {View, Text} from 'react-native';
import Devices from '../screens/Devices';

import {createStackNavigator} from '@react-navigation/stack';
import AddDevice from '../screens/AddDevice';

const Stack = createStackNavigator();

export default function DeviceNavigator() {
  return (
    <Stack.Navigator initialRouteName="Devices">
      <Stack.Screen
        name="Devices"
        component={Devices}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddDevice"
        component={AddDevice}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
