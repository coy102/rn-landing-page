import { useMemo } from 'react'

import { flashDiscount, offers, restaurantRecomendation } from './data'

const useMultiplePromo = () => {
  const memoFlashDiscount = useMemo(() => flashDiscount, [])
  const memoOffers = useMemo(() => offers, [])
  const memoRestaurant = useMemo(() => restaurantRecomendation, [])

  return {
    memoFlashDiscount,
    memoOffers,
    memoRestaurant,
  }
}

export default useMultiplePromo
