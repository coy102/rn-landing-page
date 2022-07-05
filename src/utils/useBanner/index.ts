import { useMemo } from 'react'

import { bannerData } from './data'

const useBanner = () => {
  const memoBaner = useMemo(() => bannerData, [])

  return {
    memoBaner,
  }
}

export default useBanner
