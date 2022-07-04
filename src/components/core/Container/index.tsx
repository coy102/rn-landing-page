import React, { ReactNode } from 'react'

import Box from '../Box'

interface Props {
  children: ReactNode
}

const Container = ({ children }: Props) => (
  <Box display="flex" justifyContent="center" my={10} mx={10}>
    {children}
  </Box>
)

export default Container
