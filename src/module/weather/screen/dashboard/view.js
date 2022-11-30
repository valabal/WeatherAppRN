import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import PropTypes, {any} from 'prop-types';
import Styles from './style';
import {WeatherItem, SearchField} from './component';

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
    const {weatherList, navigation} = this.props;
    return (
      <SafeAreaView style={Styles.singleFlex}>
        <View style={[Styles.titleContainer]}>
          <SearchField navigation={navigation.navigate} />
          <Text style={[Styles.title]}>Weather App</Text>
        </View>
        <View style={Styles.singleFlex}>
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
