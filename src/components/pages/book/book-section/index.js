import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

import { fetchBooksByAlphabet } from "store/book/actions";
import {
  BookContainer,
  BookCard,
  BookCardImage,
  BookCardContent,
  BookTitle,
  BookReleasedDate,
  BookAuthor,
  BookDescription
} from "./style";
import { usePrevious } from "hooks";

const BookSection = ({ books, handleFetchBooksByAlphabet, location }) => {
  const { search } = location;
  const alphabet = queryString.parse(search).activeAlphabet || "A";
  const refAlphabet = usePrevious(alphabet);
  const mounted = useRef();
  const alphabetOptions = {
    alphabet
  };

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      handleFetchBooksByAlphabet(alphabetOptions);
    } else if (refAlphabet.current !== alphabet) {
      handleFetchBooksByAlphabet(alphabetOptions);
    }
  }, [alphabet, handleFetchBooksByAlphabet]);

  const renderBookCards = () =>
    books.map(book => (
      <BookCard key={book.id}>
        <BookCardImage src={book.imgUrl} />
        <BookCardContent>
          <BookTitle>{book.title}</BookTitle>
          <BookDescription>
            <BookAuthor>{book.author}</BookAuthor>
            <BookReleasedDate>{book.releasedYear}</BookReleasedDate>
          </BookDescription>
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

const mapDispatchToProps = dispatch => {
  return {
    handleFetchBooksByAlphabet: options =>
      dispatch(fetchBooksByAlphabet(options))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BookSection));
