import React from 'react'
import { ScrollView } from 'react-native'

import Banner from '../../components/Banner'
import Box from '../../components/core/Box'
import Container from '../../components/core/Container'
import Typography from '../../components/core/Typography'
import CustomStatusBar from '../../components/CustomStatusBar'
import SearchBox from '../../components/SearchBox'
import { textLabel } from '../../config/constant'
import Challenges from '../../modules/Challenges'
import MenuList from '../../modules/MenuList'
import MetricList from '../../modules/MetricList'
import PromoMultiple from '../../modules/PromoMultiple'
import PromoSingle from '../../modules/PromoSingle'
import { colors } from '../../styles/theme'
import useBanner from '../../utils/useBanner'
import useMultiplePromo from '../../utils/useMultiplePromo'
import useScroll from '../../utils/useScroll'
import useSinglePromo from '../../utils/useSinglePromo/hooks'

const Home = () => {
  const { color, dark, onScroll } = useScroll()
  const { memoBaner } = useBanner()
  const { getPromoById } = useSinglePromo()
  const {
    memoFlashDiscount,
    memoGrabMart,
    memoOffers,
    memoRestaurant,
    memoSpesialPromo,
  } = useMultiplePromo()

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
        <Challenges />
        <PromoMultiple promos={memoGrabMart} titleSize={20} />
        <PromoMultiple
          promos={memoSpesialPromo}
          titleSize={20}
          isHorizontalView
        />
        <Box flexDirection="row" justifyContent="center">
          <Typography color={colors.text.secondary}>
            That all for now!
          </Typography>
        </Box>
      </Container>
    </ScrollView>
  )
}

export default Home
