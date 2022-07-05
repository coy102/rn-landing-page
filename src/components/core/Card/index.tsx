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
  chipLabel?: string
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
  chipLabel = '',
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
    <Box position="relative">
      <Image
        resizeMode="contain"
        source={{
          uri: img,
        }}
        style={style.cardImage}
      />
      {/* Render sticky chip when chipLabel is not empty  */}
      {!isEmpty(chipLabel) && (
        <Box position="absolute" left={5} top={25}>
          <Chip label={chipLabel} severity={Severity.neutral} />
        </Box>
      )}
    </Box>

    <Typography fontSize={titleSize} fontWeight={titleBold ? 'bold' : 'normal'}>
      {title}
    </Typography>
    {/* Render subtitle when subtitle is not empty  */}
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
    {/* Render price when price is not empty  */}
    {price && (
      <Box mt={5}>
        <Typography fontSize={16} fontWeight="bold">
          Rp.{numberSeparator(price || 0)}
        </Typography>
      </Box>
    )}
    {/* Render promo when promo is not empty  */}
    {!isEmpty(promo) && (
      <Box flexDirection="row" mt={10}>
        <Chip severity={Severity.warning} label={promo} />
      </Box>
    )}
  </Box>
)

export default memo(Card)
