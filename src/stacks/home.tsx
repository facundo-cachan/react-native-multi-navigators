import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/book'

const Stack = createStackNavigator()

const HomeStack = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name={HomeScreen.name} component={HomeScreen} />
  </Stack.Navigator>
)

export default HomeStack
