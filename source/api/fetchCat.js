import axios from 'axios';
import {CAT_API_KEY} from '@env';
import {useInfiniteQuery} from '@tanstack/react-query';

const BASE_URL = 'https://api.thecatapi.com/v1';

const fetchCat = async ({pageParam = 0}) => {
  const {data} = await axios.get(
    `${BASE_URL}/images/search?limit=15&page=${pageParam}&has_breeds=1&api_key=${CAT_API_KEY}`,
  );
  return data;
};

export function useFetchCats() {
  return useInfiniteQuery(['cat'], fetchCat, {
    retry: false,
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
  });
}
