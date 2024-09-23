import React, { createRef } from 'react'
import { SafeAreaView, StatusBar, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { routes, screens } from './src/RouteItems'
import HomeStack from './src/stacks/home'
import BookStack from './src/stacks/book'
import ContactStack from './src/stacks/contact'
import MyRewardsStack from './src/stacks/my-rewards'
import LocationsStack from './src/stacks/location'
import Icon from './src/components/icon'

import type { Ref } from 'react'
import type { NavigationContainerRef } from '@react-navigation/native'

// FIXME: Could be the list of screen
type RootParamList = {}

const iconSize: number = 20
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const tabOptions = ({ route }: any) => {
  const item: any = routes.find((routeItem) => routeItem.name === route.name);
  const defaults = {
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item.title,
  }

  if (!item.showInTab) {
    return {
      ...defaults,
      tabBarButton: () => <View style={{ width: 0 }} />,
    }
  }

  return {
    ...defaults,
    tabBarIcon: ({ focused }: { focused: boolean }) => (<Icon {...item.icon} size={iconSize} color={focused ? '#551E18' : '#f66'} />),
    tabBarLabel: () => (
      <Text style={styles.tabBarLabel}>{item.title || ''}</Text>
    ),
  }
}
const BottomTabNavigator = () => (
  <Tab.Navigator screenOptions={tabOptions}>
    <Tab.Screen name={screens.HomeStack} component={HomeStack} />
    <Tab.Screen name={screens.BookStack} component={BookStack} />
    <Tab.Screen name={screens.ContactStack} component={ContactStack} />
    <Tab.Screen name={screens.MyRewardsStack} component={MyRewardsStack} />
    <Tab.Screen name={screens.LocationsStack} component={LocationsStack} />
  </Tab.Navigator>
)

const CustomDrawerContent = (props: any) => {
  // FIXME: Not working
  const currentRouteName = props.nav()?.getCurrentRoute()?.name;

  return (
    <DrawerContentScrollView {...props}>
      {
        routes.filter(route => route.showInDrawer).map(({ name, title, icon, ...rest }) => {
          console.log('CustomDrawerContent', { name });

          const focusedRoute = routes.find(r => r.name === currentRouteName)
          const focused = focusedRoute ?
            name === focusedRoute?.focusedRoute :
            name === screens.HomeStack;
          return (
            <DrawerItem
              key={name}
              label={() => (<View style={styles.row}>
                <Icon {...icon} size={iconSize} color={focused ? '#551E18' : '#000'} />
                <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
                  {title}
                </Text>
              </View>)}
              onPress={() => props.navigation.navigate(name)}
              style={[styles.drawerItem, focused ? styles.drawerItemFocused : null]}
            />
          )
        })
      }
    </DrawerContentScrollView>
  )
}
const DrawerNavigator = ({ nav }) => (
  <Drawer.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#551E18',
        height: 50,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
          <Icon name="bars" size={iconSize} color="#c66" />
        </TouchableOpacity>
      ),
    })}
    drawerContent={(props) => <CustomDrawerContent {...props} nav={nav} />}
  >
    <Drawer.Screen name={screens.HomeTab} component={BottomTabNavigator} options={{
      title: 'Home',
      headerTitle: () => (<Text>Title</Text>),
      headerRight: () => (
        <View style={styles.headerRight}>
          <Icon name="bell" size={iconSize} color="#f66" />
        </View>
      ),
    }} />
  </Drawer.Navigator>
)
const App = () => {
  const navigationRef: Ref<NavigationContainerRef<RootParamList>> | undefined = createRef()
  const nav = () => navigationRef.current

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
        <DrawerNavigator nav={nav} />
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center'
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  },
  tabContainer: {
    height: 60,
  }
})

export default App
