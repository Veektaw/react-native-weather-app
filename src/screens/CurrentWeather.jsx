import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from "react-native"
import {Feather} from '@expo/vector-icons'
import RowText from "../components/RowText"
import { weatherType } from "../utilities/WeatherType"

const CurrentWeather = () => {
  const {wrapper, container, temp, feels, highLow, highLowWrapper, bodyWrapper, description, message} = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
          <Feather name="sun" size={50} color="black" />
          <Text style={temp}>Temperature: 71 </Text>
          <Text style={feels}> Feels like: 9 </Text>
          
          <RowText
            messageOne={"High 8"}
            messageTwo={"Low 6"}
            containerStyles={highLowWrapper}
            messageOneStyles={highLow}
            messageTwoStyles={highLow}
          />

      </View>
      <View style={bodyWrapper}>
          <RowText
            messageOne={"It feels fine"}
            messageTwo={"Wear a t shirt"}
            containerStyles={highLowWrapper}
            messageOneStyles={highLow}
            messageTwoStyles={highLow}
          />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
  wrapper: {
    flex: 1,
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0
  },
  temp: {
    fontSize: 30,
    color: "black",
    
  },
  feels: {
    fontSize: 25,
    color: "black"
  },
  highLow: {
    fontSize: 20,
    color: "black",

  },
  highLowWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexDirection: "row"

  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 30,
    color: "black"
  },
  message: {
    fontSize: 20,
    color: "black"
  }
})

export default CurrentWeather;