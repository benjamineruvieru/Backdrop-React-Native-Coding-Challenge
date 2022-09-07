import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FavoriteButton = () => {
  return (
    <TouchableOpacity>
      <Icon name={'heart-outline'} size={25} color={'grey'} />
    </TouchableOpacity>
  );
};

export default FavoriteButton;

const styles = StyleSheet.create({});
