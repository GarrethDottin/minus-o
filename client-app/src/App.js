import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import AuthLoadingScreen from './components/auth/auth-loading';
import AppStack from './components/app-routes';
import AuthStack from './components/auth-routes';
import store from './store';

const RootStack = createStackNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack,
}, {
  initialRouteName: 'AuthLoading',
  headerMode: 'none'
});

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <Provider store={store}>
          <RootStack />
        </Provider>
      </View>
    );
  }
}
