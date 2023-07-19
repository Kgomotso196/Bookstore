import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const BookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = BookSlice.actions;

export default BookSlice.reducer;
