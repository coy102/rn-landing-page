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
    alignItems="center"
    backgroundColor={colors.palette.customBlue}
    display="flex"
    flexDirection="row"
    height={150}
  >
    <Box flexGrow={1} mx={10}>
      <Box mb={5}>
        <Typography
          color={colors.background.default}
          fontSize={20}
          fontWeight="bold"
        >
          {title}
        </Typography>
      </Box>
      <Typography color={colors.background.default} fontSize={16}>
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
