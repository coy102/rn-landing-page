import React from 'react'

import { ThemeProvider } from '@emotion/react'

import Home from './screens/home'
import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
