import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  ListRenderItemInfo,
} from 'react-native';
import useDebounce from '@my-util/hook';
import {SearchResultCell} from './component';
import Styles from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {CitySearchWeatherObject} from '@my-module/weather/weatherTypes';
import createRandomNumber from '@my-util/random';

export type Props = {
  navigation: StackNavigationProp<any, any>;
  getCity: Function;
  cityList: Array<CitySearchWeatherObject>;
  refreshCity: Function;
};

export default function SearchPage(props: Props) {
  const [cityName, onChangeText] = useState('');

  const debouncedSearchTerm = useDebounce(cityName, 500);

  const {navigation, getCity, refreshCity, cityList} = props;

  useEffect(() => {
    if (debouncedSearchTerm) {
      getCity(debouncedSearchTerm);
    }
  }, [getCity, debouncedSearchTerm]);

  useEffect(() => {
    refreshCity();
  }, [refreshCity]);

  const renderItem = ({item}: ListRenderItemInfo<CitySearchWeatherObject>) => (
    <SearchResultCell item={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={Styles.singleFlex}>
      <View style={Styles.container}>
        <Text style={Styles.titleLabel}>Search City</Text>
      </View>
      <View style={Styles.textInputContainer}>
        <TextInput
          placeholder="Input City Name"
          style={Styles.texInputStyle}
          onChangeText={onChangeText}
          value={cityName}
        />
      </View>
      <View style={Styles.singleFlex}>
        <FlatList
          data={cityList}
          renderItem={renderItem}
          keyExtractor={(item) => item.Key + createRandomNumber()}
        />
      </View>
    </SafeAreaView>
  );
}
