import React from 'react'
import { ScrollView } from 'react-native'

import Banner from '../../components/Banner'
import Container from '../../components/core/Container'
import CustomStatusBar from '../../components/CustomStatusBar'
import SearchBox from '../../components/SearchBox'
import { textLabel } from '../../config/constant'
import MenuList from '../../modules/MenuList'
import MetricList from '../../modules/MetricList'
import PromoMultiple from '../../modules/PromoMultiple'
import PromoSingle from '../../modules/PromoSingle'
import useBanner from '../../utils/useBanner'
import useMultiplePromo from '../../utils/useMultiplePromo'
import useScroll from '../../utils/useScroll'
import useSinglePromo from '../../utils/useSinglePromo/hooks'

const Home = () => {
  const { color, dark, onScroll } = useScroll()
  const { memoBaner } = useBanner()
  const { getPromoById } = useSinglePromo()
  const { memoFlashDiscount, memoOffers, memoRestaurant } = useMultiplePromo()

  return (
    <ScrollView
      style={{
        backgroundColor: '#ffffff',
      }}
      onScroll={onScroll}
    >
      <CustomStatusBar
        color={color}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <Banner
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...memoBaner}
      />
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
