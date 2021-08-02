import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Device from '../components/Device';
import {dimensions, theme} from '../constants';

import Icon from 'react-native-vector-icons/Ionicons';

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

export default function Devices({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Devices</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddDevice')}>
          <Icon size={theme.sizes.icon} color="white" name="add" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <View style={{width: dimensions.width - 40}}>
            <Device title={item.title} />
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
  header: {
    marginVertical: 20,
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
  },
});
