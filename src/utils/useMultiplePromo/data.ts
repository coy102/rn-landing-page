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

export const restaurantRecomendation: PromoMultiData = {
  headerLabel: 'Food for you',
  items: [
    {
      id: 1,
      title: "McDonald's - Citra Raya",
      subTitle: '2.6 km',
      img: `${imgUrl}/restaurant/restaurant1.PNG`,
      rating: 4.6,
      promo: '',
    },
    {
      id: 2,
      title: 'Ayam Geprek Gold Chick - Cikupa',
      subTitle: '2.4 km',
      img: `${imgUrl}/restaurant/restaurant2.PNG`,
      rating: 4.5,
      promo: 'HEMAT 60rb',
    },
    {
      id: 4,
      title: 'Jajanan Hitz - Mekar Bakti',
      subTitle: '4.6 km',
      img: `${imgUrl}/restaurant/restaurant3.PNG`,
      rating: 4.0,
      promo: 'Diskon 5% untuk Dua orang',
    },
    {
      id: 5,
      title: 'Nasi Goreng Spesial - Curug Kulon',
      subTitle: '2.6 km',
      img: `${imgUrl}/restaurant/restaurant4.PNG`,
      rating: 4.6,
      promo: 'Diskon 5% dengan Visa',
    },
    {
      id: 6,
      title: 'Gwed Foo and Drink',
      subTitle: '1.6 km',
      img: `${imgUrl}/restaurant/restaurant5.PNG`,
      rating: 4.2,
      promo: '',
    },
    {
      id: 3,
      title: 'RM Famili Sakato - Citra Raya',
      subTitle: '3.6 km',
      img: `${imgUrl}/restaurant/restaurant6.PNG`,
      rating: 4.7,
      promo: '',
    },
  ],
}

export const spesialPromo: PromoMultiData = {
  headerLabel: 'Promo unlimited spesial buat kamu',
  items: [
    {
      id: 1,
      title: 'Cuma Rp1, promonya unlimited',
      img: `${imgUrl}/promo/spesial1.PNG`,
    },
    {
      id: 2,
      title: 'Gratis ongkir tiap pesen makan',
      img: `${imgUrl}/promo/spesial2.PNG`,
    },
    {
      id: 4,
      title: 'Diskon terus-terusan',
      img: `${imgUrl}/promo/spesial3.PNG`,
    },
    {
      id: 5,
      title: 'Gratis ongkir tiap belanja',
      img: `${imgUrl}/promo/spesial4.PNG`,
    },
    {
      id: 6,
      title: 'Gratis ongkir tiap kirim barang',
      img: `${imgUrl}/promo/spesial5.PNG`,
    },
    {
      id: 3,
      title: 'Hemat banyak dengan GrabUnlimited',
      img: `${imgUrl}/promo/spesial6.PNG`,
    },
  ],
}

export const promoGrabMart: PromoMultiData = {
  headerLabel: 'Belanja pagi cepat & hemat',
  items: [
    {
      id: 1,
      title: 'Apel manis pagi hari',
      img: `${imgUrl}/promo/mart1.PNG`,
    },
    {
      id: 2,
      title: 'Buat favorit harga irit',
      img: `${imgUrl}/promo/mart2.PNG`,
    },
    {
      id: 4,
      title: 'Kiwi segar bernutrisi',
      img: `${imgUrl}/promo/mart3.PNG`,
    },
    {
      id: 5,
      title: 'Alpukat sehat harga hemat',
      img: `${imgUrl}/promo/mart4.PNG`,
    },
  ],
}
