import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {theme} from '../constants';
import ToggleSwitch from 'toggle-switch-react-native';
import dimensions from '../constants/dimensions';

export default function Section({title, onPress}) {
  const [isOn, setisOn] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[
        styles.container,
        {backgroundColor: !isOn ? '#121C44' : theme.colors.primary},
      ]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#121C44',
    color: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 40,
    marginTop: 15,
    borderRadius: theme.sizes.radius,
    elevation: 1,
  },
  title: {
    fontFamily: theme.fontFamily.semibold,
    color: 'white',
  },
});
