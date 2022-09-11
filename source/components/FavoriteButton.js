import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {toggleLiked} from '../utilis/favoritebutton_helpers';

const FavoriteButton = ({likedList, id, name, url}) => {
  const onPress = () => {
    toggleLiked(name, id, url, likedList);
  };
  return (
    <TouchableOpacity testID={'favebutton'} onPress={onPress}>
      <Icon
        testID="icon"
        name={likedList?.includes(id) ? 'heart' : 'heart-outline'}
        size={25}
        color={likedList?.includes(id) ? 'red' : 'grey'}
      />
    </TouchableOpacity>
  );
};

export default FavoriteButton;
