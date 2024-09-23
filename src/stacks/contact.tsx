import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ContactScreen from '../screens/book'

const Stack = createStackNavigator()

const ContactStack = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name={ContactScreen.name} component={ContactScreen} />
  </Stack.Navigator>
)

export default ContactStack
