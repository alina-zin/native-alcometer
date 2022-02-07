import { Picker } from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [alcoLevel, setAlcoLevel] = useState(0);

  const bottle = Array();
  bottle.push({label: '1 bottle', value: 1});
  bottle.push({label: '2 bottles', value: 2});
  bottle.push({label: '3 bottles', value: 3});
  bottle.push({label: '4 bottles', value: 4});
  bottle.push({label: '5 bottles', value: 5});
  bottle.push({label: '6 bottles', value: 6});

  const hours = Array();
  hours.push({label: '1 hour', value: 1});
  hours.push({label: '2 hours', value: 2});
  hours.push({label: '3 hours', value: 3});
  hours.push({label: '4 hours', value: 4});
  hours.push({label: '5 hours', value: 5});
  hours.push({label: '6 hours', value: 6});

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];

  return (
    <View style={styles.container}>
        <Text>Alcometer</Text>
        <Text>Weight</Text>
        <TextInput
          onChangeText = {text => setWeight(text)}
          placeholder = "in kilograms"
          keyboardType = 'numeric'>
        </TextInput>
        <Text>Bottles</Text>
        <Picker
          onValueChange = {(itemValue) => setBottles(itemValue)}
          selectedValue = {bottles} >
            {bottle.map((bottles,index) => (
              <Picker.Item key = {index} label = {bottles.label} value = {bottles.value} />
            ))}
        </Picker>
        <Text>Time</Text>
        <Picker
          onValueChange = {(itemValue) => setTime(itemValue)}
          selectedValue = {time} >
            {hours.map((time,index) => (
              <Picker.Item key = {index} label = {time.label} value = {time.value} />
            ))}
        </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
});
