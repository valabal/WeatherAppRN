import React from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import Styles from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {CitySearchWeatherObject} from '@my-module/weather/weatherTypes';
import {strings} from '@my-config/string';
import {SearchTable} from './component';
import {useSearchPage} from './hook/useSearchPage';

export type Props = {
  navigation: StackNavigationProp<any, any>;
  getCity: Function;
  cityList: Array<CitySearchWeatherObject>;
  refreshCity: Function;
};

export default function SearchPage(props: Props) {
  const {getCity, refreshCity, navigation} = props;
  const {cityName, onSearchCity} = useSearchPage(getCity, refreshCity);

  return (
    <SafeAreaView style={Styles.singleFlex}>
      <View style={Styles.container}>
        <Text style={Styles.titleLabel}>{strings.searchTitle}</Text>
      </View>
      <View style={Styles.textInputContainer}>
        <TextInput
          placeholder={strings.searchPlaceholder}
          style={Styles.texInputStyle}
          onChangeText={onSearchCity}
          value={cityName}
        />
      </View>
      <View style={Styles.singleFlex}>
        <SearchTable
          {...props}
          onCellPress={(cityId, cityNames) => {
            navigation.navigate('WeatherDetail', {
              cityId: cityId,
              cityNames: cityNames,
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
}
