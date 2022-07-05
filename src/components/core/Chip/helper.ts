import { colors, Severity } from '../../../styles/theme'

export const SEVERITY_MAPPING = {
  [Severity.warning]: {
    backgroundColor: colors.palette.customPeach,
    color: colors.text.primary,
  },
  [Severity.neutral]: {
    backgroundColor: colors.palette.neutral,
    color: colors.background.default,
  },
}
