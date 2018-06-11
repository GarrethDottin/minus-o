import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import validator from 'validator';
import { loginUser } from '../../redux/actions/auth.action';

class Login extends React.Component {

  state = {
    credentials: {},
    error: {},
    errorMessage: '',
  };

  handleLogin = () => {
    const { credentials } = this.state;
    const { loginUser, navigation } = this.props;
    if (this.validateCredentials(credentials)) {
      loginUser(credentials)
        .then(() => navigation.navigate('App'))
        .catch((e) => this.setState({ errorMessage: e.error }));
    }
  };

  handleChange = (name, value) => {
    const credentials = _.cloneDeep(this.state.credentials);
    credentials[name] = value;
    this.setState({ credentials });
  };

  validateCredentials = ({ email, password }) => {
    const error = {};
    if (!email || (email && !validator.isEmail(email))) error.email = true;
    if (!password) error.password = true;
    this.setState({ error, errorMessage: '' });
    return !_.keys(error).length;
  };

  render() {
    const { credentials, error, errorMessage } = this.state;
    return (
      <View style={{ marginTop: 50 }}>
        <TextInput
          autoCapitalize={'none'}
          value={credentials.email}
          placeholder={'Email'}
          onChangeText={text => this.handleChange('email', text)} />
        <TextInput
          autoCapitalize={'none'}
          value={credentials.password}
          placeholder={'Password'}
          onChangeText={text => this.handleChange('password', text)} />
        <Button
          onPress={this.handleLogin}
          title="Login"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  labelItem: {
    marginLeft: 0,
  },
  loginButton: {
    marginTop: 10,
  },
  errorLabel: {
    color: 'red',
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Login);
