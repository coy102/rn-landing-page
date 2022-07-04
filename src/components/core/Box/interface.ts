import { SimpleStyleFunction, PropsFor } from '../../../config/intefaces'

let spacing: SimpleStyleFunction<'m' | 'mx' | 'my' | 'p' | 'px' | 'py'>

export type SpacingProps = PropsFor<typeof spacing>

let flexbox: SimpleStyleFunction<
  | 'display'
  | 'flexBasis'
  | 'flexDirection'
  | 'flexWrap'
  | 'justifyContent'
  | 'alignItems'
  | 'alignContent'
  | 'flex'
  | 'flexGrow'
  | 'flexShrink'
  | 'alignSelf'
>
export type FlexboxProps = PropsFor<typeof flexbox>

let colors: SimpleStyleFunction<'backgroundColor'>
export type ColorProps = PropsFor<typeof colors>
