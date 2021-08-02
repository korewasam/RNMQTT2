import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {theme} from '../constants';
import ToggleSwitch from 'toggle-switch-react-native';
import dimensions from '../constants/dimensions';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Device({title, onPress}) {
  const [isOn, setisOn] = useState(false);

  //handle switch change
  const onSwitch = () => {
    setisOn(!isOn);
  };
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: !isOn ? '#121C44' : theme.colors.primary},
      ]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.optionsContainer}>
        <ToggleSwitch
          isOn={false}
          onColor={theme.colors.green}
          offColor="#283256"
          size="medium"
          onToggle={() => onSwitch()}
          isOn={isOn}
        />
        <TouchableOpacity onPress={onPress} style={styles.options}>
          <Icon
            name="ios-options"
            size={theme.sizes.icon * 0.8}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
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
    marginTop: 15,
    borderRadius: theme.sizes.radius,
    elevation: 1,
    paddingLeft: 40,
  },
  title: {
    fontFamily: theme.fontFamily.semibold,
    color: 'white',
  },
  options: {
    backgroundColor: '#1E2F64',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.sizes.icon * 2,
    borderRadius: theme.sizes.radius,
    marginLeft: 15,
  },
  optionsContainer: {
    flexDirection: 'row',
    height: '100%',
  },
});
