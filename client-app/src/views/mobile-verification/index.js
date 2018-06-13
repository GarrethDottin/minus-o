import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import { Ionicons } from '@expo/vector-icons';
import GradientView from '../../components/gradient-view';
import { textColors } from '../../constants';

class MobileVerification extends React.Component {
  handleCodeSubmit = (verificationCode) => {
    console.log('Verification Code: ', verificationCode);
    this.props.navigation.navigate('Home');
  };

  render() {
    const title = 'Two-factor authentication';
    const description = 'Enter the 6 digit verification code sent to the\n' +
      'phone number. provided\n';
    const footerLinkText = 'Didn\'t get a verification code?';
    return (
      <GradientView>
        <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }}>
          <View style={styles.backView}>
            <Ionicons name="ios-arrow-back" size={22} color="white" />
            <Text style={[styles.backViewText]}>Back</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.note}>{description}</Text>
          <CodeInput
            ref="verificationCodeInputRef"
            className={'border-b'}
            codeLength={6}
            space={5}
            size={50}
            cellBorderWidth={2}
            activeColor='rgba(88, 201, 209, 1)'
            inactiveColor='rgba(88, 201, 209, 1.3)'
            inputPosition='center'
            onFulfill={this.handleCodeSubmit}
            codeInputStyle={{ fontSize: 22 }}
            containerStyle={{ flex: 0.2, marginBottom: 0, paddingBottom: 0, height: 10 }}
          />
          <Text style={styles.link}>{footerLinkText}</Text>
        </View>
      </GradientView>
    );
  }
}

const styles = StyleSheet.create({
  backView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 25,
  },
  backViewText: {
    marginLeft: 2,
    fontSize: 16,
    color: textColors.white,
  },
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  title: {
    marginTop: 100,
    marginBottom: 10,
    fontSize: 22,
    textAlign: 'center',
    color: textColors.white,
  },
  note: {
    textAlign: 'center',
    color: textColors.blue,
  },
  link: {
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: textColors.white,
    color: textColors.white,
  },
});

export default MobileVerification;
