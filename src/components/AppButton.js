import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {theme} from '../constants';

export default function AppButton({title, color, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.Button,
        {backgroundColor: color ? color : theme.colors.primary},
      ]}>
      <Text style={styles.buttonLabel}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  Button: {
    width: '100%',
    backgroundColor: theme.colors.primary,
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
