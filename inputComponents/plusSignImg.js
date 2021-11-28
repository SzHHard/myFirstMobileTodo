import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { toggleInputAC } from '../State/store';

class InpPanel extends React.Component {

    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        let action = toggleInputAC();
        this.props.dispatch(action)
    }

    render() {
        return (
            <View style={styles.outerContainer}>

                <Text style={{ fontSize: 38, fontWeight: 'bold' }}>Tasks</Text>
                <TouchableHighlight onPress={this.handlePress} style={{  width: 46, height: 46  }} >
                    <Image  source={require('../plus.jpg')} style={{ width: 46, height: 46 }} />
                </TouchableHighlight >

            </View>
        )
    }

}

const styles = StyleSheet.create({

    outerContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 300,
        height: 60,
        marginBottom: 5,
    },
})


export default InpPanel