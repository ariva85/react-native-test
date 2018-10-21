import Home from '../screens/Home';
import Details from '../screens/Details';
import Cart from '../screens/Cart';
import Modal from '../screens/Modal';
import { createStackNavigator } from 'react-navigation';
import routes from '../config/routes.json';

const MainStack = createStackNavigator(
  {
    [routes.home]: {
      screen: Home
    },
    [routes.details]: {
      screen: Details
    },
    [routes.cart]: {
      screen: Cart
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#2c3531' //() => EStyleSheet.value('$primaryColor')
      },
      headerTintColor: '#d1e8e2', //() => EStyleSheet.value('$secondaryColor'),
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
    [routes.modal]: {
      screen: Modal
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
