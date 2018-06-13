import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Pulse from '../../components/pulse';
import { textColors } from '../../constants';
import GradientView from '../../components/gradient-view';

import logo from '../../../assets/logo.jpg';
import handWithHeart from '../../../assets/hand-with-heart.jpg';
import SOSImage from '../../../assets/sos.jpg';

class Home extends React.Component {
  handleNextScreen = () => {
    const { navigate } = this.props.navigation;
    navigate('MobileInput');
  };

  render() {
    return (
      <GradientView>
        <View style={styles.topView}>
          <View style={styles.flex}>
            <View style={styles.flex}><Image source={logo} style={styles.logoImage} /></View>
            <View style={styles.flex}><Image source={handWithHeart} style={styles.handWithHeartImage} /></View>
          </View>
          <View style={styles.flex}>
            <TouchableOpacity onPress={this.handleNextScreen}>
              <Pulse
                color={textColors.lightBlue}
                style={{ position: 'relative', alignItems: 'center', justifyContent: 'center' }}
                containerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                image={{ source: SOSImage, style: styles.SOSImage }}
                numPulses={4}
                initialDiameter={100}
                diameter={250}
                speed={8}
                duration={1000}
              />
            </TouchableOpacity>
          </View>
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
    backgroundColor: textColors.lightBlue,
  },
  slideText: {
    color: textColors.white,
    fontSize: 25,
  },
  slideView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: 70,
    backgroundColor: textColors.white,
  },
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: { height: 100, width: 200, resizeMode: 'contain' },
  handWithHeartImage: { height: 100, width: 200, resizeMode: 'contain' },
  SOSImage: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
