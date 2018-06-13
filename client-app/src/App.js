import React, { Component } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { RootStack } from './routes';
import store from './store';

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
