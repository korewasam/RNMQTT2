import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Device from '../components/Device';
import {dimensions, theme} from '../constants';

import Icon from 'react-native-vector-icons/Ionicons';
import HeaderBack from '../components/HeaderBack';
import AppTextInput from '../components/AppTextInput';
import AppLabel from '../components/AppLabel';
import AppButton from '../components/AppButton';

const data = [
  {
    title: 'kitchen',
  },
  {
    title: 'Bedroom',
  },
  {
    title: 'Room 10',
  },
  {
    title: 'Room 11',
  },
];

export default function AddDevice({navigation}) {
  const onCreateDevice = () => {
    console.log('creating device');
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderBack navigation={navigation} />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Add Device</Text>
      </View>
      <View style={styles.parameters}>
        <AppLabel title="Enter Device Name" />
        <AppTextInput placeholderTextColor={theme.colors.primary} />
        <AppLabel title="MQTT Topic Name" />
        <AppTextInput placeholderTextColor={theme.colors.primary} />
        <AppLabel title="Unit (e.g F, C, K etc)" />
        <AppTextInput placeholderTextColor={theme.colors.primary} />
        <AppLabel title="initial Value" />
        <AppTextInput placeholderTextColor={theme.colors.primary} />
        <AppButton
          title="Create Device"
          color={theme.colors.green}
          onPress={onCreateDevice}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.bg,
  },
  header: {
    fontSize: theme.sizes.h1 * 1.2,
    fontFamily: 'Raleway-Bold',
    alignSelf: 'flex-start',
    color: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  parameters: {
    width: '100%',
  },
});
