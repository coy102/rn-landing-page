import React from 'react'
import { ScrollView } from 'react-native'

import Container from '../../components/core/Container'
import { textLabel } from '../../config/constant'
import MenuList from '../../modules/MenuList'
import MetricList from '../../modules/MetricList'
import PromoMultiple from '../../modules/PromoMultiple'
import PromoSingle from '../../modules/PromoSingle'
import useMultiplePromo from '../../utils/useMultiplePromo'
import useSinglePromo from '../../utils/useSinglePromo/hooks'

function Home() {
  const { getPromoById } = useSinglePromo()
  const { memoFlashDiscount, memoOffers } = useMultiplePromo()

  return (
    <ScrollView
      style={{
        backgroundColor: '#ffffff',
      }}
    >
      <Container>
        <MenuList />
        <MetricList />
        <PromoSingle
          label={textLabel.learnMore}
          promo={getPromoById(1)}
          withIcon
        />
        <PromoMultiple promos={memoFlashDiscount} />
        <PromoMultiple promos={memoOffers} isHorizontalView />
        <PromoSingle
          label={textLabel.langgananYuk}
          promo={getPromoById(2)}
          withIcon
        />
      </Container>
    </ScrollView>
  )
}

export default Home
