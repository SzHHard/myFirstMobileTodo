import React from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native'

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: 's' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(text) {
        this.setState({ text })
    }

    render() {
        return (
            <View>
                <TextInput style={{ height: 40 }}
                    placeholder="Type here!"
                    onChangeText={this.handleChange}
                    defaultValue={this.state.text}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    inputTodo: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2
    }
})
export default Input;