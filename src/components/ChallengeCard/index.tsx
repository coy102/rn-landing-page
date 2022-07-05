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

const ChallengeCard = ({ img, subTitle, title }: Props) => (
  <Box
    borderColor={colors.palette.secondary}
    borderRadius={5}
    borderWidth={1}
    p={6}
    mr={6}
    display="flex"
    flexDirection="row"
    alignItems="flex-start"
    width={300}
  >
    <Box mr={3}>
      <Image
        source={{
          uri: img,
        }}
        style={{
          width: 50,
          height: 50,
        }}
      />
    </Box>
    <Box pt={12} mr={5}>
      <Typography numberOfLines={1} fontSize={18} fontWeight="bold" mb={8}>
        {title}
      </Typography>
      <Typography fontSize={16} color={colors.text.secondary} mb={8}>
        {subTitle}
      </Typography>
      <Typography
        fontSize={16}
        color={colors.palette.customBlue}
        fontWeight="bold"
        mb={15}
      >
        Accept This Challenge
      </Typography>
    </Box>
  </Box>
)

export default memo(ChallengeCard)
