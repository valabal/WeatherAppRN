import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Styles from './style';
import {SearchField, WeatherTable} from './component';
import {Props as WeatherTableProps} from './component/weatherTable';
import {Image} from 'react-native-elements';
import {WeatherIcon2} from '@my-config/image';
import {strings} from '@my-config/string';
import {useDashboardList} from './hook/useDashboard';

interface Props extends WeatherTableProps {}

export default function Dashboard(props: Props) {
  const {navigation, getWeatherList, isFetch} = props;
  const [{getMore, refreshList}] = useDashboardList(getWeatherList, isFetch);

  return (
    <SafeAreaView style={Styles.singleFlex}>
      <View style={[Styles.headerContainer]}>
        <SearchField
          onPress={() => {
            navigation.navigate('SearchPage');
          }}
        />
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
        <WeatherTable
          {...props}
          getMore={getMore}
          refreshList={refreshList}
          onCellPress={(weather) => {
            navigation.navigate('WeatherDetail', {
              weather: weather,
              cityId: weather.Key,
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
}
