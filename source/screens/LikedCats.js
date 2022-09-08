import {
  StyleSheet,
  View,
  useWindowDimensions,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import PagerHeader from '../components/PagerHeader';
import Text from '../components/Text';
import FavoriteButton from '../components/FavoriteButton';
import {useMMKVString} from 'react-native-mmkv';

const RenderLikedGrid = ({item, index, likedList}) => {
  return (
    <View style={styles(index).gridview}>
      <Image
        source={{uri: item.url}}
        resizeMode={'cover'}
        style={styles().gridimg}
      />
      <View style={styles().nameview}>
        <Text style={styles().listtext}>{item.name}</Text>
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
  console.log(fullLikedList);
  useEffect(() => {
    console.log(fullLikedList);
  }, [fullLikedList]);
  return (
    <View style={styles(SCREEN_WIDTH).container}>
      <PagerHeader title={'Cats I Like'} />
      <FlatList
        numColumns={2}
        data={JSON.parse(fullLikedList)}
        renderItem={({item, index}) => (
          <RenderLikedGrid
            item={item}
            index={index}
            likedList={JSON.parse(likedList)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <View></View>}
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
      width: props,
      paddingHorizontal: scale(20),
    },
    gridview: {
      width: '47%',

      marginBottom: verticalScale(20),
      marginRight: props % 2 === 0 ? scale(20) : 0,
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
  });
