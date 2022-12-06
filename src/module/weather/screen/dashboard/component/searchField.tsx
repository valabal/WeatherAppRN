import MyIcon from '@my-component/MyIcon';
import {ColorPalete} from '@my-config/color';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
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
  navigation: StackNavigationProp<any, any>;
};

export default (props: Props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.navigation.navigate('SearchPage');
      }}>
      <View style={Styles.container}>
        <TextInput
          style={[Styles.textInput]}
          placeholder="Search Weather By City name"
          placeholderTextColor={ColorPalete.text.blue}
          editable={false}
        />
        <MyIcon name="search" size={25} color={ColorPalete.icon.black} />
      </View>
    </TouchableWithoutFeedback>
  );
};
