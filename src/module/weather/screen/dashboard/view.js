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
import WeatherItem from './component';
import {Icon} from 'react-native-elements';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const SearchField = (navigate) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigate.navigation('SearchPage');
      }}>
      <View
        style={{
          backgroundColor: '#ccc',
          paddingVertical: 15,
          paddingHorizontal: 10,
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <TextInput
          style={{flex: 1}}
          placeholder="Search Weather By City name"
          placeholderTextColor="blue"
          editable={false}
        />
        <Icon name="search" size={25} color="black" />
      </View>
    </TouchableWithoutFeedback>
  );
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    //ini perlu buat mengikat function ke propsnya..
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({item}) {
    const {navigation} = this.props;
    return <WeatherItem weather={item} navigation={navigation} />;
  }

  componentDidMount() {
    const {getWeatherList} = this.props;
    getWeatherList();
  }

  render() {
    const {style, weatherList, navigation} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <SearchField navigation={navigation.navigate} />
          <View style={{height: 10}} />
          <Text style={[Styles.title]}>Weather App</Text>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={weatherList}
            renderItem={this.renderItem}
            keyExtractor={(item) => item}
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
