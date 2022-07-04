import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'

import Box from '../../components/core/Box'
import Card from '../../components/core/Card'
import HeaderContent from '../../components/HeaderContent'
import { PromoData } from '../../utils/useSinglePromo/data'

interface Props {
  label: string
  promo: PromoData
  withIcon?: boolean
}

const PromoSingle = ({ label, promo, withIcon }: Props) => {
  return (
    <Box my={20}>
      <HeaderContent label={label} withIcon={withIcon} />

      <TouchableOpacity>
        <Card
          img={promo?.img || ''}
          subtitle={promo?.subTitle}
          title={promo?.title || ''}
          titleSize={18}
          titleBold
        />
      </TouchableOpacity>
    </Box>
  )
}

export default memo(PromoSingle)
