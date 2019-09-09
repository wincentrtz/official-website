import React, { useState } from "react";
import { AlphabetTab, AlphabetContainer } from "./style";

const AlphabetSection = () => {
  const [activeAlphabet, setActiveAlphabet] = useState("A");

  const handleAlphabetTabClick = alphabet => {
    setActiveAlphabet(alphabet);
  };

  const renderAlphabets = () =>
    Array(13)
      .fill()
      .map((_, i) => {
        const alphabet = String.fromCharCode(65 + i);
        const isActive = activeAlphabet === alphabet;
        return (
          <AlphabetTab
            onClick={() => handleAlphabetTabClick(alphabet)}
            isActive={isActive}
            key={alphabet}
          >
            {alphabet}
            <br />
            {isActive && ". . ."}
          </AlphabetTab>
        );
      });
  return <AlphabetContainer>{renderAlphabets()}</AlphabetContainer>;
};

export default AlphabetSection;
