import React, {Component} from 'react';
import {Provider} from 'react-redux';
import bootstrapSagas from '@my-bootstrap/bootstrapSagas';
import {runSaga, store} from '@my-config/store';
import Bootstrap from '@my-bootstrap/component';
import AppNavigator from '@my-navigation/AppNavigator';

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
