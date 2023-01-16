import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import {useState} from 'react';
import React, { useEffect } from 'react';

export default function App() {
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);
  const [result, setResult] = React.useState('');

  const add = () =>{
    if (isNaN(number1) || isNaN(number2)) {
      setResult(0);
    }
    else setResult(parseInt(number1) + parseInt(number2));
  }

  const subtract = () =>{
    if (isNaN(number1) || isNaN(number2)) {
      setResult(0);
    }
    else setResult(parseInt(number1) - parseInt(number2));
  }

  return (
    <View style={{flex:1}}>
      <View style={{flex:1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
      <Text>Result: {result}</Text>
      <TextInput
      style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        value={number1}
        onChangeText={text => setNumber1(text)}
        keyboardType = 'number-pad'
      />
      <TextInput
      style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        value={number2}
        onChangeText={text => setNumber2(text)}
        keyboardType = 'number-pad'
      />
      </View>
      <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
        <Button onPress={add} title="+" />
        <Button onPress={subtract} title="-" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
