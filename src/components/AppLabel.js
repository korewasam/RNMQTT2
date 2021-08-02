import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../constants';

export default function AppLabel({title}) {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    color: theme.colors.midgray,
    fontFamily: theme.fontFamily.regular,
    textTransform: 'capitalize',
  },
});
