import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../constants';

export default function Day({title}) {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <TouchableOpacity
      onPress={() => setIsActive(!isActive)}
      style={[
        styles.container,
        {
          backgroundColor: isActive
            ? theme.colors.primary
            : theme.colors.cardInactive,
        },
      ]}>
      <Text style={styles.label}>{title}</Text>
      <View
        style={[
          styles.indicator,
          {backgroundColor: isActive ? theme.colors.green : 'red'},
        ]}></View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: theme.sizes.radius * 0.5,
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 12,
    marginHorizontal: 5,
    justifyContent: 'space-between',
  },
  indicator: {
    height: 4,
    width: 4,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  label: {
    color: 'white',
  },
});
