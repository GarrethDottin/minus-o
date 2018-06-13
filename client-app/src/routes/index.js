import { createStackNavigator } from 'react-navigation';
import LoadingScreen from '../components/loading';
import AppStack from './app-routes';

export const RootStack = createStackNavigator({
  Loading: LoadingScreen,
  App: AppStack,
}, {
  initialRouteName: 'Loading',
  headerMode: 'none',
});
