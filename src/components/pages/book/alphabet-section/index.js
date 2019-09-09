import React, { useState, Fragment } from "react";
import { AlphabetTab, AlphabetContainer, AlphabetTabWrapper } from "./style";

const AlphabetSection = () => {
  const [activeAlphabet, setActiveAlphabet] = useState("A");

  const handleAlphabetTabClick = alphabet => {
    setActiveAlphabet(alphabet);
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

export default AlphabetSection;
