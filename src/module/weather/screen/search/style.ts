import {ColorPalete} from '@my-config/color';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {paddingHorizontal: 20, paddingVertical: 10},
  singleFlex: {flex: 1},
  titleLabel: {fontSize: 30},
  textInputContainer: {paddingHorizontal: 20},
  texInputStyle: {
    height: 26,
    fontSize: 20,
    color: ColorPalete.text.black,
    borderBottomWidth: 1,
    borderBottomColor: ColorPalete.border.primary,
  },
});
