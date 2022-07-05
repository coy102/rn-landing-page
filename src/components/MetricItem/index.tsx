import React, { memo } from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { colors } from '../../styles/theme'
import Box from '../core/Box'
import Typography from '../core/Typography'

interface Props {
  img: string
  title: string
  value: any
}

const MetricItem = ({ img, title, value }: Props) => (
  <TouchableOpacity>
    <Box
      backgroundColor={colors.palette.customGrey}
      borderRadius={4}
      display="flex"
      flexDirection="column"
      p={6}
    >
      <Box mb={5}>
        <Typography fontSize={14}>{title}</Typography>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box minWidth={90}>
          <Typography fontWeight="bold" fontSize={14}>
            {value}
          </Typography>
        </Box>
        <Box>
          <Image
            source={{
              uri: img,
            }}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </Box>
      </Box>
    </Box>
  </TouchableOpacity>
)

export default memo(MetricItem)
