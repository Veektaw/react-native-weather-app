import React from "react-native";
import {View, Text, StyleSheet} from "react-native"
import { Feather } from '@expo/vector-icons';



const IconText = (props) => {
    const {iconName, iconColor, iconText, bodyTextStyles} = props;
    const {container, textTheme} = styles
    return (
        <View style={container}>
            <Feather name={iconName} size={24} color={iconColor} />
            <Text style={[textTheme, bodyTextStyles]}>{iconText}</Text>
        </View>

        
    )
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold',
    },
    container: {
        alignItems: 'center',
    }
})

export default IconText;