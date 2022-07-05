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
    alignItems="flex-start"
    borderColor={colors.palette.secondary}
    borderRadius={5}
    borderWidth={1}
    display="flex"
    flexDirection="row"
    mr={6}
    p={6}
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
    <Box mr={5} pt={12}>
      <Typography mb={8} fontSize={18} fontWeight="bold" numberOfLines={1}>
        {title}
      </Typography>
      <Typography mb={8} color={colors.text.secondary} fontSize={16}>
        {subTitle}
      </Typography>
      <Typography
        color={colors.palette.customBlue}
        fontSize={16}
        fontWeight="bold"
        mb={15}
      >
        Accept This Challenge
      </Typography>
    </Box>
  </Box>
)

export default memo(ChallengeCard)
