import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LocationScreen from '../screens/book'

const Stack = createStackNavigator()

const LocationStack = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name={LocationScreen.name} component={LocationScreen} />
  </Stack.Navigator>
)

export default LocationStack
