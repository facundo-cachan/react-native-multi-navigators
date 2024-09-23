import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import RewardsScreen from '../screens/book'

const Stack = createStackNavigator()

const RewardsStack = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name={RewardsScreen.name} component={RewardsScreen} />
  </Stack.Navigator>
)

export default RewardsStack
