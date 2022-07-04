import React from 'react'
import { ScrollView } from 'react-native'

import Container from '../../components/core/Container'
import MenuList from '../../modules/MenuList'

function Home() {
  return (
    <ScrollView
      style={{
        backgroundColor: '#ffffff',
      }}
    >
      <Container>
        <MenuList />
      </Container>
    </ScrollView>
  )
}

export default Home
