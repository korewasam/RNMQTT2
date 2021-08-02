import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Device from '../components/Device';
import {dimensions, theme} from '../constants';

import Icon from 'react-native-vector-icons/Ionicons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import HeaderBack from '../components/HeaderBack';

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

export default function SectionOpen({route, navigation}) {
  // ON DELETE FUNCTION
  const onDelete = () => {
    console.log('deleting');
  };
  return (
    <View style={styles.container}>
      <HeaderBack navigation={navigation} />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Section Title</Text>
        <View style={styles.options}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DeviceSelect', {
                title: 'Section Title',
                type: 'Section',
              })
            }>
            <IconMat size={theme.sizes.icon * 0.8} color="white" name="edit" />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 10}} onPress={onDelete}>
            <Icon
              size={theme.sizes.icon * 0.8}
              color={theme.colors.red}
              name="trash-outline"
            />
          </TouchableOpacity>
        </View>
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
    marginTop: 0,
    fontSize: theme.sizes.h1 * 1.2,
    fontFamily: 'Raleway-Bold',
    alignSelf: 'flex-start',
    color: 'white',
  },
  options: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerBack: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    width: '100%',
  },
});
