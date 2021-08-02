import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import MQTTConnection from './src/MQTTConnection';
import {Buffer} from 'buffer';
global.Buffer = Buffer;
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import init from 'react_native_mqtt';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

import AppButton from './src/components/AppButton';

var mqtt = require('@taoqf/react-native-mqtt');
var client = mqtt.connect('ws://test.mosquitto.org', 1883);

export default function App() {
  const [connected, setconnected] = useState(false);

  // useEffect(() => {
  //   init({
  //     size: 10000,
  //     storageBackend: AsyncStorage,
  //     defaultExpires: 1000 * 3600 * 24,
  //     enableCache: true,
  //     reconnect: true,
  //     sync: {},
  //   });

  //   function onFailure(err) {
  //     console.log('onfaulire', err);
  //     setconnected(false);
  //   }
  //   function onConnect() {
  //     console.log('onConnect');
  //     setconnected(true);
  //   }

  //   function onConnectionLost(responseObject) {
  //     if (responseObject.errorCode !== 0) {
  //       console.log('onConnectionLost:' + responseObject.errorMessage);
  //     }
  //     setTimeout(() => {
  //       client.connect({
  //         onSuccess: onConnect,
  //         useSSL: true,
  //         onFailure: onFailure,
  //       });
  //     }, 2000);
  //   }

  //   function onMessageArrived(message) {
  //     console.log('onMessageArrived:' + message.payloadString);
  //   }
  //   function onMessageDelivered(message) {
  //     console.log('MEssafge sent:' + message.payloadString);
  //   }

  //   const client = new Paho.MQTT.Client('test.mosquitto.org', 8081, 'sambo');
  //   client.onConnectionLost = onConnectionLost;
  //   client.onMessageArrived = onMessageArrived;
  //   client.onMessageDelivered = onMessageDelivered;

  //   client.connect({onSuccess: onConnect, useSSL: true, onFailure: onFailure});
  // }, []);

  // //send a message
  // const sendMessage = () => {
  //   client.publish('examplesam/sambo', 'hello sambo', 0, false);
  //   console.log('sending');
  // };

  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      {/* <View style={styles.container}>
        <Text>react_native_mqtt</Text>
        <Button
        title="Press me"
        onPress={() =>
          this.mqttConnect.send(
            'hanth2',
            'message send to channel hanth2 again',
            )
          }
        />
      </View> */}
      {/* <Text>HEllo {connected ? 'Connected' : 'Disconnected'}</Text> */}
      {/* <AppButton title="send" onPress={sendMessage} /> */}
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
