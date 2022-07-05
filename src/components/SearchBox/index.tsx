import React, { memo } from 'react'
import { Image } from 'react-native'

import { icon } from '../../config/image'
import { colors } from '../../styles/theme'
import Box from '../core/Box'
import Typography from '../core/Typography'

import style from './style'

const SearchBox = () => (
  <Box
    alignItems="center"
    backgroundColor={colors.background.default}
    display="flex"
    flexDirection="row"
    mb={10}
    mt={-30}
    p={12}
    style={style.searchBox}
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
