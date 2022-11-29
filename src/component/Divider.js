import React, {Component} from 'react';
import {View} from 'react-native';

class Divider extends Component {
  render() {
    return (
      <View
        style={{height: 1, borderBottomColor: '#ccc', borderBottomWidth: 1}}
      />
    );
  }
}

export default Divider;
