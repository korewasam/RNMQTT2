// useEffect(() => {
//   this.mqttConnect = new MQTTConnection();
//   this.mqttConnect.onMQTTConnect = this.onMQTTConnect;
//   this.mqttConnect.onMQTTLost = this.onMQTTLost;
//   this.mqttConnect.onMQTTMessageArrived = this.onMQTTMessageArrived;
//   this.mqttConnect.onMQTTMessageDelivered = this.onMQTTMessageDelivered;

//   this.mqttConnect.connect('127.0.0.1', 1883);

//   onMQTTConnect = () => {
//     console.log('App onMQTTConnect');
//     this.mqttConnect.subscribeChannel('hanth2');
//   };

//   onMQTTLost = () => {
//     console.log('App onMQTTLost');
//   };

//   onMQTTMessageArrived = message => {
//     console.log('App onMQTTMessageArrived: ', message);
//     console.log(
//       'App onMQTTMessageArrived payloadString: ',
//       message.payloadString,
//     );
//   };

//   onMQTTMessageDelivered = message => {
//     console.log('App onMQTTMessageDelivered: ', message);
//   };

//   return () => {
//     this.mqttConnect.close();
//   };
// }, []);

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
//   }

//   function onMessageArrived(message) {
//     console.log('onMessageArrived:' + message.payloadString);
//   }

//   const client = new Paho.MQTT.Client(
//     '127.0.0.1',
//     1883,
//     'mqtt-explorer-913378f1',
//   );
//   client.onConnectionLost = onConnectionLost;
//   client.onMessageArrived = onMessageArrived;
//   client.connect({onSuccess: onConnect, useSSL: false, onFailure: onFailure});
// }, []);

client.on('connect', function () {
  console.log('conected');
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt');
    }
  });
});

client.on('error', err => {
  console.log('errpor', err);
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
});
