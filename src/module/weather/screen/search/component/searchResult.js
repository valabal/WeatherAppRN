import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import PropTypes, {any} from 'prop-types';
import {Icon} from 'react-native-elements';
import {Divider} from '@my-component/index';

const Styles = {
  mainContainer: {paddingHorizontal: 20, paddingVertical: 15},
  titleContainer: {flexDirection: 'row', alignItems: 'center'},
  title: {flex: 1, color: '#777', fontSize: 15},
  icon: {size: 25, color: '#000'},
};

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
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View>
          <View style={Styles.mainContainer}>
            <View style={Styles.titleContainer}>
              <Text style={Styles.title}>{item.LocalizedName}</Text>
              <Icon
                name="chevron-right"
                size={Styles.icon.size}
                color={Styles.icon.color}
              />
            </View>
          </View>
          <Divider />
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
