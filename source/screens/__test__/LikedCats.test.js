import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import LikedCats from '../LikedCats';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

it('renders correctly', done => {
  const {getByTestId} = render(
    <QueryClientProvider client={queryClient}>
      <LikedCats />
    </QueryClientProvider>,
  );
  done();
});
