import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import FavoriteButton from '../FavoriteButton';
import {getItem} from '../../utilis/storage';

it('when clicked it adds cats to favourite list', done => {
  const {getByTestId} = render(
    <FavoriteButton
      {...{likedList: [], id: 'testItemID', name: 'Test Cat', url: 'test.link'}}
    />,
  );
  fireEvent.press(getByTestId('favebutton'));
  const LikedCatList1 = getItem('likedCat', true);
  expect(LikedCatList1).toEqual(expect.arrayContaining(['testItemID']));

  fireEvent.press(getByTestId('favebutton'));
  const LikedCatList2 = getItem('likedCat', true);
  expect(LikedCatList2).toEqual(expect.arrayContaining([]));
  done();
});
