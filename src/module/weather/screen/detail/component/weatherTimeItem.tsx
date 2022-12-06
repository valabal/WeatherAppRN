import React, {Component} from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import {TemperatureLabel, WeatherIcon} from '@my-component/index';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  mainContainer: {alignItems: 'center', width: 60, paddingTop: 10},
  timeStyle: {color: '#777'},
  weatherIcon: {width: 30, height: 30},
  spacer: {height: 10},
});

const Spacer = () => <View style={Styles.spacer} />;

export interface Props {
  item: any;
}

class WeatherTimeItem extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {item} = this.props;
    const dt = moment(item.DateTime).format('HH:mm');

    return (
      <View style={Styles.mainContainer}>
        <Text style={Styles.timeStyle}>{dt}</Text>
        <Spacer />
        <WeatherIcon style={Styles.weatherIcon} icon={item.WeatherIcon} />
        <Spacer />
        <TemperatureLabel metric={item.Temperature} />
      </View>
    );
  }
}

export default WeatherTimeItem;
