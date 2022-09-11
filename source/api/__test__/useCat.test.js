import {useFetchCats} from '../fetchCat';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {renderHook} from '@testing-library/react-hooks';
import nock from 'nock';
import {CAT_API_KEY} from '@env';
import React from 'react';

describe('Testing Api Call', () => {
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
    const expectation = nock('https://api.thecatapi.com/v1')
      .get(`/images/search?limit=15&page=0&has_breeds=1&api_key=${CAT_API_KEY}`)
      .reply(200, [
        {
          breeds: [
            {
              weight: {
                imperial: '8 - 16',
                metric: '4 - 7',
              },
              id: 'amau',
              name: 'Arabian Mau',
              vcahospitals_url: '',
              temperament:
                'Affectionate, Agile, Curious, Independent, Playful, Loyal',
              origin: 'United Arab Emirates',
              country_codes: 'AE',
              country_code: 'AE',
              description:
                'Arabian Mau cats are social and energetic. Due to their energy levels, these cats do best in homes where their owners will be able to provide them with plenty of playtime, attention and interaction from their owners. These kitties are friendly, intelligent, and adaptable, and will even get along well with other pets and children.',
              life_span: '12 - 14',
              indoor: 0,
              alt_names: 'Alley cat',
              adaptability: 5,
              affection_level: 5,
              child_friendly: 4,
              dog_friendly: 5,
              energy_level: 4,
              grooming: 1,
              health_issues: 1,
              intelligence: 3,
              shedding_level: 1,
              social_needs: 3,
              stranger_friendly: 3,
              vocalisation: 1,
              experimental: 0,
              hairless: 0,
              natural: 1,
              rare: 0,
              rex: 0,
              suppressed_tail: 0,
              short_legs: 0,
              wikipedia_url: 'https://en.wikipedia.org/wiki/Arabian_Mau',
              hypoallergenic: 0,
              reference_image_id: 'k71ULYfRr',
            },
          ],
          id: 'k71ULYfRr',
          url: 'https://cdn2.thecatapi.com/images/k71ULYfRr.jpg',
          width: 2048,
          height: 1554,
        },
      ]);

    const {result, waitFor} = renderHook(() => useFetchCats(), {wrapper});

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expectation.done();
  });
});
