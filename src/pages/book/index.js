import React, { Fragment } from "react";
import { TitleSection, DescriptionSection } from "./style";
import AlphabetSection from "components/pages/book/alphabet-section";
import BookSection from "../../components/pages/book/book-section";

const BookPage = () => (
  <Fragment>
    <TitleSection>Book Readed</TitleSection>
    <DescriptionSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
      repellendus eveniet. Cumque necessitatibus, reprehenderit ratione aliquam
      alias repudiandae obcaecati.
    </DescriptionSection>
    <AlphabetSection />
    <BookSection />
  </Fragment>
);

export default BookPage;
