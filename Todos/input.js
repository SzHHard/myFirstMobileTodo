import React from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedbackBase, Alert } from 'react-native'
import { addTodoActionCreator, toggleInputAC } from "../State/store";


class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleEndEditing = this.handleEndEditing.bind(this);
    }

    handleChange(text) {
        this.setState({ text: text })
    }

    handleEndEditing() {
        if (this.state.text.trim()) {
            let action = addTodoActionCreator({text: this.state.text, key: Date.now().toString(), done: false})
            this.setState({text: ''})
            this.props.dispatch(action)
        } else {
            alert('Don\'t leave the field empty.')
        }

    }

    render() {
        return (
            <View style={styles.inpButContainer}>
                <TextInput style={styles.inputTodo}
                    placeholder="Type here!"
                    onChangeText={this.handleChange}
                    value={this.state.text}
                    onEndEditing={this.handleEndEditing}
                    autoFocus={true}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    inpButContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    inputTodo: {
        paddingLeft: 5,
        width: 200,
        height: 30,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: 'orange',
        borderWidth: 2,
       
    },
    enter: {
        height: 40,
    },

})
export default Input;