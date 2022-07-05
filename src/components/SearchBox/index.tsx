import React, { memo } from 'react'
import { Image } from 'react-native'

import { icon } from '../../config/image'
import { colors } from '../../styles/theme'
import Box from '../core/Box'
import Typography from '../core/Typography'

import style from './style'

const SearchBox = () => (
  <Box
    mt={-30}
    mb={10}
    p={12}
    display="flex"
    flexDirection="row"
    alignItems="center"
    style={style.searchBox}
    backgroundColor={colors.background.default}
  >
    <Box mr={8}>
      <Image
        source={{
          uri: icon.searchIcon,
        }}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
        }}
      />
    </Box>
    <Box flexGrow={1}>
      <Typography fontSize={16} color={colors.text.secondary}>
        Test
      </Typography>
    </Box>
    <Box px={10} style={style.barcode}>
      <Image
        source={{
          uri: icon.scanBarcodeIcon,
        }}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
        }}
      />
    </Box>
  </Box>
)

export default memo(SearchBox)
