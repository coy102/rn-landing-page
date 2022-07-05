import React, { memo } from 'react'
import { StatusBar } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { colors } from '../../styles/theme'

interface Props {
  color?: string
  barStyle: any
}

const CustomStatusBar = ({
  color = colors.background.default,
  barStyle,
}: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor={color} barStyle={barStyle} />
    </SafeAreaView>
  )
}

export default memo(CustomStatusBar)
