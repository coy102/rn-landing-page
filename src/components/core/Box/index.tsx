import styled from '@emotion/native'

import {
  BordersProps,
  ColorProps,
  FlexboxProps,
  PositionsProps,
  SizingProps,
  SpacingProps,
} from './interface'

interface BoxProps
  extends SpacingProps,
    BordersProps,
    ColorProps,
    FlexboxProps,
    PositionsProps,
    SizingProps {}

const Box = styled.View<BoxProps>({}, (props) => ({
  alignContent: props.alignContent,
  alignItems: props.alignItems,
  alignSelf: props.alignSelf,
  backgroundColor: props.backgroundColor,
  borderColor: props.borderColor,
  borderRadius: props.borderRadius,
  borderWidth: props.borderWidth,
  bottom: props.bottom,
  display: props.display,
  flex: props.flex,
  flexBasis: props.flexBasis,
  flexDirection: props.flexDirection,
  flexGrow: props.flexGrow,
  flexShrink: props.flexShrink,
  flexWrap: props.flexWrap,
  height: props.height,
  justifyContent: props.justifyContent,
  left: props.left,
  margin: props.m,
  marginBottom: props.my || 0 + props.mb || 0,
  marginLeft: props.mx || 0 + props.ml || 0,
  marginRight: props.mx || 0 + props.mr || 0,
  marginTop: props.my || 0 + props.mt || 0,
  maxHeight: props.maxHeight,
  maxWidth: props.maxWidth,
  minHeight: props.minHeight,
  minWidth: props.minWidth,
  padding: props.p,
  paddingBottom: props.py,
  paddingLeft: props.px,
  paddingRight: props.px,
  paddingTop: props.pt,
  position: props.position,
  right: props.right,
  top: props.top,
  width: props.width,
}))

export default Box
