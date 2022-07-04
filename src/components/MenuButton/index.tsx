import React, { memo } from 'react'
import { Image, TouchableOpacity } from 'react-native'

import Box from '../core/Box'
import Typography from '../core/Typography'

interface Props {
  img?: string
  label: string
}

const MenuButton = ({ img, label }: Props) => (
  <TouchableOpacity>
    <Box p={4} px={10} display="flex" alignItems="center">
      <Image
        // eslint-disable-next-line global-require
        source={{
          uri: img,
        }}
        style={{
          width: 50,
          height: 50,
        }}
      />
      <Box my={5}>
        <Typography fontSize={16}>{label}</Typography>
      </Box>
    </Box>
  </TouchableOpacity>
)

export default memo(MenuButton)
