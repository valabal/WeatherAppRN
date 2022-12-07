import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';
import Styles from './style';
import {WeatherItem, SearchField} from './component';
import {StackNavigationProp} from '@react-navigation/stack';
import {SimpleWeatherObject} from '@my-module/weather/weatherTypes';
import {Image} from 'react-native-elements';
import {WeatherIcon2} from '@my-config/image';
import {strings} from '@my-config/string';
import {ActivityIndicator} from 'react-native';
import {useEffect} from 'react';

interface Props {
  navigation: StackNavigationProp<any, any>;
  getWeatherList: Function;
  weatherList: Array<SimpleWeatherObject>;
  weatherParams?: any;
  isFetch: boolean;
  error?: string;
  isRefreshed?: boolean;
}

export default function Dashboard(props: Props) {
  const {getWeatherList, navigation, weatherList} = props;
  const [page, setPage] = useState(0);

  useEffect(() => {
    getWeatherList();
  }, [getWeatherList, page]);

  const renderItem = ({item}: ListRenderItemInfo<SimpleWeatherObject>) => {
    return <WeatherItem navigation={navigation} weather={item} />;
  };

  const fetchMoreList = () => {
    if (!props.isFetch) {
      setPage(page + 1);
    }
  };

  const _handleRefresh = () => {
    getWeatherList({isRefreshed: true});
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
    <SafeAreaView style={Styles.singleFlex}>
      <View style={[Styles.headerContainer]}>
        <SearchField navigation={navigation} />
        <View style={Styles.titleContainer}>
          <Text style={[Styles.title]}>{strings.title}</Text>
          <Image
            source={WeatherIcon2}
            style={Styles.titleIconContainer}
            height={null}
            width={null}
          />
        </View>
      </View>
      <View style={Styles.singleFlex}>
        <FlatList
          data={weatherList}
          renderItem={renderItem}
          keyExtractor={(item) => item.KeyIndex}
          ListFooterComponent={renderFooter}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreList}
          refreshControl={
            <RefreshControl
              refreshing={props.isRefreshed ?? false}
              onRefresh={_handleRefresh}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
}
