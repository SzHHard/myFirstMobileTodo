import React from "react";
import { Switch, View } from "react-native";
import { changeThemeAC } from "../State/store";

class ThemeSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        let action = changeThemeAC();
        this.props.dispatch(action);
    }

    render() {
        return (
            <View>
                <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={this.handleChange}
        value={this.props.isLightTheme}
      />
            </View>
        )
    }
}

export default ThemeSwitch;