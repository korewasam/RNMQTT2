import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Device from '../components/Device';
import {dimensions, theme} from '../constants';

import Icon from 'react-native-vector-icons/Ionicons';
import DeviceSelectable from '../components/DeviceSelectable';

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

export default function DeviceSelect({route, navigation}) {
  const {title} = route.params;
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
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.subHeader}>Select Devices</Text>
      </View>
      <TouchableOpacity onPress={onSave} style={styles.saveBtn}>
        <Text style={styles.buttonLabel}>Save Selection</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <View style={{width: dimensions.width - 40}}>
            <DeviceSelectable title={item.title} />
          </View>
        )}
      />
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
    marginBottom: 0,
    fontSize: theme.sizes.h1 * 1.2,
    fontFamily: 'Raleway-Bold',
    alignSelf: 'flex-start',
    color: 'white',
    textTransform: 'capitalize',
  },
  subHeader: {
    marginBottom: 20,
    fontSize: theme.sizes.h2,
    fontFamily: 'Raleway-regular',
    alignSelf: 'flex-start',
    color: theme.colors.midgray,
    textTransform: 'capitalize',
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
