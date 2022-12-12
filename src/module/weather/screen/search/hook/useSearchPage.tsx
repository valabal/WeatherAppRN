import {useDebounce} from '@my-util/hook';
import {useEffect, useState} from 'react';

export interface UseSearchPageOutput {
  cityName: string;
  onSearchCity: (text: string) => void;
}

export const useSearchPage: (
  getCity: Function,
  refreshCity: Function,
) => UseSearchPageOutput = (getCity, refreshCity) => {
  const [cityName, onChangeText] = useState('');

  const debouncedSearchTerm = useDebounce(cityName, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      getCity(debouncedSearchTerm);
    }
  }, [getCity, debouncedSearchTerm]);

  useEffect(() => {
    refreshCity();
  }, [refreshCity]);

  const onSearchCity = (text: string) => onChangeText(text);
  return {cityName, onSearchCity};
};
