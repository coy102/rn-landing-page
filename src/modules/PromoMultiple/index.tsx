import React, { memo } from 'react'
import { FlatList, Pressable } from 'react-native'

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
  withIcon,
}: Props) => {
  const horizontalView = promos.items.length > 2 && isHorizontalView

  return (
    <Box my={20}>
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
              />
            </Pressable>
          </Box>
        )}
      />
    </Box>
  )
}

export default memo(PromoMultiple)
