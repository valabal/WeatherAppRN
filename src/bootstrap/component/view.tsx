import React, {Component} from 'react';
import {
  AppState,
  View,
  Alert,
  StyleProp,
  ViewStyle,
  AppStateStatus,
} from 'react-native';
import {setJSExceptionHandler} from 'react-native-exception-handler';

import Styles from './style';
import {WarningSign} from '@my-component/index';
import {strings} from '@my-config/string';

export type Props = {
  style: StyleProp<ViewStyle>;
  children?: React.ReactNode; // read more https://dev.to/debs_obrien/typescript-and-react-children-4epg
  errorAllert: string;
  setErrorMessage: Function;
};

const errorHandler = (e: Error, isFatal: boolean) => {
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

class Bootstrap extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.onAppStateChange);
    //setting the language
    strings.setLanguage('en');
  }

  //componentDidUpdate(prevProps: Props) {}

  onAppStateChange(_: AppStateStatus) {}

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

export default Bootstrap;
