import React from "react";
import {
  BookContainer,
  BookCard,
  BookCardImage,
  BookCardContent,
  BookTitle,
  BookReleasedDate,
  BookAuthor
} from "./style";

const BookUrl =
  "https://images-na.ssl-images-amazon.com/images/I/41BjtnvIUQL._SX382_BO1,204,203,200_.jpg";

const Books = Array(4).fill();

const BookSection = () => {
  const renderBookCards = () =>
    Books.map(() => (
      <BookCard>
        <BookCardImage src={BookUrl} />
        <BookCardContent>
          <BookTitle>
            The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach To
            Living A Good Life
          </BookTitle>
          <div>
            <BookAuthor>Mark Manson</BookAuthor>
            <BookReleasedDate>2018</BookReleasedDate>
          </div>
        </BookCardContent>
      </BookCard>
    ));

  return <BookContainer>{renderBookCards()}</BookContainer>;
};

export default BookSection;
