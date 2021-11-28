import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableWithoutFeedback, Keyboard, ScrollView, Image, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import Todos from './Todos/todos';
import store from './State/store';
import InpPanel from './inputComponents/plusSignImg';
import InputContainer from './Todos/inputContainer';
import ThemeSwitch from './themeSwitch/themeSwitch';


export default class App extends React.Component {

  render() {

    store.subscribe(this.forceUpdate.bind(this));
    return (
      <View style={styles.body} >
        <View style={store.state.isLightTheme ? styles.container : darkStyles.container}>

          <ThemeSwitch dispatch={store.dispatch.bind(store)} isLightTheme={store.state.isLightTheme} />

          <ScrollView>

            <InpPanel isLightTheme={store.state.isLightTheme} dispatch={store.dispatch.bind(store)} />
            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> */}

              <InputContainer dispatch={store.dispatch.bind(store)} showInput={store.state.showInput} />
            {/* </TouchableWithoutFeedback> */}

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
    marginTop: 60,
    paddingTop: 30,
    width: 40,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#EBEBEB',
    borderRadius: 12,
  },
  todos: {
    marginTop: 10,
  }
});

const darkStyles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flex: 0.9,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 60,
    paddingTop: 30,
    width: 40,
    backgroundColor: '#1E1F25',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#29292F',
    borderRadius: 12,
  },
  todos: {
    marginTop: 10,
  }

})

