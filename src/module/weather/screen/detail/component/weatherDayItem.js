import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes, { any } from 'prop-types';
import { Icon } from 'react-native-elements';
import moment from "moment";

class WeatherDayItem extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        const {item} = this.props;
        const dt = moment(item.LocalObservationDateTime).format('DD MMM hh:mm');
        const iconNumber = item.WeatherIcon.toString().padStart(2, "0");

        return(  
        <View>
            <View style={{padding: 20}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{flex: 1, color: 'grey', fontSize:20}}>{dt}</Text>
              <Image
              style={{width: 20,
                height: 20}}
                  source={{
                    uri: `https://developer.accuweather.com/sites/default/files/`+iconNumber+`-s.png`,
                  }}
                />
              <Text style={{marginHorizontal: 15}}>{item.Temperature.Metric.Value+" "+item.Temperature.Metric.Unit}</Text>
              </View>
            </View>
            <View style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
            }}
          /></View>);
    }

}

WeatherDayItem.propTypes = {
    item: PropTypes.objectOf(any).isRequired
};

export default WeatherDayItem;