import { useState } from 'react'
import { Animated } from 'react-native'

import { colors } from '../../styles/theme'

const useScroll = () => {
  const [dark, setdark] = useState(true)
  const [color, setColor] = useState(colors.background.default)

  const [scroll, setScroll] = useState(new Animated.Value(0))

  const onScroll = ({ nativeEvent }: any) => {
    const { y } = nativeEvent.contentOffset
    setScroll(new Animated.Value(y)) // set scroll animation value here

    const scrollValue = y
    if (scrollValue > 100 && dark) {
      setdark(false)
      setColor(colors.background.default)
    }
    if (scrollValue < 100 && !dark) {
      setdark(true)
      setColor(colors.palette.customBlue)
    }
  }

  return {
    color,
    dark,
    onScroll,
    scroll,
  }
}

export default useScroll
