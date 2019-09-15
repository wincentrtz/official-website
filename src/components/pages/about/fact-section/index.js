import React, { Component } from "react";
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

class FactSection extends Component {
  state = {
    isCalled: false
  };

  componentDidUpdate = () => {
    const { isCalled } = this.state;
    const { fetchAllFacts, currentPage } = this.props;
    if (currentPage === 1 && !isCalled) {
      fetchAllFacts().then(() => this.setState({ isCalled: true }));
    }
  };

  handleCardModal = activeCard => {
    this.props.history.push({ search: `?fact=${activeCard}` });
  };

  renderFact = () =>
    this.props.facts.map(f => (
      <CardFact key={f.title} onClick={() => this.handleCardModal(f.title)}>
        <CardImage src={FACTS[f.title].icon} />
        <CardTitle>{f.title}</CardTitle>
        <CardDescription>{f.description}</CardDescription>
      </CardFact>
    ));

  render() {
    const { search } = this.props.location;
    const isOpen = !!search;
    const activeCard = queryString.parse(search).fact;
    return (
      <FactContainer>
        <TitleSection>Facts About Me</TitleSection>
        <DescriptionSection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          repellendus eveniet. Cumque necessitatibus, reprehenderit ratione
          aliquam alias repudiandae obcaecati, fugiat sint repellat laboriosam
          suscipit magnam eius soluta voluptatibus voluptatem molestiae.
        </DescriptionSection>
        <CardContainer>{this.renderFact()}</CardContainer>
        <Modal isOpen={isOpen}>{activeCard && FACTS[activeCard].content}</Modal>
      </FactContainer>
    );
  }
}

const mapStateToProps = ({ factReducers, pageReducers }) => {
  return {
    facts: factReducers.facts,
    currentPage: pageReducers.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllFacts: () => dispatch(fetchAllFacts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FactSection));
