import React from 'react';
import {
  CircularProgressbar,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/book.css';
import PropTypes from 'prop-types';

function Book({
  genre, title, author, progress, status,
}) {
  return (
    <div className="book-wrapper">
      <div className="book-info">
        <p className="book-genre">{genre}</p>
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
        <ul className="book-actions">
          <li className="book-comment">Comments</li>
          <li className="book-remove"><button type="button"> Remove </button></li>
          <li className="book-edit">Edit</li>
        </ul>
      </div>
      <div className="progress-wrapper">
        <div className="book-progress">
          <div className="book-progress-bar"><CircularProgressbar value={progress} /></div>
          <div className="book-progress-data">
            <div className="book-progress-percentage">
              {progress}
              %
            </div>
            <div className="book-progress-status">{status}</div>
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
  genre: '',
  title: '',
  author: '',
  progress: '',
  status: '',
};
Book.propTypes = {
  genre: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  progress: PropTypes.string,
  status: PropTypes.string,
};

export default Book;