import styled from '@emotion/native'

import { ColorProps, FlexboxProps, SpacingProps } from './interface'

interface BoxProps extends SpacingProps, FlexboxProps, ColorProps {}

const Box = styled.View<BoxProps>({}, (props) => ({
  margin: props.m,
  marginBottom: props.my,
  marginTop: props.my,
  marginLeft: props.mx,
  marginRight: props.mx,
  padding: props.p,
  paddingBottom: props.py,
  paddingTop: props.py,
  paddingLeft: props.px,
  paddingRight: props.px,
  display: props.display,
  flexBasis: props.flexBasis,
  flexDirection: props.flexDirection,
  flexWrap: props.flexWrap,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  alignContent: props.alignContent,
  flex: props.flex,
  flexGrow: props.flexGrow,
  flexShrink: props.flexShrink,
  alignSelf: props.alignSelf,
  backgroundColor: props.backgroundColor,
}))

export default Box
