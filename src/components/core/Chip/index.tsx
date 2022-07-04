import React, { memo } from 'react'
import { Text } from 'react-native'

import { colors } from '../../../styles/theme'
import Box from '../Box'

interface Props {
  label: string
}

const Chip = ({ label }: Props) => (
  <Box
    p={5}
    maxWidth={120}
    backgroundColor={colors.palette.customPeach}
    borderRadius={4}
  >
    <Text numberOfLines={1}>{label}</Text>
  </Box>
)

export default memo(Chip)
