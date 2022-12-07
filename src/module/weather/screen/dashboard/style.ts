import {ColorPalete} from '@my-config/color';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  singleFlex: {flex: 1},
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
  },
  headerContainer: {paddingHorizontal: 20, paddingVertical: 10},
  titleContainer: {flexDirection: 'row', alignItems: 'center', paddingTop: 10},
  titleIconContainer: {
    height: 60,
    width: 60,
    marginLeft: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  loaderLabelStyle: {
    marginLeft: 20,
    color: ColorPalete.text.gray,
  },
});
