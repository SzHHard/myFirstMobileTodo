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
                    <TouchableHighlight style={{ width: 40 }}  onPress={this.toggleDone} >
                      

                            <Text style = {{fontSize: 25, color: 'green'}}> {checkMark} </Text>
                        
                    </TouchableHighlight >
                </View>




                <View style={styles.todo}>
                    <Text style={{ fontSize: 24, marginLeft: 5, fontWeight: 300 }}>{this.props.todo.text}</Text>
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
        height: 40,
        width: 200,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black',
    },

    checkBox: {
        marginRight: -1,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRightColor: 'white',
        width: 40,
        height: 40
    }
})


export default Todo;