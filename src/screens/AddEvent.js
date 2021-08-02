import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {theme} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native';
import Day from '../components/Day';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DeviceSelectable from '../components/DeviceSelectable';
import AppButton from '../components/AppButton';
import HeaderBack from '../components/HeaderBack';
import AppLabel from '../components/AppLabel';
import AppTextInput from '../components/AppTextInput';

const data = [
  {
    title: 'monday',
  },
  {
    title: 'Tuesday',
  },
  {
    title: 'Wednesday',
  },
  {
    title: 'Thursday',
  },
  {
    title: 'Friday',
  },
  {
    title: 'Saturday',
  },
  {
    title: 'Sunday',
  },
];

const deviceData = [
  {
    title: 'kitchen',
  },
  {
    title: 'Bedroom',
  },
  {
    title: 'Room 10',
  },
  {
    title: 'Room 11',
  },
];

export default function AddEvent({navigation}) {
  const [isOn, setisOn] = useState(false);

  //   DATE PICKER FUNCTIONS
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  // CREATE EVENT FUNCTION
  const onCreateEvent = () => {
    console.log('creating event');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack navigation={navigation} />
      <ScrollView style={styles.screenContent}>
        <Text style={[theme.styles.header, {marginBottom: 20}]}>Add Event</Text>
        <AppLabel title="Enter Event Name" />
        <AppTextInput
          placeholder="Event Name"
          placeholderTextColor={theme.colors.midgray}
        />
        <View style={styles.daysContainer}>
          <Text style={styles.subHeader}>Days</Text>
          <View style={styles.days}>
            {/* <FlatList
            data={data}
            keyExtractor={item => item.title}
            renderItem={({item}) => (
              <View style={{width: dimensions.width - 40}}>
                <Day title={item.title} />
              </View>
            )}
          /> */}
            <Day title="Monday" />
            <Day title="Tuesday" />
            <Day title="Wednesday" />
            <Day title="Thursday" />
            <Day title="Friday" />
            <Day title="Saturday" />
            <Day title="Sunday" />
          </View>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.subHeader}>Set Time</Text>
          <Text style={[styles.time]}>1600h</Text>
          <TouchableOpacity
            onPress={() => showDatePicker()}
            style={styles.button}>
            <Text style={styles.buttonText}>change time</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>

        <View style={styles.devicesContainer}>
          <Text style={styles.subHeader}>Select Devices</Text>

          {deviceData.map(item => (
            <View style={{width: dimensions.width - 40}}>
              <DeviceSelectable title={item.title} />
            </View>
          ))}
        </View>
        <AppButton
          title="Add Event"
          color={theme.colors.green}
          onPress={onCreateEvent}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  button: {
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 10,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.regular,
  },
  container: {
    backgroundColor: theme.colors.bg,
    alignItems: 'center',
    paddingHorizontal: 10,
    flex: 1,
    height: 1000,
  },
  screenContent: {
    marginBottom: 40,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    width: '100%',
  },
  activate: {
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
  activateTitle: {
    fontFamily: theme.fontFamily.semibold,
    color: 'white',
  },
  daysContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121B43',
    borderRadius: theme.sizes.radius,
    marginTop: 20,
    paddingVertical: 30,
  },
  timeContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121B43',
    borderRadius: theme.sizes.radius,
    marginTop: 20,
    paddingVertical: 30,
  },
  devicesContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121B43',
    borderRadius: theme.sizes.radius,
    marginTop: 20,
    paddingVertical: 30,
  },
  days: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  subHeader: {
    color: 'white',
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.sizes.h1,
    marginBottom: 10,
  },
  time: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.sizes.h1 * 1.1,
    marginBottom: 10,
  },
});
