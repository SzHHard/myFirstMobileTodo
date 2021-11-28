import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableWithoutFeedback, Keyboard, ScrollView, Image, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import Todos from './Todos/todos';
import store from './State/store';
import InpPanel from './inputComponents/plusSignImg';
import InputContainer from './Todos/inputContainer';


export default class App extends React.Component {

  render() {

    store.subscribe(this.forceUpdate.bind(this));
    return (
      <View style={styles.body} >




        <View style={styles.container}>
          <ScrollView>

            <InpPanel dispatch={store.dispatch.bind(store)} />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

              <InputContainer dispatch={store.dispatch.bind(store)} showInput={store.state.showInput} />
            </TouchableWithoutFeedback>

            <View style={styles.todos} >
              <Todos state={store.state} dispatch={store.dispatch.bind(store)} />
            </View>
          </ScrollView>
        </View>



      </View>
    );
  }
}






const styles = StyleSheet.create({

  body: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  container: {

    flex: 0.9,
    flexDirection: 'column',
    alignItems: 'center',


    marginTop: 100,
    paddingTop: 64,
    width: 40,



    backgroundColor: '#FFFFFF',
    borderWidth: 2,
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

