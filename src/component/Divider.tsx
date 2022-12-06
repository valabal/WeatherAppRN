import {ColorPalete} from '@my-config/color';
import React, {Component} from 'react';
import {View} from 'react-native';

const Style = {
  divider: {
    height: 1,
    borderBottomColor: ColorPalete.border.secondary,
    borderBottomWidth: 1,
  },
};

class Divider extends Component {
  render() {
    return <View style={Style.divider} />;
  }
}

export default Divider;
