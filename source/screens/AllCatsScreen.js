import {
  StyleSheet,
  View,
  useWindowDimensions,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {s, verticalScale} from 'react-native-size-matters';
import PagerHeader from '../components/PagerHeader';
import Text from '../components/Text';
import FavoriteButton from '../components/FavoriteButton';
import {useFetchCats} from '../api/fetchCat';
import {useMMKVString} from 'react-native-mmkv';
import Lottie from 'lottie-react-native';

const pawloading = require('../assets/lottie/pawloading.json');
const caterror = require('../assets/lottie/caterror.json');

const LIST_ITEM_SIZE = 75;

const LoadingScreen = () => {
  return (
    <View style={styles().loadingscreen}>
      <Lottie
        source={pawloading}
        style={styles().loadinglottie}
        autoPlay
        loop
      />
    </View>
  );
};

const ErrorScreen = ({error, refetch}) => {
  return (
    <View style={styles().loadingscreen}>
      <TouchableOpacity onPress={refetch}>
        <Lottie source={caterror} style={styles().errorlottie} autoPlay loop />
        <Text>
          {error
            ? error.message.charAt(0).toUpperCase() + error.message.slice(1)
            : 'An error occurred!'}
          ! Tap to Retry.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const RenderEmptyList = ({error, refetch, isLoading}) => {
  if (isLoading) {
    return <LoadingScreen />;
  }
  return <ErrorScreen {...{error, refetch}} />;
};

const AllCatsScreen = () => {
  const SCREEN_WIDTH = useWindowDimensions().width;
  const [likedList] = useMMKVString('likedCat');

  const {
    data,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    refetch,
    fetchNextPage,
  } = useFetchCats();

  const scrollY = useRef(new Animated.Value(0)).current;

  const RenderCatList = ({item, index}) => {
    const inputRange = [
      -1,
      0,
      LIST_ITEM_SIZE * index,
      LIST_ITEM_SIZE * (3 + index),
    ];
    const outputRange = [1, 1, 1, 0];
    const scale = scrollY.interpolate({inputRange, outputRange});
    return (
      <Animated.View style={styles(scale).listview}>
        <Image
          source={{uri: item.url}}
          resizeMode={'cover'}
          style={styles().listimg}
        />
        <Text style={styles().listtext}>{item.breeds[0]?.name}</Text>
        <FavoriteButton
          {...{
            likedList: likedList ? JSON.parse(likedList) : [],
            id: item.id,
            name: item.breeds[0]?.name,
            url: item.url,
          }}
        />
      </Animated.View>
    );
  };

  return (
    <View style={styles(SCREEN_WIDTH).container}>
      <PagerHeader title={'All Cats'} />

      <Animated.FlatList
        keyExtractor={(item, index) => item.id + index}
        data={data?.pages.flat()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        showsVerticalScrollIndicator={false}
        renderItem={RenderCatList}
        ListEmptyComponent={() => (
          <RenderEmptyList {...{isLoading, error, refetch}} />
        )}
        contentContainerStyle={{flex: data?.pages.length > 0 ? 0 : 1}}
        ListFooterComponent={() =>
          data?.pages.length > 0 &&
          !isError && (
            <Lottie
              source={pawloading}
              style={styles().extraloadinglottie}
              autoPlay
              loop
            />
          )
        }
        onEndReached={!isFetchingNextPage && fetchNextPage}
        onEndThreshold={0}
      />
    </View>
  );
};

export default AllCatsScreen;

const styles = props =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: props,
      paddingHorizontal: s(20),
    },
    listview: {
      flexDirection: 'row',
      marginTop: 30,
      alignItems: 'center',
      height: LIST_ITEM_SIZE - 30,
      transform: [{scale: props}],
    },
    listimg: {
      aspectRatio: 1 / 1,
      width: s(50),
      backgroundColor: '#D3D3D3',
      borderRadius: 10,
    },
    listtext: {
      flex: 1,
      paddingLeft: 10,
      fontSize: 15,
    },
    loadinglottie: {
      aspectRatio: 1 / 1,
      width: s(100),
    },
    errorlottie: {
      aspectRatio: 1 / 1,
      width: s(170),
    },
    loadingscreen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    extraloadinglottie: {
      aspectRatio: 1 / 1,
      width: s(50),
      alignSelf: 'center',
    },
  });
