import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import React, {useRef, useState} from 'react';
import TabIcon from '../components/TabIcon';
import {verticalScale} from 'react-native-size-matters';
import AllCatsScreen from '../screens/AllCatsScreen';
import LikedCats from '../screens/LikedCats';

const Screens = [AllCatsScreen, LikedCats];

const RenderScreens = props => {
  return <props.item />;
};

const MainBody = React.forwardRef((props, ref) => {
  const onViewRef = React.useRef(viewableItems => {
    if (viewableItems) {
      props.setIndex(() => viewableItems.viewableItems[0].index);
    }
  });
  return (
    <View style={styles.container}>
      <FlatList
        nestedScrollEnabled={true}
        ref={ref}
        pagingEnabled
        data={Screens}
        renderItem={RenderScreens}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
      />
    </View>
  );
});

const BottomNav = ({currentVisibleIndex, scollPageTo}) => {
  return (
    <View style={styles.bottomnav}>
      <TabIcon
        type={'cat'}
        index={0}
        scollPageTo={scollPageTo}
        currentVisibleIndex={currentVisibleIndex}
      />
      <TabIcon
        type={'heart'}
        index={1}
        scollPageTo={scollPageTo}
        currentVisibleIndex={currentVisibleIndex}
      />
    </View>
  );
};

const CustomTabNav = () => {
  const [currentVisibleIndex, setcurrentVisibleIndex] = useState(0);

  const flatListRef = useRef();

  const scrollToIndex = index => {
    flatListRef.current.scrollToIndex({index});
  };
  return (
    <SafeAreaView style={styles.safeareaviewstyle}>
      <MainBody ref={flatListRef} setIndex={setcurrentVisibleIndex} />
      <BottomNav
        currentVisibleIndex={currentVisibleIndex}
        scollPageTo={scrollToIndex}
      />
    </SafeAreaView>
  );
};

export default CustomTabNav;

const styles = StyleSheet.create({
  safeareaviewstyle: {flex: 1, backgroundColor: 'white'},
  container: {
    flex: 1,
  },
  bottomnav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: verticalScale(60),
    alignItems: 'center',
    borderTopColor: '#D3D3D3',
    borderTopWidth: 0.5,
  },
});
