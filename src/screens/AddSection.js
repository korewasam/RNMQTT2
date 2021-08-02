import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Device from '../components/Device';
import {dimensions, theme} from '../constants';

import Icon from 'react-native-vector-icons/Ionicons';
import DeviceSelectable from '../components/DeviceSelectable';
import AppTextInput from '../components/AppTextInput';

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

export default function AddSection({route, navigation}) {
  // On save Selection
  const onSave = () => {
    console.log('Saved');
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerBack}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={theme.sizes.icon} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>New Section</Text>
      </View>
      <View style={styles.sectionName}>
        <Text style={styles.subHeader}>Enter Section Name</Text>
        <AppTextInput placeholder="Section Name" />
      </View>
      <Text style={styles.subHeader}>Select Devices Below</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <View style={{width: dimensions.width - 40}}>
            <DeviceSelectable title={item.title} />
          </View>
        )}
      />
      <TouchableOpacity onPress={onSave} style={styles.saveBtn}>
        <Text style={styles.buttonLabel}>Create Section</Text>
      </TouchableOpacity>
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
  headerBack: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    width: '100%',
  },
  header: {
    marginBottom: 20,
    fontSize: theme.sizes.h1 * 1.2,
    fontFamily: 'Raleway-Bold',
    alignSelf: 'flex-start',
    color: 'white',
    textTransform: 'capitalize',
  },
  subHeader: {
    fontSize: theme.sizes.h2,
    fontFamily: 'Raleway-regular',
    alignSelf: 'flex-start',
    color: theme.colors.midgray,
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  sectionName: {
    width: '100%',
    marginBottom: 10,
  },
  headerContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saveBtn: {
    width: '100%',
    backgroundColor: theme.colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: theme.sizes.radius,
    marginTop: 20,
  },
  buttonLabel: {
    color: 'white',
  },
});
