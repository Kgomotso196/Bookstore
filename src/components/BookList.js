import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { removeBook } from '../redux/books/booksSlice';

function BookList() {
  const booksArr = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };
  return (
    <>
      {booksArr.map((book) => (
        <Book
          key={book.itemId + book.title}
          id={book.itemId}
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
