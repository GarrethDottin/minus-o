import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import GradientView from '../gradient-view';

class TakeMobileInput extends React.Component {
  render() {
    return (
      <GradientView>
        <Text>Test</Text>
      </GradientView>
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

export default TakeMobileInput;
