import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';
import {TemperatureLabel, WeatherIcon, Divider} from '@my-component/index';
import {WeatherDayObject} from '@my-module/weather/weatherTypes';
import {ColorPalete} from '@my-config/color';

const Styles = StyleSheet.create({
  mainContainer: {padding: 20, flexDirection: 'row', alignItems: 'center'},
  timeTextStyle: {flex: 1, color: ColorPalete.text.lightgray, fontSize: 20},
  weatherIconStyle: {width: 20, height: 20},
  temperatureStyle: {marginHorizontal: 15},
});

export interface Props {
  item: WeatherDayObject;
}

class WeatherDayItem extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {item} = this.props;
    const dt = moment(item.LocalObservationDateTime).format('DD MMM hh:mm');

    return (
      <View>
        <View style={Styles.mainContainer}>
          <Text style={Styles.timeTextStyle}>{dt}</Text>
          <WeatherIcon
            style={Styles.weatherIconStyle}
            icon={item.WeatherIcon}
          />
          <TemperatureLabel
            style={Styles.temperatureStyle}
            metric={item.Temperature?.Metric}
          />
        </View>
        <Divider />
      </View>
    );
  }
}

export default WeatherDayItem;
