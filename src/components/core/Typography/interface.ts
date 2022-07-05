import { SimpleStyleFunction, PropsFor } from '../../../config/intefaces'

let typography: SimpleStyleFunction<
  | 'color'
  | 'fontFamily'
  | 'fontSize'
  | 'fontStyle'
  | 'fontWeight'
  | 'letterSpacing'
  | 'lineHeight'
  | 'textAlign'
>

export type TypographyProps = PropsFor<typeof typography>
