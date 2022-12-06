import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import Styles from './style';
import {WeatherItem, SearchField} from './component';
import {StackNavigationProp} from '@react-navigation/stack';
import {SimpleWeatherObject} from '@my-module/weather/weatherTypes';
import createRandomNumber from '@my-util/random';

interface Props {
  navigation: StackNavigationProp<any, any>;
  getWeatherList: Function;
  weatherList: Array<SimpleWeatherObject>;
  weatherParams?: any;
  isFetch: boolean;
  error?: string;
}

class Dashboard extends Component<Props> {
  constructor(props: Props) {
    super(props);
    //ini perlu buat mengikat function ke propsnya..
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({item}: ListRenderItemInfo<SimpleWeatherObject>) {
    const {navigation} = this.props;
    return <WeatherItem navigation={navigation} weather={item} />;
  }

  componentDidMount() {
    const {getWeatherList} = this.props;
    getWeatherList();
  }

  render() {
    const {weatherList, navigation} = this.props;
    return (
      <SafeAreaView style={Styles.singleFlex}>
        <View style={[Styles.titleContainer]}>
          <SearchField navigation={navigation} />
          <Text style={[Styles.title]}>Weather App</Text>
        </View>
        <View style={Styles.singleFlex}>
          <FlatList
            data={weatherList}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.Key + createRandomNumber()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Dashboard;
