import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import {theme} from '../constants';

export default function Settings() {
  const [ipAdress, setipAdress] = useState('44.11.0.77');
  const [port, setport] = useState('1883');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [status, setstatus] = useState(false);

  //Save button Function
  const onSave = () => {
    console.log('Saved');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.status}>
        <Text style={styles.statusLabel}>Status:</Text>
        <Text
          style={[
            styles.statusLabel,
            {color: status ? theme.colors.green : 'red'},
          ]}>
          {status ? 'Connected' : 'Disconnected'}
        </Text>
        <View
          style={[
            styles.indicator,
            {backgroundColor: status ? theme.colors.green : 'red'},
          ]}
        />
      </View>
      <View style={styles.settings}>
        <Text style={styles.label}>Ip Address</Text>
        <AppTextInput
          value={ipAdress}
          keyboardType="numeric"
          placeholder="Ip Address"
        />
        <Text style={styles.label}>Port</Text>
        <AppTextInput value={port} keyboardType="numeric" placeholder="Port" />
        <Text style={styles.label}>Username</Text>
        <AppTextInput value={username} placeholder="Username" />
        <Text style={styles.label}>Password</Text>
        <AppTextInput value={password} placeholder="Password" />

        <TouchableOpacity onPress={onSave} style={styles.saveBtn}>
          <Text style={styles.buttonLabel}>Save</Text>
        </TouchableOpacity>
      </View>
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
  settings: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    color: 'white',
    fontFamily: theme.fontFamily.regular,
  },

  status: {
    flexDirection: 'row',
    width: '100%',
    padding: 5,
    alignItems: 'center',
  },
  statusLabel: {
    color: 'white',
    fontFamily: theme.fontFamily.semibold,
    marginRight: 10,
  },
  indicator: {
    height: 4,
    width: 4,
    borderRadius: 4,
  },
  saveBtn: {
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
