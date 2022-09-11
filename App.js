import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import CustomTabNav from './source/navigation/CustomTabNav';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
    Platform.OS === 'android' && StatusBar.setBackgroundColor('#FFFFFF');
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <CustomTabNav />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
