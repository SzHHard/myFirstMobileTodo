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
            <View style={this.props.isLightTheme ? styles.outerContainer : darkStyles.outerContainer}>

                <Text style={this.props.isLightTheme ? styles.text : darkStyles.text}>Tasks</Text>
                <TouchableHighlight onPress={this.handlePress} style={{  width: 46, height: 46  }} >
                    <Image  source={this.props.isLightTheme ? require('../plus.jpg') : require('../plusDark.jpg')} style={{ width: 46, height: 46 }} />
                </TouchableHighlight >

            </View>
        )
    }

}

const styles = StyleSheet.create({
    text: {
     fontSize: 38,
     fontWeight: 'bold' 
    },
    outerContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        borderBottomColor: '#EBEBEB',
        borderBottomWidth: 1,
        width: 300,
        height: 60,
        marginBottom: 5,
    },
})

const darkStyles = StyleSheet.create({
    text: {
     fontSize: 38,
     fontWeight: 'bold', 
     color: '#ffffff'
    },
    outerContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        borderBottomColor: '#29292F',
        borderBottomWidth: 1,
        width: 300,
        height: 60,
        marginBottom: 5,
    },
})

export default InpPanel