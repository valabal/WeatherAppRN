import MyIcon from '@my-component/MyIcon';
import {ColorPalete} from '@my-config/color';
import {strings} from '@my-config/string';
import React from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: ColorPalete.main.gray,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
  },
});

export type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

export default (props: Props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={Styles.container}>
        <TextInput
          style={[Styles.textInput]}
          placeholder={strings.searchPlaceholder}
          placeholderTextColor={ColorPalete.text.blue}
          editable={false}
        />
        <MyIcon name="search" size={25} color={ColorPalete.icon.black} />
      </View>
    </TouchableWithoutFeedback>
  );
};
