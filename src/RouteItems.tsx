
export const screens = {
  HomeScreen: 'HomeScreen',
  HomeTab: 'HomeTab',
  HomeStack: 'HomeStack',

  BookScreen: 'BookScreen',
  BookStack: 'BookStack',

  Contact: 'Contact',
  ContactStack: 'ContactStack',

  MyRewards: 'MyRewards',
  MyRewardsStack: 'MyRewardsStack',

  Locations: 'Locations',
  LocationsStack: 'LocationsStack',
}

export const routes = [
  {
    name: screens.HomeScreen,
    focusedRoute: screens.HomeStack,
    title: 'HomeScreen',
    showInTab: true,
    showInDrawer: false,
    icon: {
      type: 'FontAwesome',
      name: 'car'
    },
  },
  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: 'HomeScreen',
    showInTab: false,
    showInDrawer: false,
    icon: {
      type: 'FontAwesome',
      name: 'dog'
    },
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'HomeScreen',
    showInTab: true,
    showInDrawer: true,
    icon: {
      type: 'FontAwesome',
      name: 'home'
    },
  },

  {
    name: screens.BookStack,
    focusedRoute: screens.BookStack,
    title: 'BookScreen Room',
    showInTab: true,
    showInDrawer: false,
    icon: {
      type: 'FontAwesome',
      name: 'home'
    },
  },
  {
    name: screens.BookScreen,
    focusedRoute: screens.BookStack,
    title: 'BookScreen Room',
    showInTab: true,
    showInDrawer: false,
    icon: {
      type: 'FontAwesome',
      name: 'home'
    },
  },
  {
    name: screens.ContactStack,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: true,
    showInDrawer: false,
    icon: {
      type: 'FontAwesome',
      name: 'home'
    },
  },
  {
    name: screens.Contact,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: false,
    showInDrawer: false,
    icon: {
      type: 'FontAwesome',
      name: 'home'
    },
  },
  {
    name: screens.MyRewardsStack,
    focusedRoute: screens.MyRewardsStack,
    title: 'My Rewards',
    showInTab: false,
    showInDrawer: true,
    icon: {
      type: 'FontAwesome',
      name: 'home'
    },
  },
  {
    name: screens.MyRewards,
    focusedRoute: screens.MyRewardsStack,
    title: 'My Rewards',
    showInTab: false,
    showInDrawer: false,
    icon: {
      type: 'FontAwesome',
      name: 'home'
    },
  },
  {
    name: screens.LocationsStack,
    focusedRoute: screens.LocationsStack,
    title: 'Locations',
    showInTab: false,
    showInDrawer: true,
    icon: {
      type: 'FontAwesome',
      name: 'bed'
    },
  },
  {
    name: screens.Locations,
    focusedRoute: screens.LocationsStack,
    title: 'Locations',
    showInTab: false,
    showInDrawer: false,
    icon: {
      type: 'FontAwesome',
      name: 'bed'
    },
  },
]