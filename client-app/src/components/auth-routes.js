import { createStackNavigator } from 'react-navigation';
import Login from './auth/login';

export default createStackNavigator({
  Login,
}, { headerMode: 'none', });
