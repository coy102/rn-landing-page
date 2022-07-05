export enum Severity {
  warning = 'warning',
  neutral = 'neutral',
  info = 'info',
}

export const colors = {
  palette: {
    primary: '#02b252',
    secondary: '#ececec',
    customPeach: '#fff4eb',
    customBlue: '#0564ff',
    customPink: '#fd7e74',
    neutral: '#000',
  },
  text: {
    primary: '#636363',
    secondary: '#8b8b8b',
  },
  background: {
    default: '#ffffff',
  },
}

const theme = {
  typography: {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  element: {
    boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.1)',
  },
  colors,
}

export default theme
