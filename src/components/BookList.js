import React from 'react';
import Book from './Book';

const booksArr = [
  {
    genre: 'Action',
    title: 'The Hunger games',
    author: 'Sizanne collins',
    progress: '64',
    status: 'Completed',
  }, {
    genre: 'Fiction',
    title: 'My Life is Magic',
    author: 'Kubaho Linne H.',
    progress: '80',
    status: 'Pending',
  }, {
    genre: 'Romance',
    title: 'How I met my heart',
    author: 'Linne Heaven K.',
    progress: '50',
    status: 'Pending',
  },
];

function BookList() {
  return (
    <>
      {booksArr.map((book) => (
        <Book
          key={book.title + book.genre}
          genre={book.genre}
          title={book.title}
          author={book.author}
          progress={book.progress}
          status={book.status}
        />
      ))}
      <hr />
    </>
  );
}

export default BookList;