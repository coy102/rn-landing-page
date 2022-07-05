import React, { ReactNode } from 'react'
import { Image } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { routeIcon } from '../../routes'
import { colors } from '../../styles/theme'

const Tab = createBottomTabNavigator()

interface Props {
  children: ReactNode
}

const BottomNav = ({ children }: Props) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused }) => {
        // Get icon from routeIcon
        const activeIcon = focused
          ? routeIcon[route.name].iconActive
          : routeIcon[route.name].icon

        return (
          <Image
            source={{
              uri: activeIcon,
            }}
            style={{
              width: 20,
              height: 20,
            }}
          />
        )
      },
      tabBarLabelStyle: {
        fontSize: 12,
        marginBottom: 4,
      },
      tabBarActiveTintColor: colors.palette.primary,
    })}
    initialRouteName="Home"
  >
    {children}
  </Tab.Navigator>
)

export default BottomNav
