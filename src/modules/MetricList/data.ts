import { imgUrl } from '../../config/constant'
import { numberSeparator } from '../../utils/number'

export const metrics = [
  {
    img: `${imgUrl}/metric/ovo.PNG`,
    title: 'Balance',
    value: `Rp. ${numberSeparator(24000)}`,
  },
  {
    img: `${imgUrl}/metric/pedulilindungi.PNG`,
    title: 'Scan',
    value: 'PeduliLindungi',
  },
  {
    id: 3,
    img: `${imgUrl}/metric/wallet.PNG`,
    title: 'Top Up',
    value: 'Wallet',
  },
  {
    img: `${imgUrl}/metric/point.PNG`,
    title: 'Use Points',
    value: numberSeparator(100000),
  },
]
