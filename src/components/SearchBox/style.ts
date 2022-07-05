import { StyleSheet } from 'react-native'

import { colors } from '../../styles/theme'

const style = StyleSheet.create({
  searchBox: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.palette.secondary,
  },
  barcode: {
    borderLeftWidth: 2,
    borderColor: colors.palette.secondary,
  },
})

export default style
