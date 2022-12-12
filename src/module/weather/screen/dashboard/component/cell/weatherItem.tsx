import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {Divider, MyIcon, WeatherIcon as WIcon} from '@my-component/index';
import {SimpleWeatherObject} from '@my-module/weather/weatherTypes';
import {ColorPalete} from '@my-config/color';

const Styles = StyleSheet.create({
  contentContainer: {padding: 20, flexDirection: 'row', alignItems: 'center'},
  cityText: {flex: 1, color: ColorPalete.text.gray, fontSize: 20},
  iconsStyle: {width: 30, height: 30},
  temperatureText: {marginHorizontal: 15, width: 50, textAlign: 'center'},
});

interface Props {
  weather: SimpleWeatherObject;
}

export interface WeatherItemCellPressed {
  onCellPress: (weather: SimpleWeatherObject) => void;
}

type WeatherItemProps = Props & WeatherItemCellPressed;

class WeatherItem extends Component<WeatherItemProps> {
  constructor(props: WeatherItemProps) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const {weather, onCellPress} = this.props;
    onCellPress(weather);
  }

  render() {
    const {
      weather: {EnglishName: cityName},
      weather: {WeatherIcon},
    } = this.props;
    const metric = this.props.weather.Temperature?.Metric;
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View>
          <View style={[Styles.contentContainer]}>
            <Text style={[Styles.cityText]}>{cityName}</Text>
            <WIcon style={[Styles.iconsStyle]} icon={WeatherIcon} />
            <Text style={[Styles.temperatureText]}>
              {metric?.Value + ' ' + metric?.Unit}
            </Text>
            <MyIcon
              name="chevron-right"
              size={25}
              color={ColorPalete.icon.black}
            />
          </View>
          <Divider />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default WeatherItem;
