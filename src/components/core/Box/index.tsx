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
  display: props.display,
  flex: props.flex,
  flexBasis: props.flexBasis,
  flexDirection: props.flexDirection,
  flexGrow: props.flexGrow,
  flexShrink: props.flexShrink,
  flexWrap: props.flexWrap,
  justifyContent: props.justifyContent,
  margin: props.m,
  marginBottom: props.my || 0 + props.mb || 0,
  marginLeft: props.mx || 0 + props.ml || 0,
  marginRight: props.mx || 0 + props.mr || 0,
  marginTop: props.my || 0 + props.mt || 0,
  padding: props.p,
  paddingBottom: props.py,
  paddingLeft: props.px,
  paddingRight: props.px,
  paddingTop: props.py,
  width: props.width,
  maxWidth: props.maxWidth,
  minWidth: props.minWidth,
  height: props.height,
  maxHeight: props.maxHeight,
  minHeight: props.minHeight,
  position: props.position,
  top: props.top,
  bottom: props.bottom,
  right: props.right,
  left: props.left,
}))

export default Box
