import React, {useState, useEffect} from 'react'
import {StyleSheet, ActivityIndicator, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator}   from '@react-navigation/bottom-tabs'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location';


const App = () => {
  const [IsLoading, setIsLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)
  

  useEffect (() => {
    (async() => {
      let {status} = await Location.requestForegroundPermissionsAsync()
      if (status!== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })
  }, [])

  if (location) {
    console.log(location)
  }

  // if (IsLoading) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size={'large'} color={'blue'} />
  //     </View>
  //   )
  // }


  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center', 
  }
})

export default App;