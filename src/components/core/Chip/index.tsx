import React, { memo } from 'react'

import styled from '@emotion/native'

import { colors, Severity } from '../../../styles/theme'
import Box from '../Box'
import Typography from '../Typography'

import { SEVERITY_MAPPING } from './helper'

interface Props {
  borderRadius?: any
  label: string
  severity?: Severity
}

interface StyledChipProps {
  severity: Severity
}

const StyledChip = styled(Box)<StyledChipProps>({}, (props) => ({
  backgroundColor: SEVERITY_MAPPING[props.severity].backgroundColor,
}))

const Chip = ({
  borderRadius = 4,
  label,
  severity = Severity.neutral,
}: Props) => (
  <StyledChip
    px={6}
    py={2}
    maxWidth={120}
    backgroundColor={colors.palette.customPeach}
    borderRadius={borderRadius}
    severity={severity}
  >
    <Typography color={SEVERITY_MAPPING[severity].color} numberOfLines={1}>
      {label}
    </Typography>
  </StyledChip>
)

export default memo(Chip)
