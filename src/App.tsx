import React from 'react'
import { Image } from 'react-native'

import { ThemeProvider } from '@emotion/react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import rootRoutes, { routeIcon } from './routes'
import theme, { colors } from './styles/theme'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => {
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
          {rootRoutes.map((route) => (
            <Tab.Screen
              key={route.id}
              name={route.name}
              component={route.screen}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
