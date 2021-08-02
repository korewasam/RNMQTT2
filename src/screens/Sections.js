import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {dimensions, theme} from '../constants';

import Icon from 'react-native-vector-icons/Ionicons';
import Section from '../components/Section';

const data = [
  {
    title: 'Upstairs',
  },
  {
    title: 'Bedroom',
  },
  {
    title: 'Section 10',
  },
  {
    title: 'Section 11',
  },
];

export default function Sections({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Sections</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddSection')}>
          <Icon size={theme.sizes.icon} color="white" name="add" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <View style={{width: dimensions.width - 40}}>
            <Section
              onPress={() =>
                navigation.navigate('SectionOpen', {title: item.title})
              }
              title={item.title}
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
