import {useQuery} from 'react-query';
import axios from 'axios';
import {CAT_API_KEY} from '@env';

const BASE_URL = 'https://api.thecatapi.com/v1';

const fetchCat = async (pageNumber = 0) => {
  const {data} = await axios.get(
    `${BASE_URL}/images/search?limit=10&page=${pageNumber}&has_breeds=1&api_key=${CAT_API_KEY}`,
  );
  return data;
};

export const useCat = pageNumber =>
  useQuery(['cat', pageNumber], () => fetchCat(pageNumber));
