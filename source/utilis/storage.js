import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export const setItem = (key, value, shouldStringify) => {
  const mainvalue = shouldStringify ? JSON.stringify(value) : value;
  storage.set(key, mainvalue);
};

export const getItem = (key, shouldParse) => {
  const value = storage.getString(key);
  return shouldParse ? JSON.parse(value) : value;
};

export const deleteItem = key => {
  storage.delete(key);
};
