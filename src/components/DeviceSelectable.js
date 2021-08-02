import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {theme} from '../constants';
import ToggleSwitch from 'toggle-switch-react-native';
import dimensions from '../constants/dimensions';

export default function DeviceSelectable({title}) {
  const [isSelected, setisSelected] = useState(false);

  //handle switch change
  const onSwitch = () => {
    setisSelected(!isSelected);
  };
  return (
    <TouchableOpacity
      onPress={() => onSwitch()}
      activeOpacity={0.9}
      style={[
        styles.container,
        {backgroundColor: !isSelected ? '#121C44' : theme.colors.primary},
      ]}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={[
          styles.indicator,
          {
            backgroundColor: isSelected
              ? theme.colors.green
              : theme.colors.midgray,
          },
        ]}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#121C44',
    color: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  indicator: {
    height: 15,
    width: 15,
    borderRadius: 8,
  },
});
