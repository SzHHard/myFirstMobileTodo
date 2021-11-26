import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import Todos from './Todos/todos';
import Input from './Todos/input';
import store from './State/store';
import InpPanel from './inputComponents/plusSignImg';


// function MyComponent(props) {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#fff' }}>
//       <Text>My Component</Text>
//     </View>
//   );
// }
// <TouchableHighlight
// onPress={() => alert('Pressed!')}>
// <MyComponent />
// </TouchableHighlight>



export default class App extends React.Component {

  render() {

    store.subscribe(this.forceUpdate.bind(this));

    return (

      <View style={styles.container}>

        <InpPanel />

        {/* 
          <View style={styles.inpHead}>
            

          </View> */}



        <View style={styles.inp}>
          <Input dispatch={store.dispatch.bind(store)} />
        </View>
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inp: {

  },
  todos: {
    marginTop: 10,
  }
});
