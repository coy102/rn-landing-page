import { imgUrl } from '../../config/constant'
import { PromoData } from '../useSinglePromo/data'

export interface PromoMultiData {
  headerLabel: string
  items: PromoData[]
}

export const flashDiscount: PromoMultiData = {
  headerLabel: 'Diskon kilat GrabFood',
  items: [
    {
      id: 1,
      title: 'Nantikan promo diskon kilat',
      img: `${imgUrl}/promo/kilat1.jpg`,
      soon: true,
    },
    {
      id: 2,
      title: 'Pesan dari mana aja buat kesayangan',
      img: `${imgUrl}/promo/kilat2.PNG`,
      soon: false,
    },
  ],
}

export const offers: PromoMultiData = {
  headerLabel: 'Food for you',
  items: [
    {
      id: 1,
      title: 'Nasi Goreng Spesial',
      subTitle: 'Nasi Goreng Abi - Ciakar',
      img: `${imgUrl}/product/product1.PNG`,
      price: 25000,
    },
    {
      id: 2,
      title: 'Tahu goreng',
      subTitle: 'Martabak Idola - Curug Wetan',
      img: `${imgUrl}/product/product2.PNG`,
      price: 2000,
    },
    {
      id: 3,
      title: 'Spesial seafood mix',
      subTitle: 'Seafod Mix - Curug',
      img: `${imgUrl}/product/product3.PNG`,
      price: 50000,
    },
    {
      id: 4,
      title: 'Keju Susu',
      subTitle: 'Martabak omcu - Cikupa',
      img: `${imgUrl}/product/product4.PNG`,
      price: 39000,
    },
    {
      id: 5,
      title: 'Ayam beldag + nasi',
      subTitle: 'Ayam Geprek Seuhah mang odong - Curug',
      img: `${imgUrl}/product/product5.PNG`,
      price: 10000,
    },
    {
      id: 6,
      title: 'Tolak Angin pegel linu',
      subTitle: 'JAMU DIKAFE 417 - Serdang',
      img: `${imgUrl}/product/product6.PNG`,
      price: 12000,
    },
  ],
}
