import { imgUrl } from '../../config/constant'

export interface PromoData {
  id: number
  img: string
  title: string
  subTitle?: string
  info?: string
  price?: number
  promo?: string
  rating?: number
}

export const promo: PromoData[] = [
  {
    id: 1,
    img: `${imgUrl}/promo/promo1.PNG`,
    title: 'Libur sekolah waktunya jalan-jalan!',
    subTitle: '',
  },
  {
    id: 2,
    img: `${imgUrl}/promo/promo2.PNG`,
    title: 'Cuma Rp1, promonya unlimited!',
    subTitle: 'Sponsored by Grab Indonesia',
  },
]
