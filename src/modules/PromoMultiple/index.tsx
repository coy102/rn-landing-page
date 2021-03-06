import React, { memo } from 'react'
import { FlatList, Pressable } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import Box from '../../components/core/Box'
import Card from '../../components/core/Card'
import HeaderContent from '../../components/HeaderContent'
import theme from '../../styles/theme'
import { PromoMultiData } from '../../utils/useMultiplePromo/data'

interface Props {
  isHorizontalView?: boolean
  titleBold?: boolean
  titleSize?: number
  promos: PromoMultiData
  withIcon?: boolean
}

const PromoMultiple = ({
  isHorizontalView = false,
  titleBold = false,
  titleSize = 18,
  promos,
  withIcon = false,
}: Props) => {
  const horizontalView = promos.items.length > 2 && isHorizontalView

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box my={10}>
        <HeaderContent label={promos.headerLabel} withIcon={withIcon} />

        <FlatList
          data={promos.items}
          horizontal={horizontalView}
          numColumns={horizontalView ? 1 : 2}
          renderItem={({ item }) => (
            <Box key={item.id} px={4} width={horizontalView ? 200 : '50%'}>
              <Pressable android_ripple={{ color: theme.element.boxShadow }}>
                <Card
                  img={item?.img || ''}
                  subtitle={item?.subTitle}
                  title={item?.title || ''}
                  titleBold={titleBold}
                  titleSize={titleSize}
                  price={item?.price}
                  rating={item?.rating}
                  promo={item.promo}
                  chipLabel={item.info}
                />
              </Pressable>
            </Box>
          )}
        />
      </Box>
    </SafeAreaView>
  )
}

export default memo(PromoMultiple)
