import { useMemo } from 'react'

import { flashDiscount, offers } from './data'

const useMultiplePromo = () => {
  const memoFlashDiscount = useMemo(() => flashDiscount, [])
  const memoOffers = useMemo(() => offers, [])

  return {
    memoFlashDiscount,
    memoOffers,
  }
}

export default useMultiplePromo
