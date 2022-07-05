import { imgUrl } from './config/constant'
import AccountScreen from './screens/account'
import ActivityScreen from './screens/activity'
import HomeScreen from './screens/home'
import MessageScreen from './screens/messages'
import PaymentScreen from './screens/payment'

export const routeIcon = {
  Home: {
    icon: `${imgUrl}/icons/explore-icon.PNG`,
    iconActive: `${imgUrl}/icons/explore-active-icon.PNG`,
  },
  Activity: {
    icon: `${imgUrl}/icons/activity-icon.PNG`,
    iconActive: `${imgUrl}/icons/activity-active-icon.PNG`,
  },
  Payment: {
    icon: `${imgUrl}/icons/payment-icon.PNG`,
    iconActive: `${imgUrl}/icons/payment-active-icon.PNG`,
  },
  Messages: {
    icon: `${imgUrl}/icons/messsage-icon.PNG`,
    iconActive: `${imgUrl}/icons/message-active-icon.PNG`,
  },
  Account: {
    icon: `${imgUrl}/icons/account-icon.PNG`,
    iconActive: `${imgUrl}/icons/account-active-icon.PNG`,
  },
} as any

const rootRoutes = [
  {
    id: 1,
    name: 'Home',
    screen: HomeScreen,
  },
  {
    id: 2,
    name: 'Activity',
    screen: ActivityScreen,
  },
  {
    id: 3,
    name: 'Payment',
    screen: PaymentScreen,
  },
  {
    id: 4,
    name: 'Messages',
    screen: MessageScreen,
  },
  {
    id: 5,
    name: 'Account',
    screen: AccountScreen,
  },
]

export default rootRoutes
