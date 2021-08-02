import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HeaderBack({navigation}) {
  return (
    <View style={styles.headerBack}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={theme.sizes.icon} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBack: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    width: '100%',
  },
});
