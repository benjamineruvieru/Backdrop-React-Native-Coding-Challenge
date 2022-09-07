import {useQuery} from 'react-query';
import axios from 'axios';
//import { CAT_API_KEY } from "@env"

const CAT_API_KEY =
  'live_7loUasOkLmrF4aLhs8SkwBLsdgpFtWlYibVmORwTksFMRBAFvy8vBfSdyaS2QA3r';

const fetchCat = async () => {
  const {data} = await axios.get(
    `https://api.thecatapi.com/v1/images/search?limit=25&has_breeds=1&api_key=${CAT_API_KEY}`,
  );
  return data;
};

export const useCat = () => useQuery('cat', fetchCat);
