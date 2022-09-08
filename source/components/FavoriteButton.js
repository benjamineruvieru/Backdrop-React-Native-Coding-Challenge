import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getItem, setItem} from '../utilis/storage';

const data = [
  {yh: 'nsns', time: 'uej'},
  {yh: 'nsrrns', time: 'uetgj'},
  {yh: 'ngfsns', time: 'uddej'},
];

const FavoriteButton = ({likedList, id, name, url}) => {
  const addToFullLikedList = () => {
    const tmplist = getItem('fullLikedList', true);

    const data = {
      name,
      id,
      url,
    };
    tmplist.unshift(data);
    console.log(tmplist);
    setItem('fullLikedList', tmplist, true);
  };

  const removeFromFullLikedList = index => {
    const tmplist = getItem('fullLikedList', true);
    tmplist.splice(index, 1);
    setItem('fullLikedList', tmplist, true);
  };

  const toggleLiked = () => {
    if (likedList?.includes(id)) {
      const tmpList = likedList;
      let catIndex = tmpList.indexOf(id);
      tmpList.splice(catIndex, 1);

      setItem('likedCat', [...tmpList], true);
      removeFromFullLikedList(catIndex);
    } else {
      setItem('likedCat', [id, ...likedList], true);
      addToFullLikedList();
    }
  };
  return (
    <TouchableOpacity onPress={toggleLiked}>
      <Icon
        name={likedList?.includes(id) ? 'heart' : 'heart-outline'}
        size={25}
        color={likedList?.includes(id) ? 'red' : 'grey'}
      />
    </TouchableOpacity>
  );
};

export default FavoriteButton;

const styles = StyleSheet.create({});
