import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

class InpPanel extends React.Component {

    constructor(props) {
        super(props);

    }

    handlePress() {

    }

    render() {
        return (
            <View style={styles.outerContainer}>

                    <Text style={{ fontSize: 38, fontWeight: 'bold' }}>Tasks</Text>
                    <TouchableHighlight style={{ width: 50 }} >
                        <Image onPress={this.handlePress} source={require('../plus.jpg')} style={{  width: 50, height: 50 }} />
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