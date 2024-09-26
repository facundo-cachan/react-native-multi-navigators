import React, { createRef } from 'react'
import { SafeAreaView, StatusBar, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import Icon from './src/components/icon'

import { Drawer, Tab } from './src/utils/factoryNavigator'

import HomeStack from './src/stacks/home'
import BookStack from './src/stacks/book'
import ContactStack from './src/stacks/contact'

import type { Ref } from 'react'
import type { NavigationContainerRef } from '@react-navigation/native'

// FIXME: Could be the list of screen
type RootParamList = {}

const iconDrawer: string = 'bars'
const iconRight: string = 'bell'
const iconSize: number = 20

const routes = [
  {
    "component": "HomeScreen",
    "icon": {
      "name": "home-sharp",
      "type": "Ionicons"
    },
    "name": "HomeScreen",
    "showInDrawer": true,
    "showInTab": true,
    "title": "Home"
  },
  {
    "component": "BookScreen",
    "icon": {
      "name": "book",
      "type": "Entypo"
    },
    "name": "BookScreen",
    "showInDrawer": true,
    "title": "Marker"
  },
  {
    "component": "ContactScreen",
    "icon": {
      "type": "FontAwesome5",
      "name": "phone-alt"
    },
    "name": "ContactScreen",
    "showInTab": true,
    "title": "Call Us"
  }
]
const tabOptions = ({ route }: any) => {
  // const routes = useRecoilValue(routes);
  const item: any = routes.find((routeItem) => routeItem.name === route.name);

  // const item: any = { showInTab: true, title: '', icon: { name: 'glass' } };
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

const CustomDrawerContent = (props: any) => {
  const routes = props.routes;

  return (
    <DrawerContentScrollView {...props}>
      {routes.map(({ showInDrawer, name, title, icon, component }: any) => showInDrawer ? (<DrawerItem key={name}
        label={() => (<View style={styles.row}>
          {icon?.name && (<Icon {...icon} size={iconSize} color="#66cc" />)}
          <Text style={styles.drawerLabel}>
            {title ?? component.name}
          </Text>
        </View>)}
        onPress={() => {
          console.log({ name });

          props.navigation.navigate(name)
        }}
        style={[styles.drawerItem, styles.drawerItemFocused]}
      />) : null)}
    </DrawerContentScrollView>
  )
}
const DrawerNavigator = ({ nav, routes }: { nav: any; routes: any }) => {
  const TabNavigator = () => (<Tab.Navigator screenOptions={tabOptions}>{routes.map(({ component, name }: any) => (<Tab.Screen key={name} name={name} component={component} />))}</Tab.Navigator>);

  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#551E18',
          height: 50,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
            <Icon name={iconDrawer} size={iconSize} color="#c66" />
          </TouchableOpacity>
        ),
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} routes={routes} nav={nav} />}
    >
      <Drawer.Screen name="HomeTab" component={TabNavigator} options={{
        headerTitle: () => (<Text>Title</Text>),
        headerRight: () => (
          <View style={styles.headerRight}>
            <Icon name={iconRight} size={iconSize} color="#f66" />
          </View>
        ),
      }} />
    </Drawer.Navigator>
  )
}

const App = () => {
  const stacks = [HomeStack, BookStack, ContactStack].reduce((prev: any, curr: any) => prev.concat(curr))
    .map((screen) => ({
      ...screen,
      name: screen.component.name,
    }));
  // TODO: Save routes in global state
  console.log(stacks);

  const navigationRef: Ref<NavigationContainerRef<RootParamList>> | undefined = createRef()
  const nav: () => NavigationContainerRef<RootParamList> | null = () => navigationRef.current

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
        <DrawerNavigator nav={nav} routes={stacks} />
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
