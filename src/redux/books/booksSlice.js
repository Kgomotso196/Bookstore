import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/d2UK603RcRIHbJQLulaw/books');
    return response.data;
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    try {
      await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/d2UK603RcRIHbJQLulaw/books', book);
      thunkAPI.dispatch(fetchBooks());
      const res = thunkAPI.getState().books;
      return res;
    } catch (error) {
      throw new Error('Failed to add book.');
    }
  },
);

export const removeBook = createAsyncThunk('books/removeBook', async (bookId, thunkAPI) => {
  try {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/d2UK603RcRIHbJQLulaw/books/${bookId}`);
    thunkAPI.dispatch(fetchBooks());
    const res = thunkAPI.getState().books;
    return res;
  } catch (error) {
    throw new Error('Failed to delete book.');
  }
});

export const BookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        Object.assign(state.books, action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        delete state.books[action.payload];
      });
  },
});

export default BookSlice.reducer;