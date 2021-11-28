import React from 'react';
import { Image, TouchableHighlight, CheckBox, StyleSheet, Text, View } from 'react-native';
import { toggleDoneActionCreator } from '../State/store';


class Todo extends React.Component {

    constructor(props) {
        super(props);

        this.toggleDone = this.toggleDone.bind(this)
    }

    toggleDone() {
        let action = toggleDoneActionCreator(this.props.todo);
        this.props.dispatch(action);
    }

    render() {

        let checkMark = this.props.done ? '✔' : ' '
        return (
            <View style={styles.container}>


                <View style={styles.checkBox}>
                    <TouchableHighlight style={{ marginRight: 5, width: 24, height: 24 }}  onPress={this.toggleDone} >
                      

                            <Text style = {{fontSize: 17, color: '#00ff7f'}}> {checkMark} </Text>
                        
                    </TouchableHighlight >
                </View>




                <View style={styles.todo}>
                    <Text style={{ fontSize: 18, marginLeft: 10, color: '#575767' }}>{this.props.todo.text}</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
   
    container: {
        flexDirection: 'row',
        marginBottom: 5,
    },

    todo: {
        height: 30,
        width: 200,
    },

    checkBox: {
        boxSizing: 'border-box',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#DADADA',
        borderRadius: 5,
        width: 24,
        height: 24,

       
    }
})


export default Todo;