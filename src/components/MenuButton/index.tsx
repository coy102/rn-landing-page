import React, { memo } from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { isEmpty } from 'lodash'

import { Severity } from '../../styles/theme'
import Box from '../core/Box'
import Chip from '../core/Chip'
import Typography from '../core/Typography'

interface Props {
  img: string
  info?: string
  label: string
}

const MenuButton = ({ img, info = '', label }: Props) => (
  <TouchableOpacity>
    <Box p={4} px={10} display="flex" alignItems="center">
      <Box position="relative">
        <Image
          source={{
            uri: img,
          }}
          style={{
            width: 50,
            height: 50,
          }}
        />
        {/* Render stiky chip on image */}
        {!isEmpty(info) && (
          <Box position="absolute" right={0} top={0}>
            <Chip label={info} borderRadius={25} severity={Severity.info} />
          </Box>
        )}
      </Box>
      <Box my={5}>
        <Typography fontSize={16}>{label}</Typography>
      </Box>
    </Box>
  </TouchableOpacity>
)

export default memo(MenuButton)
