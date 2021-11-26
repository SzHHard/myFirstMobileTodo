import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Todos extends React.Component {

    render() {
        return (
            <View style={styles.todos}>
                <Text>Component2</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
       todos: {
            backgroundColor: '#ffa',
        }
    }
)


export default Todos;