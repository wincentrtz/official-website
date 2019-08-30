import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const FactContainer = styled.div`
  text-align: center;
  @media (max-width: 1000px) {
    margin: 0px 10px;
  }
`;

export const TitleSection = styled.h3`
  color: ${COLOR.FONT_PRIMARY};
  margin-top: 100px;
  @media (max-width: 1000px) {
    margin-top: 50px;
  }
`;

export const DescriptionSection = styled.p`
  color: ${COLOR.FONT_SECONDARY};
  margin: 0px 100px 50px 100px;
  font-size: 0.8em;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CardFact = styled.div`
  background-color: ${COLOR.SECONDARY};
  max-width: 15%;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    -webkit-box-shadow: 0px 5px 10px 3px #000000;
    box-shadow: 0px 5px 10px 3px #000000;
  }
  @media (max-width: 1500px) {
    max-width: 40%;
    width: 100%;
    margin-bottom: 40px;
  }
  @media (max-width: 500px) {
    max-width: 20%;
  }
`;

export const CardTitle = styled.div`
  color: ${COLOR.FONT_SECONDARY};
  @media (max-width: 500px) {
    display: none;
  }
`;

export const CardDescription = styled.p`
  color: ${COLOR.FONT_SECONDARY};
  font-size: 0.7em;
  @media (max-width: 500px) {
    display: none;
  }
`;
