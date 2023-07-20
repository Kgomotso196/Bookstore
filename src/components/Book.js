import React from 'react';
import {
  CircularProgressbar,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/book.css';
import PropTypes from 'prop-types';
import Button from './Button';

function Book({
  category, title, author, id, onClick,
}) {
  return (
    <div className="book-wrapper">
      <div className="book-info">
        <p className="book-genre">{category || 'Uncategorised'}</p>
        <p className="book-title">{title || 'Unititled'}</p>
        <p className="book-author">{author || 'Unknown'}</p>
        <ul className="book-actions">
          <li className="book-comment">Comments</li>
          <li className="book-remove">
            <Button cname="remove-button" id={id} onClick={onClick} title="Remove" />
          </li>
          <li className="book-edit">Edit</li>
        </ul>
      </div>
      <div className="progress-wrapper">
        <div className="book-progress">
          <div className="book-progress-bar"><CircularProgressbar value={60} /></div>
          <div className="book-progress-data">
            <div className="book-progress-percentage">
              {60}
              %
            </div>
            <div className="book-progress-status">completed</div>
          </div>
        </div>
        <div className="book-current">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter-title">Chapter 17</p>
          <p className="chapter-button">UPDATE PROGRESS</p>
        </div>
      </div>
    </div>
  );
}

Book.defaultProps = {
  category: '',
  title: '',
  author: '',
  id: '',
  onClick: '',
};
Book.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export default Book;
