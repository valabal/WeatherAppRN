import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes, {any} from 'prop-types';
import {Icon} from 'react-native-elements';
import moment from 'moment';
import {TemperatureLabel, WeatherIcon, Divider} from '@my-component/index';

const Styles = {
  mainContainer: {padding: 20, flexDirection: 'row', alignItems: 'center'},
  timeTextStyle: {flex: 1, color: '#777', fontSize: 20},
  weatherIconStyle: {width: 20, height: 20},
  temperatureStyle: {marginHorizontal: 15},
};

class WeatherDayItem extends Component {
  constructor(props) {
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
            metric={item.Temperature.Metric}
          />
        </View>
        <Divider />
      </View>
    );
  }
}

WeatherDayItem.propTypes = {
  item: PropTypes.objectOf(any).isRequired,
};

export default WeatherDayItem;
