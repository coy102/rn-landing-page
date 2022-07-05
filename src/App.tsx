import React from 'react'

import { ThemeProvider } from '@emotion/react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import rootRoutes from './routes'
import theme from './styles/theme'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          {rootRoutes.map((route) => (
            <Stack.Screen
              key={route.id}
              name={route.name}
              component={route.screen}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
