import React, { memo } from 'react'
import { Image } from 'react-native'

import { icon } from '../../config/image'
import Box from '../core/Box'
import Typography from '../core/Typography'

export interface HeaderContentProps {
  label: string
  withIcon?: boolean
}

const HeaderContent = ({ label, withIcon }: HeaderContentProps) => (
  <Box display="flex" flexDirection="row" alignItems="center">
    <Typography fontWeight="bold" fontSize={24}>
      {label}
    </Typography>
    {withIcon && (
      <Box ml={5}>
        <Image
          source={{
            uri: icon.arrowRight,
          }}
          style={{
            width: 20,
            height: 20,
          }}
        />
      </Box>
    )}
  </Box>
)

export default memo(HeaderContent)
