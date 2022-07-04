import React from 'react'
import { ScrollView } from 'react-native'

import Container from '../../components/core/Container'
import MenuList from '../../modules/MenuList'
import MetricList from '../../modules/MetricList'

function Home() {
  return (
    <ScrollView
      style={{
        backgroundColor: '#ffffff',
      }}
    >
      <Container>
        <MenuList />
        <MetricList />
      </Container>
    </ScrollView>
  )
}

export default Home
