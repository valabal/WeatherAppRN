import React from 'react';
import {View, TextInput, TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'react-native-elements';

const Styles = {
  container: {
    backgroundColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    placeholderColor: '#00f',
  },
  iconStyle: {size: 25, color: '#000'},
};

export default (navigate) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigate.navigation('SearchPage');
      }}>
      <View style={[Styles.container]}>
        <TextInput
          style={[Styles.textInput]}
          placeholder="Search Weather By City name"
          placeholderTextColor={Styles.textInput.placeholderColor}
          editable={false}
        />
        <Icon
          name="search"
          size={Styles.iconStyle.size}
          color={Styles.iconStyle.color}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
