import {MMKV} from 'react-native-mmkv';
import {deleteItem, getItem, setItem} from '../storage';

describe('Testing if MMKV Storage is functioning properly', () => {
  let storage;

  beforeAll(() => {
    storage = new MMKV();
  });

  it('MMKV storage of the device functions correctly', () => {
    storage.set('testString', 'value');
    storage.set('testNumber', 99);
    storage.set('testBoolean', false);

    expect(storage.getString('testString')).toStrictEqual('value');
    expect(storage.getNumber('testString')).toBeUndefined();
    expect(storage.getBoolean('testString')).toBeUndefined();
    expect(storage.getString('testNumber')).toBeUndefined();
    expect(storage.getNumber('testNumber')).toStrictEqual(99);
    expect(storage.getBoolean('testNumber')).toBeUndefined();
    expect(storage.getString('testBoolean')).toBeUndefined();
    expect(storage.getNumber('testBoolean')).toBeUndefined();
    expect(storage.getBoolean('testBoolean')).toStrictEqual(false);
    expect(storage.getAllKeys()).toEqual(
      expect.arrayContaining(['testString', 'testNumber', 'testBoolean']),
    );

    storage.delete('testBoolean');
    expect(storage.contains('testBoolean')).toBeFalsy();
    expect(storage.getAllKeys()).toEqual(
      expect.arrayContaining(['testString', 'testNumber']),
    );
  });

  it('Custom MMKV function that exposes storage functionality to the app functions correctly', () => {
    setItem('testkey1', 'test string');
    setItem('testkey2', ['test1', 'test2'], true);

    const testItem = getItem('testkey1');
    const testListStr = getItem('testkey2');
    const testList = getItem('testkey2', true);
    const testNullstring = getItem('testkey_doesntexist1');
    const testNulllist = getItem('testkey_doesntexist2', true);

    expect(testItem).toStrictEqual('test string');
    expect(testListStr).toEqual(JSON.stringify(['test1', 'test2']));
    expect(testList).toEqual(expect.arrayContaining(['test1', 'test2']));
    expect(testNullstring).toBeNull();
    expect(testNulllist).toEqual(expect.arrayContaining([]));
  });
});
