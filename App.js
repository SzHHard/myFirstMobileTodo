import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todos from './Todos/todo';
import Input from './Todos/input';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Yey1вы11!</Text>
      <Input />
      <Todos />
      <StatusBar style="auto" />
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
