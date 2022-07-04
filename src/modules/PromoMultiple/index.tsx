import React, { memo } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'

import Box from '../../components/core/Box'
import Card from '../../components/core/Card'
import HeaderContent from '../../components/HeaderContent'
import { PromoMultiData } from '../../utils/useMultiplePromo/data'

interface Props {
  isGrid?: boolean
  isHorizontalView?: boolean
  promos: PromoMultiData
  withIcon?: boolean
}

const PromoMultiple = ({
  isGrid = false,
  isHorizontalView = false,
  promos,
  withIcon,
}: Props) => {
  const horizontalView = promos.items.length > 2 && isHorizontalView && !isGrid

  return (
    <Box my={20}>
      <HeaderContent label={promos.headerLabel} withIcon={withIcon} />

      <FlatList
        data={promos.items}
        horizontal={horizontalView}
        numColumns={horizontalView ? 1 : 2}
        renderItem={({ item }) => (
          <Box key={item.id} px={4} width={horizontalView ? 200 : '50%'}>
            <TouchableOpacity>
              <Card
                img={item?.img || ''}
                subtitle={item?.subTitle}
                title={item?.title || ''}
                titleSize={18}
                price={item?.price}
              />
            </TouchableOpacity>
          </Box>
        )}
      />
    </Box>
  )
}

export default memo(PromoMultiple)
