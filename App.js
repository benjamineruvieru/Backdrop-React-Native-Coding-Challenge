import React from 'react';
import {Platform, StatusBar} from 'react-native';
import CustomTabNav from './source/navigation/CustomTabNav';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  Platform.OS === 'android' && StatusBar.setBackgroundColor('#FFFFFF');
  StatusBar.setBarStyle('dark-content');
  return (
    <QueryClientProvider client={queryClient}>
      <CustomTabNav />
    </QueryClientProvider>
  );
};

export default App;
