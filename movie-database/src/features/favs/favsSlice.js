import { createSlice } from '@reduxjs/toolkit';
import { appStorageName } from '../../globals/globalVariables';

function getFavsFromLocalStorage() {
  const favs = localStorage.getItem(appStorageName);
  if (favs !== null) {
    return {
      items: JSON.parse(favs),
    };
  }
  return {
    items: [],
  };
}

const favsFromLocalStorage = getFavsFromLocalStorage();

const initialState = {
  items: favsFromLocalStorage.items,
};

function getIndex(item, arr) {
  return arr.findIndex(arrItem => arrItem.id === item.id);
}

export const favsSlice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    addFav: (state, action) => {
      const movie = action.payload;
      const existingIndex = getIndex(movie, state.items);
      if (existingIndex === -1) {
        const newFavs = [...state.items, movie];
        localStorage.setItem(appStorageName, JSON.stringify(newFavs));
        state.items = newFavs;
      }
    },
    deleteFav: (state, action) => {
      const movie = action.payload;
      const index = getIndex(movie, state.items);
      if (index !== -1) {
        const newFavs = state.items.slice(0, index).concat(state.items.slice(index + 1));
        localStorage.setItem(appStorageName, JSON.stringify(newFavs));
        state.items = newFavs;
      }
    },
  },
});

export const { addFav, deleteFav } = favsSlice.actions;

export default favsSlice.reducer;