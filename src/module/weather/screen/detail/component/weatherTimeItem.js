import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes, {any} from 'prop-types';
import moment from 'moment';
import {TemperatureLabel, WeatherIcon} from '@my-component/index';

const Styles = {
  mainContainer: {alignItems: 'center', width: 60, paddingTop: 10},
  timeStyle: {color: '#777'},
  weatherIcon: {width: 30, height: 30},
  spacer: {height: 10},
};

const Spacer = () => <View style={Styles.spacer} />;

class WeatherTimeItem extends Component {
  constructor(props) {
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

WeatherTimeItem.propTypes = {
  item: PropTypes.objectOf(any).isRequired,
};

export default WeatherTimeItem;
