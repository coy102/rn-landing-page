import React from 'react'
import { ScrollView } from 'react-native'

import Container from '../../components/core/Container'
import { textLabel } from '../../config/constant'
import MenuList from '../../modules/MenuList'
import MetricList from '../../modules/MetricList'
import PromoSingle from '../../modules/PromoSingle'

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
        <PromoSingle label={textLabel.learnMore} promoId={1} withIcon />
        <PromoSingle label={textLabel.langgananYuk} promoId={2} withIcon />
      </Container>
    </ScrollView>
  )
}

export default Home
