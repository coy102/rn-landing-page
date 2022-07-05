import React from 'react'

import { ThemeProvider } from '@emotion/react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import BottomNav from './components/BottomNav'
import rootRoutes from './routes'
import theme from './styles/theme'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <BottomNav>
          {rootRoutes.map((route) => (
            <Tab.Screen
              key={route.id}
              name={route.name}
              component={route.screen}
            />
          ))}
        </BottomNav>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
