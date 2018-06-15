import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Loading from '../components/loading';
import Home from '../views/home/index';
import MobileInput from '../views/mobile-input/index';
import MobileVerification from '../views/mobile-verification/index';
import Introduction from '../views/introduction/index';
import transitionConfig from './transition-config';

export default createStackNavigator({
  Home,
  Loading,
  MobileInput,
  MobileVerification,
  Introduction
}, {
  initialRouteName: 'Loading',
  headerMode: 'none',
  mode: 'modal',
  transitionConfig,
});
