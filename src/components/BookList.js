import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';
import axios from 'axios';

function BookList() {
  const dispatch = useDispatch();
  const booksArr = useSelector((state) => state.book.books);
  const loading = useSelector((state) => state.book.status === 'loading');
  const error = useSelector((state) => state.book.error);

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const apiKey = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/d2UK603RcRIHbJQLulaw/books';
        const response = await axios.get(
          `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/d2UK603RcRIHbJQLulaw/books?key=${apiKey}`
        );
        dispatch(fetchBooks(response.data));
      } catch (error) {
        dispatch(fetchBooks([]));
        setError('Failed to fetch books.');
      }
    };

    fetchBooksData();
  }, [dispatch]);

  const transformedData = Object.entries(booksArr).map(([item_id, items]) => {
    const [item] = items;
    return { item_id, ...item };
  });

  const clickHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };

  if (loading) {
    return <h1 style={{ marginLeft: '40px' }}>Loading...</h1>;
  }

  if (error) {
    return <h1 style={{ marginLeft: '40px' }}>{error}</h1>;
  }

  return (
    <>
      {transformedData.map((book) => (
        <Book
          key={book.item_id + book.title}
          id={book.item_id}
          category={book.category}
          title={book.title}
          author={book.author}
          onClick={clickHandler}
        />
      ))}
      <hr />
    </>
  );
}

export default BookList;
