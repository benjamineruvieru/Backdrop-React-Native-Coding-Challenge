import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from './Text';

const TabIcon = ({testID, type, index, currentVisibleIndex, scollPageTo}) => {
  return (
    <Pressable
      testID={testID}
      style={styles.icon}
      onPress={() => scollPageTo(index)}>
      <Icon
        testID={testID + '.icon'}
        name={type}
        size={27}
        color={index === currentVisibleIndex ? 'black' : '#D3D3D3'}
      />
      <Text color={index === currentVisibleIndex ? 'black' : '#D3D3D3'}>
        {type === 'cat' ? 'All Cats' : 'Cats I Like'}
      </Text>
    </Pressable>
  );
};

export default TabIcon;

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
