import React from 'react';
import {View, Text} from 'react-native';
import Sections from '../screens/Sections';

import {createStackNavigator} from '@react-navigation/stack';
import SectionOpen from '../screens/SectionOpen';
import DeviceSelectable from '../components/DeviceSelectable';
import DeviceSelect from '../screens/DeviceSelect';
import AddSection from '../screens/AddSection';

const Stack = createStackNavigator();

export default function SectionsNavigator() {
  return (
    <Stack.Navigator initialRouteName="Sections">
      <Stack.Screen
        name="Sections"
        component={Sections}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SectionOpen"
        component={SectionOpen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DeviceSelect"
        component={DeviceSelect}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddSection"
        component={AddSection}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
