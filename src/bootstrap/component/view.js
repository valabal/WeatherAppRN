import React, {Component} from 'react';
import {
  AppState,
  View,
  ActivityIndicator,
  Appearance,
  Alert,
  Text,
  Button,
} from 'react-native';
import {setJSExceptionHandler} from 'react-native-exception-handler';

import PropTypes from 'prop-types';
import Styles from './style';
import {weather} from '@my-module/weather/weatherReducers';

import {WarningSign} from '@my-component/index';

const errorHandler = (e, isFatal) => {
  if (isFatal) {
    Alert.alert('Oops, terjadi kesalahan', e.message, [
      {
        text: 'Buka Ulang',
        onPress: () => {
          // reset the app
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

  render() {
    const {children, style, errorAllert} = this.props;
    return (
      <View style={[Styles.container, style]}>
        {children}
        {<WarningSign alertWarning={errorAllert} onPress={this.onPress} />}
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
