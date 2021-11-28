import React from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedbackBase, Alert } from 'react-native'
import { addTodoActionCreator, toggleInputAC } from "../State/store";


class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handlePressButton = this.handlePressButton.bind(this);
    }

    handleChange(text) {
        this.setState({ text: text })
    }

    handlePressButton() {
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
                />
                {/* <View style = {styles.buttonContainer}> */}
                <Button style={styles.enter}
                    title='Input'
                    onPress={this.handlePressButton}
                />
                {/* </View> */}
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
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: 'orange',
        borderWidth: 2,
       
    },
    enter: {
        height: 40,
        // color: 'white',

    },
    buttonContainer: {
        // backgroundColor: 'grey',
    }

})
export default Input;