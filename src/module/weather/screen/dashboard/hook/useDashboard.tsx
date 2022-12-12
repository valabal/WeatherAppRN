import {usePrevious} from '@my-util/hook';
import {useEffect, useState} from 'react';

export interface UseDashboardProps {
  getMore: (info: {distanceFromEnd: number}) => void;
  refreshList: () => void;
}

export const useDashboardList = (
  getWeatherList: Function,
  isFetch: boolean,
) => {
  const [page, setPage] = useState(0);
  const prevPage = usePrevious({page});

  useEffect(() => {
    if (prevPage?.page !== page) {
      getWeatherList();
    } else {
      console.log('PAGE IS THE SAME AS PREVIOUS');
    }
  }, [getWeatherList, page, prevPage]);

  const fetchMoreList = () => {
    if (!isFetch) {
      setPage(page + 1);
    }
  };

  const handleRefresh = () => {
    getWeatherList({isRefreshed: true});
  };

  return [{getMore: fetchMoreList, refreshList: handleRefresh}];
};
