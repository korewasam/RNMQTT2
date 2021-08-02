import React from 'react';
import {View, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Sections from '../screens/Sections';
import Settings from '../screens/Settings';
import {theme} from '../constants';

import Icon from 'react-native-vector-icons/Ionicons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import DeviceNavigator from './DeviceNavigator';
import EventNavigator from './EventNavigator';
import SectionsNavigator from './SectionsNavigator';
import TestScreen from '../screens/TestScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Devices"
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        showLabel: false,
        inactiveTintColor: theme.colors.black,
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Devices"
        component={TestScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconMat color={color} size={size} name="device-hub" />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventNavigator}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconMat color={color} size={size} name="timeline" />
          ),
        }}
      />
      <Tab.Screen
        name="Sections"
        component={SectionsNavigator}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon color={color} size={size} name="layers" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon color={color} size={size} name="ios-settings" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
