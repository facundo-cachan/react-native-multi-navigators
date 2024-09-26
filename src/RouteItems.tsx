
export const screens = {
  HomeScreen: 'HomeScreen',
  HomeTab: 'HomeTab',
  HomeStack: 'HomeStack',

  BookScreen: 'BookScreen',
  BookStack: 'BookStack',

  Contact: 'Contact',
  ContactStack: 'ContactStack',
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
    title: 'Book',
    showInTab: true,
    showInDrawer: true,
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
]