import { Picker } from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';
import { Text, TextInput, Button, SafeAreaView, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import StyleSheet from './Styles';
//import { SafeAreaView, ScrollView } from 'react-native-web';

export default function App() {
  const [weight, setWeight] = useState();
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState(0);
  const [alcoLevel, setAlcoLevel] = useState();

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
    {label: 'Male', value: 0},
    {label: 'Female', value: 1}
  ];

  /* const showAlert = () => {
    Alert.alert(
      "Warning",
      "Weight is missing.",
      [
        {
          text: "OK",
          onPress: () => console.log("ok")
        }
      ]
    );
  } */

  function calculate(){
    let result = 0;

    if (weight === 0 || isNaN(weight) === true) {
      alert("Enter your weight");
      return;
    }

      let litres = bottles * 0.33;
      let grams = litres * 8 * 4.5;
      let burn = weight / 10;
      let gramsLeft = grams - (burn * time);

      if (gender === 0) {
        result = gramsLeft / (weight * 0.7);
      } else {
        result = gramsLeft / (weight * 0.6);
      }

      if (result > 0) {
      setAlcoLevel(result.toFixed(2));
      } else {
        result = 0;
        setAlcoLevel(result);
      }
    }

  

  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView>
        <Text style={StyleSheet.header}>Alcometer</Text>
          <Text style={StyleSheet.label}>Weight</Text>
          <TextInput
            onChangeText = {text => setWeight(text)}
            placeholder = "in kilograms"
            keyboardType = 'numeric'>
          </TextInput>
          <Text style={StyleSheet.label}>Bottles</Text>
          <Picker
            onValueChange = {(itemValue) => setBottles(itemValue)}
            selectedValue = {bottles} >
              {bottle.map((bottles,index) => (
                <Picker.Item key = {index} label = {bottles.label} value = {bottles.value} />
              ))}
          </Picker>
          <Text style={StyleSheet.label}>Time</Text>
          <Picker
            onValueChange = {(itemValue) => setTime(itemValue)}
            selectedValue = {time} >
              {hours.map((time,index) => (
                <Picker.Item key = {index} label = {time.label} value = {time.value} />
              ))}
          </Picker>
          <Text style={StyleSheet.label}>Gender</Text>
          <RadioForm
            style={StyleSheet.radio}
            buttonSize = {10}
            radio_props = {genders}
            initial = {gender}
            onPress = {(value) => {setGender(value)}} />
          <Text style={StyleSheet.result}>{alcoLevel}</Text>
          <Button onPress={calculate} title = "Calculate"></Button>
          <Text style={StyleSheet.author}>Author: Alina Zinchenko</Text>
      </ScrollView>
    </SafeAreaView>
  );
}