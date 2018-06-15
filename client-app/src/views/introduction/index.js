import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import GradientView from '../../components/gradient-view';
import { textColors } from '../../constants';
import CheckBox from 'react-native-checkbox';


class Introduction extends React.Component {
  state = {
    name: '',
    isConfirmed: false,
  };

  handleNextScreen = () => {
    const { navigate } = this.props.navigation;
    navigate('Home');
  };
  handleNameChange = (name) => {
    this.setState({
      name,
    });
  };
  handleConfirmationChange = (isConfirmed) => {
    this.setState({
      isConfirmed,
    });
  };
  renderPhotoView = () => {
    const nextStep = 'The next steps includes a brief video describing\n' +
      'how to administer NARCAN, followed by some\n' +
      'helpful tips. You must complete all steps to\n' +
      'receive ';
    const confirmationText = 'Please confirm you are atleast above the ages of 18';
    return (
      <View style={styles.container}>
        <View style={{ flex: 7 }}>
          <View style={styles.photoViewContainer}>
            <TouchableOpacity onPress={() => console.log('open camera')}>
              <View style={styles.photoView} />
              <Text style={[styles.title, { color: '#fff' }]}>Photo Required</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.photoViewContainer}>
            <TextInput
              placeholder={'Enter Name'}
              autoCapitalize={'none'}
              underlineColorAndroid={'transparent'}
              style={styles.input}
              value={this.state.name}
              onChangeText={name => this.handleNameChange(name)} />
            <Text style={styles.title}>
              {nextStep}<Text style={[styles.title, { color: '#fff' }]}>free naloxone from our partners.</Text>
            </Text>
            <View style={styles.confirmationView}>
              <CheckBox
                label={confirmationText}
                labelStyle={styles.title}
                containerStyle={{ backgroundColor: '#fff' }}
                checked={this.state.isConfirmed}
                onChange={this.handleConfirmationChange}
              />
            </View>
          </View>
        </View>
        <View style={{ flex: 3, backgroundColor: 'purple' }} />
      </View>
    );
  };

  render() {
    return (
      <GradientView>
        <ScrollView style={styles.container} pagingEnabled horizontal>
          <View style={styles.componentView}>
            {this.renderPhotoView()}
          </View>
          <View style={styles.componentView} />
        </ScrollView>
      </GradientView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  componentView: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  input: {
    width: '80%',
    fontSize: 15,
    color: textColors.blue,
    borderColor: textColors.white,
    borderWidth: 3,
    borderRadius: 9,
    paddingVertical: 9,
    paddingHorizontal: 15,
  },
  title: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 15,
    textAlign: 'center',
    color: textColors.blue,
    lineHeight: 20,
  },
  photoViewsssss: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
  },
  photoViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});

export default Introduction;
