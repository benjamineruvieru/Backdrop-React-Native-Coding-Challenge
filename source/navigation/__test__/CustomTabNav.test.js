import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import CustomTabNav from '../CustomTabNav';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

it('navigates correctly', done => {
  const {getByTestId, getAllByText, getByText} = render(
    <QueryClientProvider client={queryClient}>
      <CustomTabNav />
    </QueryClientProvider>,
  );
  fireEvent.press(getByTestId('allcats.button'));
  expect(getAllByText('All Cats').length).toBe(2);
  fireEvent.press(getByTestId('likedcats.button'));
  expect(getAllByText('Cats I Like').length).toBe(2);
  done();
});
