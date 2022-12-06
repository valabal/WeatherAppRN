import React, {Component} from 'react';
import {Icon} from 'react-native-elements';

export type Props = {
  name: string;
  size: number;
  color: string;
};

class MyIcon extends Component<Props> {
  render() {
    const {name, size, color} = this.props;
    return (
      <Icon name={name} size={size} color={color} tvParallaxProperties={null} />
    );
  }
}

export default MyIcon;
