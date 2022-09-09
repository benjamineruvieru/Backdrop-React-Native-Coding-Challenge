import {useCat} from '../useCat';
import {QueryClient, QueryClientProvider} from 'react-query';
import {renderHook} from '@testing-library/react-hooks';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({children}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
it('functions correctly', async () => {
  const {result, waitFor} = renderHook(() => useCat(), {wrapper});

  await waitFor(() => expect(result.current.isSuccess).toBe(true));
});
