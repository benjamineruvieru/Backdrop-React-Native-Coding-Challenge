import React from 'react';
import {StatusBar} from 'react-native';
import CustomTabNav from './source/navigation/CustomTabNav';

const App = () => {
  StatusBar.setBackgroundColor('#FFFFFF');
  StatusBar.setBarStyle('dark-content');
  return <CustomTabNav />;
};

export default App;
