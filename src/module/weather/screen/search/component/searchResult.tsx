import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import {Divider, MyIcon} from '@my-component/index';
import {StackNavigationProp} from '@react-navigation/stack';

const Styles = StyleSheet.create({
  mainContainer: {paddingHorizontal: 20, paddingVertical: 15},
  titleContainer: {flexDirection: 'row', alignItems: 'center'},
  title: {flex: 1, color: '#777', fontSize: 15},
});

interface Props {
  navigation: StackNavigationProp<any, any>;
  item: any;
}

class SearchResultCell extends Component<Props> {
  constructor(props: Props) {
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
              <MyIcon name="chevron-right" size={25} color={'#000'} />
            </View>
          </View>
          <Divider />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default SearchResultCell;
