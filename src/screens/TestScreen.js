import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import {theme} from '../constants';

import init from 'react_native_mqtt';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import {event} from 'react-native-reanimated';

export default function TestScreen() {
  const [ipAdress, setipAdress] = useState('test.mosquitto.org');
  const [port, setport] = useState(8081);
  const [status, setstatus] = useState(false);
  const [clientId, setclientId] = useState('Client1');
  const [message, setMessage] = useState('no message yet');
  const [stateClient, setstateClient] = useState();
  const [topic, setTopic] = useState('/testtopic');
  const [publishMsg, setPublishMsg] = useState('Hello from Njugush');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //convert port to number

  //Save button Function
  const onSave = () => {
    console.log('Saved');
  };
  //MQTT CONNECTION LOGIC

  const onConnectPress2 = () => {
    console.log('ip', ipAdress);
    console.log('port', typeof port);
  };

  //ONLOAD
  // set up client functions
  useEffect(() => {}, []);

  const onConnectPress = (host, port, clientId) => {
    init({
      size: 10000,
      storageBackend: AsyncStorage,
      defaultExpires: 1000 * 3600 * 24,
      enableCache: true,
      reconnect: true,
      sync: {},
    });

    function onFailure(err) {
      console.log('onfaulire', err);
      setstatus(false);
    }
    function onConnect() {
      console.log('onConnect');
      setstatus(true);
    }

    function onConnectionLost(responseObject) {
      if (responseObject.errorCode !== 0) {
        console.log('onConnectionLost:' + responseObject.errorMessage);
        setstatus(false);
      }
      // setTimeout(() => {
      //   client.connect({
      //     onSuccess: onConnect,
      //     useSSL: true,
      //     onFailure: onFailure,
      //   });
      // }, 2000);
    }

    function onMessageArrived(message) {
      console.log('onMessageArrived:' + message.payloadString);
      setMessage(message.payloadString);
    }
    function onMessageDelivered(message) {
      console.log('MEssafge sent:' + message.payloadString);
    }

    const client = new Paho.MQTT.Client(host, port, clientId);
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.onMessageDelivered = onMessageDelivered;

    setstateClient(client);
    client.connect({
      onSuccess: onConnect,
      useSSL: true,
      onFailure: onFailure,
      userName: username,
      password: password,
    });
  };

  const onDisconnect = () => {
    console.log('disconnecting');
    if (status) {
      stateClient.disconnect();
      setstatus(false);
    }
  };

  const subscribe = topic => {
    if (status) {
      console.log('subbing');
      stateClient.subscribe(topic, function (err) {
        if (!err) {
          return stateClient.publish(
            topic,
            'Hello mqtt from njugush on subscribe',
          );
        }
        console.log('subscription error', err);
      });
    }
  };
  const publish = (topic, message) => {
    if (status) {
      console.log('publishing');
      stateClient.publish(topic, message);
    }
  };

  //send a message
  const sendMessage = () => {
    client.publish('examplesam/sambo', 'hello sambo', 0, false);
    console.log('sending');
  };
  const clientDisconnect = () => {
    client.disconnect();
    console.log('disconnectds');
  };

  return (
    <ScrollView contentContainerStyle="center" style={styles.container}>
      <Text style={styles.header}>Connection Testing</Text>
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
        <Text style={styles.label}>Ip Address --- {ipAdress}</Text>
        <AppTextInput
          defaulValue={ipAdress}
          placeholder="Ip Address"
          onChange={event => setipAdress(event.nativeEvent.text)}
        />
        <Text style={styles.label}>Port --- {port}</Text>
        <AppTextInput
          defaulValue={port}
          keyboardType="numeric"
          placeholder="Port"
          onChange={event => setport(parseInt(event.nativeEvent.text))}
        />
        {/* <Text style={styles.label}>Username</Text>
        <AppTextInput value={username} placeholder="Username" />
        <Text style={styles.label}>Password</Text>
        <AppTextInput value={password} placeholder="Password" /> */}
        <Text style={styles.label}>Client Id</Text>
        <AppTextInput
          defaultValue={clientId}
          placeholder="Client ID"
          onChange={event => setclientId(event.nativeEvent.text)}
        />
        <Text style={styles.label}>Username</Text>
        <AppTextInput
          defaultValue={username}
          placeholder="Username"
          onChange={event => setUsername(event.nativeEvent.text)}
        />
        <Text style={styles.label}>Password</Text>
        <AppTextInput
          defaultValue={password}
          placeholder="Password"
          onChange={event => setPassword(event.nativeEvent.text)}
        />

        <Text style={styles.label}>Topic</Text>
        <AppTextInput
          defaultValue={topic}
          placeholder="example: example/topic"
          onChange={event => setTopic(event.nativeEvent.text)}
        />

        <TouchableOpacity
          onPress={() => subscribe(topic)}
          style={styles.saveBtn}>
          <Text style={styles.buttonLabel}>Subscribe to :{topic}:</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Publish Message</Text>
        <AppTextInput
          defaultValue={publishMsg}
          placeholder="Enter Message"
          onChange={event => setPublishMsg(event.nativeEvent.text)}
        />

        <TouchableOpacity
          onPress={() => publish(topic, publishMsg)}
          style={styles.saveBtn}>
          <Text style={styles.buttonLabel}>Publish to :{topic}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onConnectPress(ipAdress, port, clientId)}
          style={styles.saveBtn}>
          <Text style={styles.buttonLabel}>Connect</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDisconnect()} style={styles.saveBtn}>
          <Text style={styles.buttonLabel}>Disconnect</Text>
        </TouchableOpacity>

        <Text style={[theme.styles.header, {marginTop: 20}]}>Responses</Text>

        <Text style={[styles.label, {marginVertical: 10, alignSelf: 'center'}]}>
          Message Received
        </Text>
        <View style={styles.messageContainer}>
          <Text style={styles.label}> {message} </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginVertical: 20,
  },
  buttonLabel: {
    color: 'white',
  },
  messageContainer: {
    width: '100%',
    backgroundColor: theme.colors.cardInactive,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
});
