import React from 'react'
import {View, StyleSheet} from 'react-native'
import UpcomingWeather from '../screens/UpcomingWeather'
import CurrentWeather from '../screens/CurrentWeather'
import City from '../screens/City'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator}   from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'



const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}>
        <Tab.Screen name="Current Weather" component={CurrentWeather} options={{
          tabBarIcon: ({color, size}) => <Feather name="cloud" color={color} size={size} />
        }}/>
        <Tab.Screen name="Upcoming Weather" component={UpcomingWeather} options={{
          tabBarIcon: ({color, size}) => <Feather name="sun" color={color} size={size} />
        }}/>
        <Tab.Screen name="City" component={City} options={{
          tabBarIcon: ({color, size}) => <Feather name="map-pin" color={color} size={size} />
        }}/>
      </Tab.Navigator>
  )
}

export default Tabs;