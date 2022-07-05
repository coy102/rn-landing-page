import AccountScreen from './screens/account'
import ActivityScreen from './screens/activity'
import HomeScreen from './screens/home'
import MessageScreen from './screens/messages'
import PaymentScreen from './screens/payment'

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
    name: 'Home',
    screen: PaymentScreen,
  },
  {
    id: 4,
    name: 'Home',
    screen: MessageScreen,
  },
  {
    id: 5,
    name: 'Home',
    screen: AccountScreen,
  },
]

export default rootRoutes
