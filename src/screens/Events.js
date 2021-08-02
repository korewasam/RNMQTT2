import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Event from '../components/Event';
import {dimensions, theme} from '../constants';

import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    title: 'Evening',
  },
  {
    title: 'Movie',
  },
  {
    title: 'Event 10',
  },
  {
    title: 'Event 11',
  },
];

export default function Events({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Events</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddEvent')}>
          <Icon size={theme.sizes.icon} color="white" name="add" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <View style={{width: dimensions.width - 40}}>
            <Event
              title={item.title}
              onPress={() => navigation.navigate('EventOpen')}
            />
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
    backgroundColor: '#05103A',
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
