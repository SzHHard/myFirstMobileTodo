import React from "react";
import { StyleSheet, View, TextInput } from 'react-native'
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
            let action = addTodoActionCreator({ text: this.state.text, key: Date.now().toString(), done: false })
            this.setState({ text: '' })
            this.props.dispatch(action)
        } else {
            let action = toggleInputAC()
            this.props.dispatch(action)
            alert('Don\'t leave the field empty.')
        }
    }

    render() {
        return (
            <View style={styles.inpButContainer}>
                <TextInput style={this.props.isLightTheme ? styles.inputTodo : darkStyles.inputTodo}
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
        color: 'black',
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

const darkStyles = StyleSheet.create({
    inpButContainer: {
        flexDirection: 'row',
        marginTop: 10,
        
    },
    inputTodo: {
        color: '#DADADA',
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