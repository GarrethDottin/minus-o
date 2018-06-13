import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { textColors } from '../../constants';
import GradientView from '../../components/gradient-view';
import MobileVerification from '../mobile-verification';

class MobileInput extends React.Component {
  state = {
    mobileNumber: '+1',
    mobileNumberLength: 12
  };

  handleMobileNumberChange = (mobileNumber) => {
    const { mobileNumberLength } = this.state;
    if (mobileNumber.length <= mobileNumberLength) {
      this.setState({ mobileNumber }, () => {
        if (mobileNumber.length === mobileNumberLength) {
          this.props.navigation.navigate('MobileVerification');
        }
      });
    }
  };

  render() {
    const title = 'Please enter your phone number';
    const footer = 'We will send a one-time SMS text to verify\n' +
      'your phone number.\n' +
      'Charges may apply depending on your carrier.\n';
    const footerWithPolicy = 'Click here to see our ';
    return (
      <GradientView>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <TextInput
            autoFocus
            autoCapitalize={'none'}
            underlineColorAndroid={'transparent'}
            keyboardType={'phone-pad'}
            style={styles.input}
            value={this.state.mobileNumber}
            onChangeText={mobileNumber => this.handleMobileNumberChange(mobileNumber)} />
          <Text style={styles.footer}>{footer}</Text>
          <View style={{ flexDirection: 'row', marginTop: -8 }}>
            <Text style={styles.footer}>{footerWithPolicy}</Text>
            <Text style={styles.link}>Privacy Policy.</Text>
          </View>
        </View>
      </GradientView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  input: {
    width: '90%',
    textAlign: 'center',
    fontSize: 24,
    color: textColors.blue,
    borderBottomColor: textColors.border,
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  title: {
    marginVertical: 100,
    fontSize: 22,
    color: textColors.white,
    textAlign: 'center',
  },
  footer: {
    color: textColors.blue,
    textAlign: 'center',
  },
  link: {
    borderBottomWidth: 2,
    borderBottomColor: textColors.white,
    color: textColors.white,
  },
});

export default MobileInput;
