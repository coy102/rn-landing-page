import { useCallback } from 'react'

import { promo } from './data'

const useSinglePromo = () => {
  const getPromoById = useCallback(
    (promoId) =>
      promo.find((p) => p.id === promoId) || {
        id: 0,
        img: '',
        title: '',
        subTitle: '',
      },
    []
  )

  return {
    getPromoById,
  }
}

export default useSinglePromo
