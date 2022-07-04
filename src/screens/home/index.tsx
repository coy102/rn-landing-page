import React from 'react'
import { ScrollView, Text } from 'react-native'

import Container from '../../components/core/Container'

function Home() {
  return (
    <ScrollView
      style={{
        backgroundColor: '#ffffff',
      }}
    >
      <Container>
        <Text style={{ color: 'red' }}>React Native</Text>
      </Container>
    </ScrollView>
  )
}

export default Home
