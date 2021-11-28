import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import Todos from './Todos/todos';
import store from './State/store';
import InpPanel from './inputComponents/plusSignImg';
import InputContainer from './Todos/inputContainer';


export default class App extends React.Component {

  render() {

    store.subscribe(this.forceUpdate.bind(this));
    debugger;
    return (

      <View style={styles.container}>

        <InpPanel dispatch = {store.dispatch.bind(store)} />

        <InputContainer dispatch = {store.dispatch.bind(store)} showInput = {store.state.showInput}/>

        <View style={styles.todos} >
          <Todos state={store.state} dispatch={store.dispatch.bind(store)} />
        </View>

        <StatusBar style="auto" />
      </View>
    );
  }
}






const styles = StyleSheet.create({
  container: {
    /* Auto Layout */

    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
 
   

    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EBEBEB',
    // boxSizing: 'border-box',
    // boxShadow: '0px 4px 15px rgba(44, 44, 44, 0.05)',
    borderRadius: 12,
  },

  todos: {
    marginTop: 10,
  }
});

