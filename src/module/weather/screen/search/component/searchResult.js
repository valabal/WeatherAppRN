import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import PropTypes, {any} from 'prop-types';
import {Icon} from 'react-native-elements';
import moment from 'moment';

class SearchResultCell extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const {navigation, item} = this.props;
    navigation.navigate('WeatherDetail', {
      cityId: item.Key,
      cityNames: item.LocalizedName,
    });
  }

  render() {
    const {item} = this.props;
    console.log(item);
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View>
          <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{flex: 1, color: 'grey', fontSize: 15}}>
                {item.LocalizedName}
              </Text>
              <Icon name="chevron-right" size={25} color="black" />
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

SearchResultCell.propTypes = {
  item: PropTypes.objectOf(any).isRequired,
  navigation: PropTypes.objectOf(String).isRequired,
};

export default SearchResultCell;
