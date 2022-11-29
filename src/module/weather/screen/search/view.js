import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes, {any} from 'prop-types';
import {Icon} from 'react-native-elements';
import useDebounce from '@my-util/hook';
import {SearchResultCell} from './component';
import Styles from './style';

export default function SearchPage({
  navigation,
  getCity,
  refreshCity,
  cityList,
}) {
  const [cityName, onChangeText] = useState('');

  const debouncedSearchTerm = useDebounce(cityName, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      getCity(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    refreshCity();
  }, []);

  const renderItem = ({item}) => (
    <SearchResultCell item={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Styles.container}>
        <Text style={Styles.titleLabel}>Search City</Text>
      </View>
      <View style={Styles.textInputContainer}>
        <TextInput
          placeholder="Input City Name"
          style={Styles.texInputStyle}
          onChangeText={onChangeText}
          value={cityName}
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={cityList}
          renderItem={renderItem}
          keyExtractor={(item) => item.Key}
        />
      </View>
    </SafeAreaView>
  );
}

SearchPage.propTypes = {
  navigation: PropTypes.objectOf(String).isRequired,
  getCity: PropTypes.func.isRequired,
  cityList: PropTypes.arrayOf(Object).isRequired,
  refreshCity: PropTypes.func.isRequired,
};
