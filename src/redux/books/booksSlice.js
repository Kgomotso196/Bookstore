import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      itemId: 'item1',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Fiction, Classic',
    },
    {
      itemId: 'item2',
      title: '1984',
      author: 'George Orwell',
      category: 'Dystopian, Science Fiction',
    },
    {
      itemId: 'item3',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      category: 'Fiction, Classic, Romance',
    },
  ],
};

export const BookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.itemId !== action.payload);
    },
  },
});

export const { addBook, removeBook } = BookSlice.actions;

export default BookSlice.reducer;
