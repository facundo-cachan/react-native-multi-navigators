import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import BookScreen from '../screens/book'

const Stack = createStackNavigator()

const BookStack = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name={BookScreen.name} component={BookScreen} />
  </Stack.Navigator>
)

export default BookStack
