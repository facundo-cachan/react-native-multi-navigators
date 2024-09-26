import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

export { Navigator, Screen, Drawer, Tab }