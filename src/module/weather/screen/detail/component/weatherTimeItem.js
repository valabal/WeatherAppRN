import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes, {any} from 'prop-types';
import {Icon} from 'react-native-elements';
import moment from 'moment';
import {TemperatureLabel, WeatherIcon} from '@my-component/index';

const Spacer = () => <View style={{height: 10}} />;

const Styles = {
  mainContainer: {alignItems: 'center', width: 60, paddingTop: 10},
  timeStyle: {color: '#777'},
  weatherIcon: {width: 30, height: 30},
};

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
