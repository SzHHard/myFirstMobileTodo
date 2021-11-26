import React from "react";
import {View, StyleSheet} from 'react-native';
import Todo from "./todo";

class Todos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <View>
                {this.props.state.todos.map((todo) => {
                    return <Todo dispatch = {this.props.dispatch} done = {todo.done} todo = {todo} />
                })}
            </View>
        )
    }
}

export default Todos;