import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {Divider} from '@my-component/index';
import PropTypes, {any} from 'prop-types';
import {Icon} from 'react-native-elements';

const Styles = {
  contentContainer: {padding: 20, flexDirection: 'row', alignItems: 'center'},
  cityText: {flex: 1, color: 'grey', fontSize: 20},
  iconsStyle: {width: 30, height: 30},
  temperatureText: {marginHorizontal: 15},
};

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
          <View style={[Styles.contentContainer]}>
            <Text style={[Styles.cityText]}>{cityName}</Text>
            <Image
              style={[Styles.iconsStyle]}
              source={{
                uri:
                  'https://developer.accuweather.com/sites/default/files/' +
                  iconNumber +
                  '-s.png',
              }}
            />
            <Text style={[Styles.temperatureText]}>
              {metric.Value + ' ' + metric.Unit}
            </Text>
            <Icon name="chevron-right" size={25} color="black" />
          </View>
          <Divider />
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
