import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  singleFlex: {flex: 1},
  justifyContent: {justifyContent: 'center'},
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    height: 100,
  },
  unidentifiedLabel: {textAlign: 'center'},
  headerSubContainer: {paddingHorizontal: 20, paddingVertical: 10},
  headerCityLabel: {fontSize: 30},
  forecastContainer: {
    height: 100,
  },
  temperatureText: {marginHorizontal: 15, fontSize: 25},
  weatherIcon: {width: 50, height: 50},
});
