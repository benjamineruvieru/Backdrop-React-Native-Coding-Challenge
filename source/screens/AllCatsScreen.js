import {
  StyleSheet,
  View,
  useWindowDimensions,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import PagerHeader from '../components/PagerHeader';
import Text from '../components/Text';
import FavoriteButton from '../components/FavoriteButton';
import {useCat} from '../hooks/useCat';

const RenderCatList = ({item}) => {
  return (
    <View style={styles().listview}>
      <Image
        source={{uri: item.url}}
        resizeMode={'contain'}
        style={styles().listimg}
      />
      <Text style={styles().listtext}>{item.breeds[0].name}</Text>
      <FavoriteButton />
    </View>
  );
};

const AllCatsScreen = () => {
  const SCREEN_WIDTH = useWindowDimensions().width;
  const {data, isLoading, isSuccess, error} = useCat();
  console.log(error);
  return (
    <View style={styles(SCREEN_WIDTH).container}>
      <PagerHeader title={'All Cats'} />
      <FlatList
        bounces={true}
        bouncesZoom={true}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={RenderCatList}
        style={styles().flatlist}
      />
    </View>
  );
};

export default AllCatsScreen;

const styles = SCREEN_WIDTH =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: SCREEN_WIDTH,
      paddingHorizontal: scale(20),
    },
    listview: {flexDirection: 'row', marginBottom: 15, alignItems: 'center'},
    listimg: {
      height: 50,
      width: 50,
      backgroundColor: '#D3D3D3',
      borderRadius: 10,
    },
    listtext: {
      flex: 1,
      paddingLeft: 10,
      fontSize: 15,
    },
    flatlist: {paddingTop: 30},
  });
