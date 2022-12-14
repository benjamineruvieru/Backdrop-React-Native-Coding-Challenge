import {
  StyleSheet,
  View,
  useWindowDimensions,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import PagerHeader from '../components/PagerHeader';
import Text from '../components/Text';
import FavoriteButton from '../components/FavoriteButton';
import {useMMKVString} from 'react-native-mmkv';
import Lottie from 'lottie-react-native';

const sleepingcat = require('../assets/lottie/sleepingcat.json');

const RenderEmptyList = () => (
  <View style={styles({}).emptyscreen}>
    <Lottie source={sleepingcat} style={styles({}).lottie} autoPlay loop />
    <Text>Oh Empty!</Text>
  </View>
);

const RenderLikedGrid = ({item, index, likedList}) => {
  return (
    <View style={styles({index}).gridview}>
      <Image
        source={{uri: item.url}}
        resizeMode={'cover'}
        style={styles({}).gridimg}
      />
      <View style={styles({}).nameview}>
        <Text style={styles({}).listtext}>{item.name}</Text>
        <FavoriteButton
          {...{
            likedList,
            id: item.id,
            name: item.name,
            url: item.url,
          }}
        />
      </View>
    </View>
  );
};

const LikedCats = () => {
  const SCREEN_WIDTH = useWindowDimensions().width;
  const [fullLikedList] = useMMKVString('fullLikedList');
  const [likedList] = useMMKVString('likedCat');

  return (
    <View style={styles({SCREEN_WIDTH}).container}>
      <PagerHeader title={'Cats I Like'} />
      <FlatList
        numColumns={2}
        data={fullLikedList ? JSON.parse(fullLikedList) : []}
        ListEmptyComponent={RenderEmptyList}
        renderItem={({item, index}) => (
          <RenderLikedGrid
            item={item}
            index={index}
            likedList={JSON.parse(likedList)}
          />
        )}
        contentContainerStyle={{
          flex: fullLikedList && JSON.parse(fullLikedList)?.length > 0 ? 0 : 1,
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={View}
        ListHeaderComponentStyle={{height: 30}}
      />
    </View>
  );
};

export default LikedCats;

const styles = props =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: props.SCREEN_WIDTH,
      paddingHorizontal: scale(20),
    },
    gridview: {
      width: '47%',
      marginBottom: verticalScale(20),
      marginRight: props.index % 2 === 0 ? scale(20) : 0,
    },
    gridimg: {
      aspectRatio: 1 / 1,
      width: '100%',
      backgroundColor: '#D3D3D3',
      borderRadius: 10,
      marginBottom: verticalScale(5),
    },
    nameview: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    lottie: {
      aspectRatio: 1 / 1,
      width: scale(150),
      marginBottom: verticalScale(5),
    },
    emptyscreen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
