import { useMemo } from 'react'

import { promo } from './data'

interface Param {
  promoId: number
}

const useHooks = ({ promoId }: Param) => {
  const memoPromo = useMemo(() => promo.find((p) => p.id === promoId), [])
  return {
    memoPromo,
  }
}

export default useHooks
