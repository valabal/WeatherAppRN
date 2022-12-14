import React, {createContext, useContext} from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import {Divider, MyIcon} from '@my-component/index';
import {CitySearchWeatherObject} from '@my-module/weather/weatherTypes';
import {ColorPalete} from '@my-config/color';

const Styles = StyleSheet.create({
  mainContainer: {paddingHorizontal: 20, paddingVertical: 15},
  titleContainer: {flexDirection: 'row', alignItems: 'center'},
  title: {flex: 1, color: ColorPalete.text.gray, fontSize: 15},
});

interface Props {
  item: CitySearchWeatherObject;
}

export interface SearchItemCellPressed {
  onCellPress: (cityId: string, cityName: string | undefined) => void;
}

export const SearchContext = createContext<SearchItemCellPressed>({
  onCellPress: (_) => {},
});

type SearchCellProps = Props;

export default function SearchResultCell(props: SearchCellProps) {
  const {item} = props;
  const {onCellPress} = useContext(SearchContext);

  const onPress = () => {
    onCellPress(item.Key, item.LocalizedName);
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <View style={Styles.mainContainer}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>{item.LocalizedName}</Text>
            <MyIcon
              name="chevron-right"
              size={25}
              color={ColorPalete.icon.black}
            />
          </View>
        </View>
        <Divider />
      </View>
    </TouchableWithoutFeedback>
  );
}
