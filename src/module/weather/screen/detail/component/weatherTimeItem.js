import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import PropTypes, { any } from 'prop-types';
import { Icon } from 'react-native-elements';
import moment from "moment";

const Spacer = () => (
    <View style={{height: 10}}/>
  );

class WeatherTimeItem extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      const {item} = this.props;
      const dt = moment(item.DateTime).format('HH:mm');
      const iconNumber = item.WeatherIcon.toString().padStart(2, "0");

        return(  
        <View style={{width: 60, paddingTop: 10}}>
            <View style={{alignItems: 'center'}}>
            <Text style={{color: 'grey'}}>{dt}</Text>
            <Spacer/>
            <Image
            style={{width: 30,
              height: 30}}
                source={{
                  uri: 'https://developer.accuweather.com/sites/default/files/'+iconNumber+'-s.png',
                }}
              />
            <Spacer/>
            <Text>{item.Temperature.Value + ' ' + item.Temperature.Unit}</Text>
            </View>
          </View>);
    }

}

WeatherTimeItem.propTypes = {
  item: PropTypes.objectOf(any).isRequired
};


export default WeatherTimeItem;

