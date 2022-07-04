import { SimpleStyleFunction, PropsFor } from '../../../config/intefaces'

let typography: SimpleStyleFunction<
  | 'fontFamily'
  | 'fontSize'
  | 'fontStyle'
  | 'fontWeight'
  | 'letterSpacing'
  | 'lineHeight'
  | 'textAlign'
  | 'color'
>

export type TypographyProps = PropsFor<typeof typography>
