import React, { memo } from 'react'
import { Image } from 'react-native'

import { isEmpty } from 'lodash'

import { colors } from '../../../styles/theme'
import Box from '../Box'
import Typography from '../Typography'

import style from './style'

export interface CardProps {
  img: string
  price?: string
  promo?: string
  subtitle?: string
  title: string
  titleBold?: boolean
  titleSize?: number
}

const Card = ({
  img,
  price,
  promo,
  subtitle,
  title,
  titleBold,
  titleSize = 14,
}: CardProps) => (
  <Box display="flex" flexDirection="column">
    <Image
      source={{
        uri: img,
      }}
      resizeMode="contain"
      style={style.cardImage}
    />
    <Typography fontSize={titleSize} fontWeight={titleBold ? 'bold' : 'normal'}>
      {title}
    </Typography>
    {!isEmpty(subtitle) && (
      <Box mt={5}>
        <Typography color={colors.text.secondary} fontSize={16}>
          {subtitle}
        </Typography>
      </Box>
    )}
  </Box>
)

export default memo(Card)
