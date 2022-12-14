import React from 'react';
import {CitySearchWeatherObject} from '@my-module/weather/weatherTypes';
import {FlatList, ListRenderItemInfo} from 'react-native';
import SearchResultCell from './ cell/searchResult';
import createRandomNumber from '@my-util/random';

export interface Props {
  cityList: Array<CitySearchWeatherObject>;
}
type SearchViewProps = Props;

export default (props: SearchViewProps) => {
  const {cityList} = props;
  const renderItem = ({item}: ListRenderItemInfo<CitySearchWeatherObject>) => (
    <SearchResultCell item={item} />
  );
  return (
    <FlatList
      data={cityList}
      renderItem={renderItem}
      keyExtractor={(item) => item.Key + createRandomNumber()}
    />
  );
};
