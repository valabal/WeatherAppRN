import React from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SimpleWeatherObject} from '@my-module/weather/weatherTypes';
import {ActivityIndicator} from 'react-native';
import {ColorPalete} from '@my-config/color';
import {UseDashboardProps} from '../hook/useDashboard';
import WeatherItem, {WeatherItemCellPressed} from './cell/weatherItem';

export interface Props {
  navigation: StackNavigationProp<any, any>;
  getWeatherList: Function;
  weatherList: Array<SimpleWeatherObject>;
  weatherParams?: any;
  isFetch: boolean;
  error?: string;
  isRefreshed?: boolean;
}

type DashboardProps = Props & UseDashboardProps & WeatherItemCellPressed;

const Styles = StyleSheet.create({
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

export default function WeatherTable(props: DashboardProps) {
  const {weatherList, getMore, refreshList, onCellPress} = props;

  const renderItem = ({item}: ListRenderItemInfo<SimpleWeatherObject>) => {
    return <WeatherItem onCellPress={onCellPress} weather={item} />;
  };

  const renderFooter = () => {
    return (
      <View style={Styles.footerContainer}>
        <ActivityIndicator />
        <Text style={Styles.loaderLabelStyle}>Loading...</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={weatherList}
      renderItem={renderItem}
      keyExtractor={(item) => item.KeyIndex}
      ListFooterComponent={renderFooter}
      onEndReachedThreshold={0.2}
      onEndReached={getMore}
      refreshControl={
        <RefreshControl
          refreshing={props.isRefreshed ?? false}
          onRefresh={refreshList}
        />
      }
    />
  );
}
