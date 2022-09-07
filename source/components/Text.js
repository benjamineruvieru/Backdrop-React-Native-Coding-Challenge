import {StyleSheet, Text as RNText} from 'react-native';
import React from 'react';

const Text = ({children, style, color = 'black'}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: 13,
      color: color,
      fontFamily: 'SFProDisplay-Regular',
      ...style,
    },
  });

  return <RNText style={styles.text}> {children}</RNText>;
};

export default Text;
