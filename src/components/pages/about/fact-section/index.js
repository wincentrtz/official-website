import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllFacts } from "store/fact/actions";
import {
  TitleSection,
  DescriptionSection,
  FactContainer,
  CardContainer,
  CardFact,
  CardTitle,
  CardDescription,
  ModalContainer
} from "./style";
import Modal from "components/common/modal";
import Book from "assets/images/book.svg";
import Coffee from "assets/images/coffee.svg";
import Github from "assets/images/github.svg";
import ProgrammingLanguage from "assets/images/programming-language.svg";

const ICON = {
  "Book Readed": Book,
  "Coffee Consumption": Coffee,
  "My github": Github,
  "Programming Language": ProgrammingLanguage
};

class FactSection extends Component {
  state = {
    isCalled: false,
    showModal: false
  };

  componentDidUpdate = () => {
    const { isCalled } = this.state;
    const { fetchAllFacts, currentPage } = this.props;
    if (currentPage === 1 && !isCalled) {
      fetchAllFacts().then(() => this.setState({ isCalled: true }));
    }
  };

  renderFact = () =>
    this.props.facts.map(f => (
      <CardFact key={f.title} onClick={this.toggleModal}>
        <img src={ICON[f.title]} />
        <CardTitle>{f.title}</CardTitle>
        <CardDescription>{f.description}</CardDescription>
      </CardFact>
    ));

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    const { showModal } = this.state;
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
        <Modal>
          <ModalContainer showModal={showModal}>a</ModalContainer>
        </Modal>
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
)(FactSection);
