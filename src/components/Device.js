import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {theme} from '../constants';
import ToggleSwitch from 'toggle-switch-react-native';
import dimensions from '../constants/dimensions';

export default function Device({title}) {
  const [isOn, setisOn] = useState(false);

  //handle switch change
  const onSwitch = () => {
    setisOn(!isOn);
  };
  return (
    <TouchableOpacity
      onPress={() => onSwitch()}
      activeOpacity={0.9}
      style={[
        styles.container,
        {backgroundColor: !isOn ? '#121C44' : theme.colors.primary},
      ]}>
      <Text style={styles.title}>{title}</Text>
      <ToggleSwitch
        isOn={false}
        onColor={theme.colors.green}
        offColor="#283256"
        size="medium"
        onToggle={() => onSwitch()}
        isOn={isOn}
      />
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
});
