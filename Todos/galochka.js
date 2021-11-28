import React from "react";
import {Image} from 'react-native'

class Galochka extends React.Component {

    render() {

        return this.props.done ?
            (
                <Image style={{ width: 19, height: 19 }} source={this.props.isLightTheme ? require('../galochka3.png') : require('../galochkaDark.png')} />
            ) :
            null

    }
}

export default Galochka;