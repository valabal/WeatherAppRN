import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import PropTypes, {any} from 'prop-types';
import Styles from './style';
import {WeatherItem, SearchField} from './component';
import {Icon} from 'react-native-elements';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    //ini perlu buat mengikat function ke propsnya..
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({item}) {
    const {navigation} = this.props;
    return <WeatherItem navigation={navigation} weather={item} />;
  }

  componentDidMount() {
    const {getWeatherList} = this.props;
    getWeatherList();
  }

  render() {
    const {style, weatherList, navigation} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={[Styles.titleContainer]}>
          <SearchField navigation={navigation.navigate} />
          <Text style={[Styles.title]}>Weather App</Text>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={weatherList}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.Key}
          />
        </View>
      </SafeAreaView>
    );
  }
}

Dashboard.propTypes = {
  navigation: PropTypes.objectOf(String).isRequired,
  getWeatherList: PropTypes.func.isRequired,
  weatherList: PropTypes.arrayOf(Object).isRequired,
  weatherParams: PropTypes.objectOf(any),
  isFetch: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Dashboard;
