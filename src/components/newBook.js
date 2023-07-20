import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../styles/newBook.css';
import Button from './Button';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const booksArr = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    const id = booksArr.length + 1;
    dispatch(addBook({
      itemId: `item${id + 1}`,
      title,
      author,
    }));
    e.preventDefault();
  };
  return (
    <div className="form-wrapper">
      <h2 className="add-head">ADD NEW BOOK</h2>
      <form className="add-book">
        <input type="text" name="title" placeholder="Book Title" className="input-one" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="author" placeholder="Book Author" className="input-two" onChange={(e) => setAuthor(e.target.value)} />
        <Button cname="add-button" onClick={clickHandler} title="ADD BOOK" />
      </form>
    </div>
  );
}

export default AddBook;
