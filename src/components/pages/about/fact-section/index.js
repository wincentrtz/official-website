import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

import { fetchAllFacts } from "store/fact/actions";
import BookPage from "pages/book";
import Modal from "components/common/modal";
import {
  TitleSection,
  DescriptionSection,
  FactContainer,
  CardContainer,
  CardFact,
  CardTitle,
  CardDescription,
  CardImage
} from "./style";
import BookIcon from "assets/images/book.svg";
import Coffee from "assets/images/coffee.svg";
import Github from "assets/images/github.svg";
import ProgrammingLanguage from "assets/images/programming-language.svg";

const FACTS = {
  "Book Read": {
    title: "Book Read",
    content: <BookPage />,
    icon: BookIcon
  },
  "Coffee Consumption": {
    title: "Coffee Consumption",
    content: <BookPage />,
    icon: Coffee
  },
  "My github": {
    title: "My github",
    content: <BookPage />,
    icon: Github
  },
  "Programming Language": {
    title: "Programming Language",
    content: <BookPage />,
    icon: ProgrammingLanguage
  }
};

const FactSection = ({ handleFetchAllFacts, history, facts, location }) => {
  const { search } = location;
  const activeCard = queryString.parse(search).fact;
  const isOpen = !!activeCard;
  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      handleFetchAllFacts();
    }
  }, [handleFetchAllFacts]);

  const handleCardModal = activeCard => {
    history.push({ search: `?fact=${activeCard}` });
  };

  const renderFact = () =>
    facts.map(f => (
      <CardFact key={f.title} onClick={() => handleCardModal(f.title)}>
        <CardImage src={FACTS[f.title].icon} />
        <CardTitle>{f.title}</CardTitle>
        <CardDescription>{f.description}</CardDescription>
      </CardFact>
    ));

  return (
    <FactContainer>
      <TitleSection>Facts About Me</TitleSection>
      <DescriptionSection>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        repellendus eveniet. Cumque necessitatibus, reprehenderit ratione
        aliquam alias repudiandae obcaecati, fugiat sint repellat laboriosam
        suscipit magnam eius soluta voluptatibus voluptatem molestiae.
      </DescriptionSection>
      <CardContainer>{renderFact()}</CardContainer>
      <Modal isOpen={isOpen}>{activeCard && FACTS[activeCard].content}</Modal>
    </FactContainer>
  );
};

const mapStateToProps = ({ factReducers }) => {
  return {
    facts: factReducers.facts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFetchAllFacts: () => dispatch(fetchAllFacts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FactSection));
