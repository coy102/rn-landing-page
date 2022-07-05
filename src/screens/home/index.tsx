import React from 'react'
import { ScrollView } from 'react-native'

import Container from '../../components/core/Container'
import SearchBox from '../../components/SearchBox'
import { textLabel } from '../../config/constant'
import MenuList from '../../modules/MenuList'
import MetricList from '../../modules/MetricList'
import PromoMultiple from '../../modules/PromoMultiple'
import PromoSingle from '../../modules/PromoSingle'
import useMultiplePromo from '../../utils/useMultiplePromo'
import useSinglePromo from '../../utils/useSinglePromo/hooks'

function Home() {
  const { getPromoById } = useSinglePromo()
  const { memoFlashDiscount, memoOffers, memoRestaurant } = useMultiplePromo()

  return (
    <ScrollView
      style={{
        backgroundColor: '#ffffff',
      }}
    >
      <Container>
        <SearchBox />
        <MenuList />
        <MetricList />
        <PromoSingle
          label={textLabel.learnMore}
          promo={getPromoById(1)}
          withIcon
        />
        <PromoMultiple promos={memoFlashDiscount} />
        <PromoMultiple promos={memoOffers} isHorizontalView withIcon />
        <PromoSingle
          label={textLabel.langgananYuk}
          promo={getPromoById(2)}
          withIcon
        />
        <PromoMultiple
          promos={memoRestaurant}
          titleSize={20}
          isHorizontalView
          titleBold
          withIcon
        />
      </Container>
    </ScrollView>
  )
}

export default Home
