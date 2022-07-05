import styled from '@emotion/native'

import { TypographyProps } from './interface'

interface Props extends TypographyProps {
  mb?: number
}

const Typography = styled.Text<Props>({}, (props) => ({
  color: props.color,
  fontFamily: props.fontFamily,
  fontSize: props.fontSize,
  fontStyle: props.fontStyle,
  fontWeight: props.fontWeight,
  letterSpacing: props.letterSpacing,
  lineHeight: props.lineHeight,
  textAlign: props.textAlign,
  marginBottom: props.mb,
}))

export default Typography
