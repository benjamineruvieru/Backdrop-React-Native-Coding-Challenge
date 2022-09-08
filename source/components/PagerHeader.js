import {StyleSheet, View} from 'react-native';
import React from 'react';
import {verticalScale} from 'react-native-size-matters';
import Text from './Text';

const PagerHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default PagerHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: verticalScale(30),
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
  },
});
