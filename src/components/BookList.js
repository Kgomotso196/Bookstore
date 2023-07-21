import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { removeBook } from '../redux/books/booksSlice';
import axios from 'axios';

function BookList() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const booksArr = useSelector((state) => state.book.books);

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const response = await axios.get('YOUR_BOOKS_API_ENDPOINT'); // Replace 'YOUR_BOOKS_API_ENDPOINT' with your actual API endpoint
        dispatch({ type: 'books/fetchBooks', payload: response.data });
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch books.');
        setLoading(false);
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
