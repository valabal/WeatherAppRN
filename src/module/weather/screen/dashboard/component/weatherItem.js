import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes, {any} from 'prop-types';
import {Icon} from 'react-native-elements';
import {weather} from '@my-module/weather/weatherReducers';

class WeatherItem extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const {navigation, weather} = this.props;
    navigation.navigate('WeatherDetail', {
      weather: weather,
      cityId: weather.Key,
    });
  }

  render() {
    const {
      weather,
      weather: {EnglishName: cityName},
      weather: {WeatherIcon},
      weather: {
        Temperature: {Metric: metric},
      },
    } = this.props;
    const iconNumber = WeatherIcon.toString().padStart(2, '0');
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View>
          <View style={{padding: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{flex: 1, color: 'grey', fontSize: 20}}>
                {cityName}
              </Text>
              <Image
                style={{width: 30, height: 30}}
                source={{
                  uri:
                    'https://developer.accuweather.com/sites/default/files/' +
                    iconNumber +
                    '-s.png',
                }}
              />
              <Text style={{marginHorizontal: 15}}>
                {metric.Value + ' ' + metric.Unit}
              </Text>
              <Icon name="chevron-right" size={25} color="black" />
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

WeatherItem.propTypes = {
  navigation: PropTypes.objectOf(String).isRequired,
  weather: PropTypes.objectOf(any).isRequired,
};

export default WeatherItem;
