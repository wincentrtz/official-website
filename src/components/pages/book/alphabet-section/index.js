import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import { fetchBooksByAlphabet } from "store/book/actions";
import { AlphabetTab, AlphabetContainer, AlphabetTabWrapper } from "./style";

const AlphabetSection = ({ handleFetchBooksByAlphabet }) => {
  const [activeAlphabet, setActiveAlphabet] = useState("A");

  const options = { activeAlphabet };

  const handleAlphabetTabClick = alphabet => {
    setActiveAlphabet(alphabet);
    handleFetchBooksByAlphabet(options);
  };

  const renderAlphabets = () => (
    <Fragment>
      <AlphabetTabWrapper>
        {renderThirteenAlphabetsFromIndex(0)}
      </AlphabetTabWrapper>
      <AlphabetTabWrapper>
        {renderThirteenAlphabetsFromIndex(13)}
      </AlphabetTabWrapper>
    </Fragment>
  );

  const renderThirteenAlphabetsFromIndex = n =>
    Array(13)
      .fill()
      .map((_, i) => {
        const alphabet = String.fromCharCode(65 + n + i);
        const isActive = activeAlphabet === alphabet;
        return (
          <AlphabetTab
            onClick={() => handleAlphabetTabClick(alphabet)}
            isActive={isActive}
            key={alphabet}
          >
            {alphabet}
          </AlphabetTab>
        );
      });

  return <AlphabetContainer>{renderAlphabets()}</AlphabetContainer>;
};

const mapDispatchToProps = dispatch => {
  return {
    handleFetchBooksByAlphabet: options =>
      dispatch(fetchBooksByAlphabet(options))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AlphabetSection);
