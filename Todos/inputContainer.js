import React from 'react'
import { View } from 'react-native'
import Input from './input'

class InputContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return this.props.showInput
            ? (
                <View >
                    <Input isLightTheme = {this.props.isLightTheme} dispatch={this.props.dispatch} />
                </View>
            )
            : null
    }

}

export default InputContainer;