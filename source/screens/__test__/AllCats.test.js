import React from 'react';
import {render} from '@testing-library/react-native';
import AllCatsScreen from '../AllCatsScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

it('renders correctly', done => {
  render(
    <QueryClientProvider client={queryClient}>
      <AllCatsScreen />
    </QueryClientProvider>,
  );
  done();
});
