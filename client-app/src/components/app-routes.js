import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TakeMobileInput from './take-mobile-input';
import Home from './home';

export default createStackNavigator({
  Home,
  TakeMobileInput,
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
  mode: 'modal'
})
