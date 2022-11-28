import React, {Component} from 'react';
import {
  AppState,
  View,
  ActivityIndicator,
  Appearance,
  Alert,
  Dimensions,
  Text,
  Button,
} from 'react-native';
import {setJSExceptionHandler} from 'react-native-exception-handler';

import PropTypes from 'prop-types';
import Styles from './style';
import {weather} from '@my-module/weather/weatherReducers';

const errorHandler = (e, isFatal) => {
  if (isFatal) {
    Alert.alert('Oops, terjadi kesalahan', e.message, [
      {
        text: 'Buka Ulang',
        onPress: () => {
          CodePush.restartApp();
        },
      },
    ]);
  } else {
    console.log(e);
  }
};

setJSExceptionHandler(errorHandler, false);

class Bootstrap extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.onAppStateChange);
  }

  componentDidUpdate(prevProps) {}

  onAppStateChange(nextAppState) {}

  onPress() {
    const {setErrorMessage} = this.props;
    setErrorMessage('');
  }

  warningSign(allertWarning) {
    if (!allertWarning) {
      return <View />;
    }
    return (
      <View
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
          backgroundColor: '#00000080',
          justifyContent: 'center',
          position: 'absolute',
          left: 0,
          top: 0,
        }}>
        <View style={{backgroundColor: '#fff', margin: 20, borderRadius: 10}}>
          <Text
            style={{
              fontSize: 25,
              alignSelf: 'center',
              color: '#f00',
              padding: 10,
            }}>
            ERROR
          </Text>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
              padding: 10,
              marginTop: -20,
            }}>
            <Text
              style={{
                fontSize: 15,
                alignSelf: 'center',
              }}>
              {allertWarning}
            </Text>
          </View>
          <Button
            title="OK"
            onPress={this.onPress}
            style={{padding: 10}}></Button>
        </View>
      </View>
    );
  }

  render() {
    const {children, style, errorAllert} = this.props;
    console.log(errorAllert);
    return (
      <View style={[Styles.container, style]}>
        {children}
        {this.warningSign(errorAllert)}
      </View>
    );
  }
}

Bootstrap.propTypes = {
  style: PropTypes.objectOf(String),
  children: PropTypes.node.isRequired,
  errorAllert: PropTypes.any,
  setErrorMessage: PropTypes.func,
};

export default Bootstrap;
