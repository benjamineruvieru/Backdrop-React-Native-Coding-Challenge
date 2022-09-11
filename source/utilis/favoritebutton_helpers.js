import {getItem, setItem} from './storage';

const addToFullLikedList = (name, id, url) => {
  const tmplist = getItem('fullLikedList', true);

  const data = {
    name,
    id,
    url,
  };
  tmplist.unshift(data);
  setItem('fullLikedList', tmplist, true);
};

const removeFromFullLikedList = index => {
  const tmplist = getItem('fullLikedList', true);
  tmplist.splice(index, 1);
  setItem('fullLikedList', tmplist, true);
};

export const toggleLiked = (name, id, url, likedList) => {
  if (likedList?.includes(id)) {
    const tmpList = likedList;
    let catIndex = tmpList.indexOf(id);
    tmpList.splice(catIndex, 1);

    setItem('likedCat', [...tmpList], true);
    removeFromFullLikedList(catIndex);
  } else {
    setItem('likedCat', [id, ...likedList], true);
    addToFullLikedList(name, id, url);
  }
};
