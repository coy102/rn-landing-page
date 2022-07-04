import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'

import Box from '../../components/core/Box'
import PromoItem from '../../components/PromoItem'

import useHooks from './hooks'

interface Props {
  label: string
  promoId: number
  withIcon?: boolean
}

const PromoSingle = ({ label, promoId, withIcon }: Props) => {
  const { memoPromo } = useHooks({
    promoId,
  })

  return (
    <Box my={10}>
      <TouchableOpacity>
        <PromoItem
          img={memoPromo?.img || ''}
          label={label}
          subtitle={memoPromo?.subTitle}
          title={memoPromo?.title || ''}
          titleSize={18}
          withIcon={withIcon}
          titleBold
        />
      </TouchableOpacity>
    </Box>
  )
}

export default memo(PromoSingle)
