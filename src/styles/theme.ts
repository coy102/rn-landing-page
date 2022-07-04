const fontSize = {
  10: '0.625rem',
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  22: '1.375rem',
  24: '1.5rem',
  28: '1.75rem',
  30: '1.875rem',
  32: '2rem',
  34: '2.125rem',
  40: '2.5rem',
  48: '3rem',
  50: '3.125rem',
  64: '4rem',
  72: '4.5rem',
}

const colors = {
  palette: {
    primary: '#02b252',
    secondary: 'f9f9f9',
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
    fontSize: fontSize[16],
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
