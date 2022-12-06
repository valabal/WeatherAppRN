import {ColorPalete} from '@my-config/color';
import React, {Component} from 'react';
import {View, TextInput, Animated, StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  container: {paddingTop: 18},
  textInput: {
    height: 26,
    fontSize: 20,
    color: ColorPalete.text.black,
    borderBottomWidth: 1,
    borderBottomColor: ColorPalete.border.primary,
  },
});

interface Props {
  value: string;
  label: string;
}

class FloatingLabelInput extends Component<Props> {
  _animatedIsFocused!: Animated.Value;
  state = {
    isFocused: false,
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(
      this.props.value === '' ? 0 : 1,
    );
  }

  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== '' ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  render() {
    const {label, ...props} = this.props;
    const labelStyle = {
      // position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [ColorPalete.text.gray, ColorPalete.text.black],
      }),
    };
    return (
      <View style={Style.container}>
        <Animated.Text style={[labelStyle]}>{label}</Animated.Text>
        <TextInput
          {...props}
          style={Style.textInput}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}

export default FloatingLabelInput;
