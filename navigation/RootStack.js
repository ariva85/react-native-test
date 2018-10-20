import Home from '../screens/Home';
import Details from '../screens/Details';
import Cart from '../screens/Cart';
import Modal from '../screens/Modal';
import { createStackNavigator } from 'react-navigation';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Details: {
      screen: Details
    },
    Cart: {
      screen: Cart
    }
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

export const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    Modal: {
      screen: Modal
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
