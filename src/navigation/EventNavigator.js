import React from 'react';
import {View, Text} from 'react-native';
import Events from '../screens/Events';

import {createStackNavigator} from '@react-navigation/stack';
import EventOpen from '../screens/EventOpen';
import AddEvent from '../screens/AddEvent';

const Stack = createStackNavigator();

export default function EventNavigator() {
  return (
    <Stack.Navigator initialRouteName="Events">
      <Stack.Screen
        name="Events"
        component={Events}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EventOpen"
        component={EventOpen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddEvent"
        component={AddEvent}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
