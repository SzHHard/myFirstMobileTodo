import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { toggleDoneActionCreator } from '../State/store';
import Galochka from './galochka';

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
        return (
            <View style={this.props.isLightTheme ? styles.container : darkStyles.container}>
                <View style={this.props.isLightTheme ? styles.checkbox : darkStyles.checkBox}>
                    <TouchableOpacity style={this.props.isLightTheme ? styles.touchable : darkStyles.touchable } onPress={this.toggleDone} >
                        <Galochka isLightTheme={this.props.isLightTheme} done={this.props.done} />
                    </TouchableOpacity >
                </View>

                <View style={styles.todo}>
                    <Text style={this.props.isLightTheme ? styles.text : darkStyles.text}>{this.props.todo.text}</Text>
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
    checkbox: {
        width: 24,
        height: 24,
    },
    touchable: {
        paddingLeft: 2,
        marginRight: 5,
        width: 25,
        height: 25,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#DADADA',
        borderRadius: 5,
        backgroundColor: '#F8F8F8'
    },
    textCheckbox: {
        fontSize: 17,
        color: '#00ff7f'
    },
    text: {
        fontSize: 18,
        marginLeft: 10,
        color: '#575767'
    }

})

const darkStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    todo: {
        height: 30,
        width: 200,
    },
    checkbox: {
        width: 24,
        height: 24,
       
    },
    
    touchable: {
        paddingLeft: 2,
        marginRight: 5,
        width: 25,
        height: 25,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#0E0E11',
        borderRadius: 5,
        backgroundColor: '#262933',
    },
    textCheckbox: {
        fontSize: 17,
        color: 'white'
    },

    text: {
        fontSize: 18,
        marginLeft: 10,
        color: '#DADADA'
    }
})

export default Todo;