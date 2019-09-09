import React from "react";
import { connect } from "react-redux";

import {
  BookContainer,
  BookCard,
  BookCardImage,
  BookCardContent,
  BookTitle,
  BookReleasedDate,
  BookAuthor
} from "./style";

const BookSection = ({ books }) => {
  const renderBookCards = () =>
    books.map(book => (
      <BookCard key={book.id}>
        <BookCardImage src={book.imgUrl} />
        <BookCardContent>
          <BookTitle>{book.title}</BookTitle>
          <div>
            <BookAuthor>{book.author}</BookAuthor>
            <BookReleasedDate>{book.releaseYear}</BookReleasedDate>
          </div>
        </BookCardContent>
      </BookCard>
    ));

  return <BookContainer>{renderBookCards()}</BookContainer>;
};

const mapStateToProps = ({ bookReducers }) => {
  return {
    books: bookReducers.books
  };
};

export default connect(mapStateToProps)(BookSection);
