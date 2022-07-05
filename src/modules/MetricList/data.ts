import { imgUrl } from '../../config/constant'
import { numberSeparator } from '../../utils/number'

export const metrics = [
  {
    img: `${imgUrl}/metric/ovo.png`,
    title: 'Balance',
    value: `Rp. ${numberSeparator(24000)}`,
  },
  {
    img: `${imgUrl}/metric/pedulilindungi.png`,
    title: 'Scan',
    value: 'PeduliLindungi',
  },
  {
    id: 3,
    img: `${imgUrl}/metric/wallet.png`,
    title: 'Top Up',
    value: 'Wallet',
  },
  {
    img: `${imgUrl}/metric/point.png`,
    title: 'Use Points',
    value: numberSeparator(100000),
  },
]
