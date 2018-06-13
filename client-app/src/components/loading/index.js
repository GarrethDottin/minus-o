import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

import splashScreenImage from '../../../assets/splash.png';

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      screen: navigation.getParam('screen', 0)
    }
  }

  componentDidMount() {
    this.goToHome()
  }

  goToHome = () => {
    const { navigation } = this.props;
    const { screen } = this.state;
    navigation.navigate(screen ? 'Home' : 'App', { screen: screen + 1 });
  };

  render() {
    return (
      <View style={styles.f1}>
        <ImageBackground source={splashScreenImage} style={styles.f1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
});

export default LoadingScreen;
