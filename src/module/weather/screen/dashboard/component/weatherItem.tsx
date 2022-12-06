import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {Divider, MyIcon, WeatherIcon as WIcon} from '@my-component/index';
import {StackNavigationProp} from '@react-navigation/stack';

const Styles = StyleSheet.create({
  contentContainer: {padding: 20, flexDirection: 'row', alignItems: 'center'},
  cityText: {flex: 1, color: 'grey', fontSize: 20},
  iconsStyle: {width: 30, height: 30},
  temperatureText: {marginHorizontal: 15},
});

interface Props {
  navigation: StackNavigationProp<any, any>;
  weather: any;
}

class WeatherItem extends Component<Props> {
  constructor(props: Props) {
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
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View>
          <View style={[Styles.contentContainer]}>
            <Text style={[Styles.cityText]}>{cityName}</Text>
            <WIcon style={[Styles.iconsStyle]} icon={WeatherIcon} />
            <Text style={[Styles.temperatureText]}>
              {metric.Value + ' ' + metric.Unit}
            </Text>
            <MyIcon name="chevron-right" size={25} color="black" />
          </View>
          <Divider />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default WeatherItem;
