import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../styles/newBook.css';
import Button from './Button';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000000);
    dispatch(addBook({
      item_id: `itemId${id + 1}`,
      title,
      author,
      category,
    }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };
  return (
    <div className="form-wrapper">
      <h2 className="add-head">ADD NEW BOOK</h2>
      <form className="add-book">
        <input type="text" name="title" placeholder="Book Title" className="input-one" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="author" placeholder="Book Author" className="input-two" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <select name="category" className="input-three" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <Button cname="add-button" onClick={clickHandler} title="ADD BOOK" />
      </form>
    </div>
  );
}

export default AddBook;
