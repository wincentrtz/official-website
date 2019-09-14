import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const PortofolioContentContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageSection = styled.div`
  margin: 4vh 4vw;
  flex: 9;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentSection = styled.div`
  margin: 4vh 4vw;
  flex: 10;
  text-align: left;
`;

export const PortofolioTitle = styled.h2`
  color: ${COLOR.FONT_PRIMARY};
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const PortofolioCategoryTab = styled.div`
  border-style: solid;
  border-color: ${COLOR.FONT_PRIMARY};
  border-width: 2px;
  display: inline-block;
  padding: 0px 20px;
  margin-right: 10px;
  font-size: 0.9em;
  margin-bottom: 10px;
`;

export const PortofolioDescription = styled.p`
  color: ${COLOR.FONT_SECONDARY};
  font-size: 0.9em;
  @media (max-width: 768px) {
    font-size: 0.6em;
  }
`;

export const PortofolioButton = styled.button`
  background-color: ${COLOR.FONT_PRIMARY};
  color: ${COLOR.PRIMARY};
  font-weight: bold;
  border: none;
  padding: 1vw 4vw;
  border-radius: 5px;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
