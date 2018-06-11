import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { LinearGradient } from 'expo';

class GradientView extends React.Component {
  render() {
    const { isRed, children, style = {} } = this.props;
    const colors = isRed ? ['#119B8B', '#0F788E', '#0A5D8F'] : ['#119B8B', '#0F788E', '#0A5D8F'];
    return (
      <View style={[styles.container, style]}>
        <LinearGradient colors={colors} style={styles.gradientView}>
          {!!children && children}
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#46bfb0'
  },
  gradientView: {
    height: '100%',
    width: '100%',
  }
});

export default GradientView;
