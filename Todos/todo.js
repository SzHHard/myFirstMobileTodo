import React from 'react';
import { CheckBox, StyleSheet, Text, View } from 'react-native';
import { toggleDoneActionCreator } from '../State/store';


class Todo extends React.Component {

    constructor(props) {
        super(props);

        this.toggleDone = this.toggleDone.bind(this)
    }

    toggleDone() {
        let action = toggleDoneActionCreator(this.props.todo);
        debugger;
        this.props.dispatch(action);
    }

    render() {
        return (
            <View style={styles.todo}>
                <CheckBox
                    value={this.props.done}
                    onValueChange={this.toggleDone}
                    style={styles.checkbox}
                />
                <View>
                    <Text>{this.props.todo.text}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    todo: {

        height: 40,
        width: 100,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black',
    }
}
)


export default Todo;