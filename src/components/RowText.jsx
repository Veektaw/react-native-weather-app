import React from "react-native";
import {View, Text, StyleSheet} from "react-native"
import { Feather } from '@expo/vector-icons';


const RowText = (props) => {
    const {iconName, iconColor, IconText} = props
    const {messageOneStyle, messageTwoStyle, highLowContainer, messageOne, messageTwo} = props
    return (
        <View style={highLowContainer}>
            <Text style={messageOneStyle}> {messageOne} </Text>
            <Text style={messageTwoStyle}> {messageTwo} </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    highLowContainer: {

    }
})

export default RowText;