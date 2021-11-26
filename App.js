import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todos from './Todos/todos';
import Input from './Todos/input';
import store from './State/store';
import { addTodoActionCreator } from './State/store';
import { toggleDoneActionCreator } from './State/store';



export default class App extends React.Component {
  
  render() {

    store.subscribe(this.forceUpdate.bind(this));

    return (
      <View style={styles.container}>
        <Text>Yey1вы11!</Text>
        <Input dispatch={store.dispatch.bind(store)} />  
        <Todos state={store.state} dispatch={store.dispatch.bind(store)}/>
        <StatusBar style="auto" />
      </View>
    );
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
