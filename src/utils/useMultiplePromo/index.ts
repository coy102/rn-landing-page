import { useMemo } from 'react'

import {
  flashDiscount,
  offers,
  promoGrabMart,
  restaurantRecomendation,
  spesialPromo,
} from './data'

const useMultiplePromo = () => {
  const memoFlashDiscount = useMemo(() => flashDiscount, [])
  const memoGrabMart = useMemo(() => promoGrabMart, [])
  const memoOffers = useMemo(() => offers, [])
  const memoRestaurant = useMemo(() => restaurantRecomendation, [])
  const memoSpesialPromo = useMemo(() => spesialPromo, [])

  return {
    memoFlashDiscount,
    memoGrabMart,
    memoOffers,
    memoRestaurant,
    memoSpesialPromo,
  }
}

export default useMultiplePromo
