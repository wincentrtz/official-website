import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

import { AlphabetTab, AlphabetContainer, AlphabetTabWrapper } from "./style";

const AlphabetSection = ({ history, location }) => {
  const { search } = location;
  const activeAlphabet = queryString.parse(search).activeAlphabet || "A";
  const previousQuery = queryString.parse(search).fact;

  const handleAlphabetTabClick = alphabet => {
    history.push({
      search: `fact=${previousQuery}&activeAlphabet=${alphabet}`
    });
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

export default withRouter(AlphabetSection);
