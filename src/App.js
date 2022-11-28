import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import bootstrapSagas from '@my-bootstrap/bootstrapSagas';
import {runSaga, store, persistor} from '@my-config/store';
import Bootstrap from '@my-bootstrap/component';
import AppNavigator from '@my-navigation/AppNavigator';
import {Button} from 'react-native-elements';

runSaga(bootstrapSagas);

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Bootstrap>
          <AppNavigator />
        </Bootstrap>
      </Provider>
    );
  }
}

export default App;
