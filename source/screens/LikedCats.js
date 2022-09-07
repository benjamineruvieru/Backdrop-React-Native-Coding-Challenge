import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import PagerHeader from '../components/PagerHeader';

const DATA = [
  {
    id: '88l',
    url: 'https://cdn2.thecatapi.com/images/88l.jpg',
    width: 640,
    height: 640,
  },
  {
    id: '9uf',
    url: 'https://cdn2.thecatapi.com/images/9uf.jpg',
    width: 456,
    height: 611,
  },
  {
    id: '9vj',
    url: 'https://cdn2.thecatapi.com/images/9vj.jpg',
    width: 905,
    height: 750,
  },
  {
    id: 'alo',
    url: 'https://cdn2.thecatapi.com/images/alo.jpg',
    width: 800,
    height: 531,
  },
  {
    id: 'bar',
    url: 'https://cdn2.thecatapi.com/images/bar.jpg',
    width: 500,
    height: 334,
  },
  {
    id: 'cf1',
    url: 'https://cdn2.thecatapi.com/images/cf1.jpg',
    width: 505,
    height: 700,
  },
  {
    id: 'd05',
    url: 'https://cdn2.thecatapi.com/images/d05.jpg',
    width: 2640,
    height: 1980,
  },
  {
    id: 'e4q',
    url: 'https://cdn2.thecatapi.com/images/e4q.jpg',
    width: 1550,
    height: 1156,
  },
  {
    id: 'MTgxODM5Nw',
    url: 'https://cdn2.thecatapi.com/images/MTgxODM5Nw.jpg',
    width: 480,
    height: 640,
  },
  {
    id: 'b6Co9acGP',
    url: 'https://cdn2.thecatapi.com/images/b6Co9acGP.jpg',
    width: 800,
    height: 450,
  },
];

const LikedCats = () => {
  const SCREEN_WIDTH = useWindowDimensions().width;

  return (
    <View style={styles(SCREEN_WIDTH).container}>
      <PagerHeader title={'Cats I Like'} />
      <Text>LikedCats</Text>
    </View>
  );
};

export default LikedCats;

const styles = SCREEN_WIDTH =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: SCREEN_WIDTH,
      paddingHorizontal: scale(20),
    },
  });
