import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import GradientView from '../gradient-view';

import logo from '../../../assets/logo.jpg';
import handWithHeart from '../../../assets/hand-with-heart.jpg';
import SOSImage from '../../../assets/sos.jpg';

class Home extends React.Component {
  render() {
    return (
      <GradientView>
        <View style={styles.topView}>
          <View style={styles.flex}>
            <View style={styles.flex}><Image source={logo} style={styles.logoImage} /></View>
            <View style={styles.flex}><Image source={handWithHeart} style={styles.handWithHeartImage} /></View>
          </View>
          <View style={styles.flex}><Image source={SOSImage} style={styles.SOSImage} /></View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.slideText}>Slide to get help</Text>
          <View style={styles.slideView} elevation={11}>
          </View>
        </View>
      </GradientView>
    );
  }
}

const styles = StyleSheet.create({
  topView: {
    flex: 9,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#119B8B',
  },
  slideText: {
    color: '#fff',
    fontSize: 25,
  },
  slideView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: 70,
    backgroundColor: '#fff',
  },
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: { height: 100, width: 200, resizeMode: 'contain' },
  handWithHeartImage: { height: 100, width: 200, resizeMode: 'contain' },
  SOSImage: { height: 100, width: 200, resizeMode: 'contain' },
});

export default Home;
