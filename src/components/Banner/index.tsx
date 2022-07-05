import React, { memo } from 'react'
import { Image } from 'react-native'

import { colors } from '../../styles/theme'
import Box from '../core/Box'
import Typography from '../core/Typography'

interface Props {
  img: string
  subTitle: string
  title: string
}

const Banner = ({ img, subTitle, title }: Props) => (
  <Box
    backgroundColor={colors.palette.customBlue}
    display="flex"
    flexDirection="row"
    alignItems="center"
    height={150}
  >
    <Box flexGrow={1} mx={10}>
      <Box mb={5}>
        <Typography
          fontSize={20}
          color={colors.background.default}
          fontWeight="bold"
        >
          {title}
        </Typography>
      </Box>
      <Typography fontSize={16} color={colors.background.default}>
        {subTitle}
      </Typography>
    </Box>
    <Box mb={20}>
      <Image
        source={{
          uri: img,
        }}
        resizeMode="stretch"
        style={{
          height: '100%',
          width: 120,
        }}
      />
    </Box>
  </Box>
)

export default memo(Banner)
