import React from 'react';
import BookList from '../components/BookList';
import AddBook from '../components/newBook';

function Books() {
  return (
    <div style={{ backgroundColor: '#fafafa' }}>
      <BookList />
      <AddBook />
      <br />
    </div>
  );
}

export default Books;
