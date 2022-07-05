import React, { memo } from 'react'
import { Image } from 'react-native'

import { isEmpty } from 'lodash'

import { icon } from '../../../config/image'
import { colors, Severity } from '../../../styles/theme'
import { numberSeparator } from '../../../utils/number'
import Box from '../Box'
import Chip from '../Chip'
import Typography from '../Typography'

import style from './style'

export interface CardProps {
  img: string
  price?: number
  promo?: string
  rating?: number
  subtitle?: string
  title: string
  titleBold?: boolean
  titleSize?: number
}

const Card = ({
  img,
  price,
  promo = '',
  rating,
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
      <Box mt={4}>
        <Typography color={colors.text.secondary} fontSize={16}>
          {subtitle}
          {rating && (
            <>
              <Typography> • </Typography>
              <Image
                source={{
                  uri: icon.stars,
                }}
                style={{
                  width: 10,
                  height: 10,
                }}
              />
              <Typography> {rating}</Typography>
            </>
          )}
        </Typography>
      </Box>
    )}
    {price && (
      <Box mt={5}>
        <Typography fontSize={16} fontWeight="bold">
          Rp.{numberSeparator(price || 0)}
        </Typography>
      </Box>
    )}
    {!isEmpty(promo) && (
      <Box flexDirection="row" mt={10}>
        <Chip severity={Severity.warning} label={promo} />
      </Box>
    )}
  </Box>
)

export default memo(Card)
