import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const FactContainer = styled.div`
  text-align: center;
`;

export const TitleSection = styled.h3`
  color: ${COLOR.FONT_PRIMARY};
  margin-top: 50px;
`;

export const DescriptionSection = styled.p`
  color: ${COLOR.FONT_SECONDARY};
  margin: 0px 100px 50px 100px;
  font-size: 0.8em;
  @media (max-width: 768px) {
    margin: 30px 30px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CardFact = styled.div`
  background-color: ${COLOR.SECONDARY};
  max-width: 20%;
  padding: 10px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  width: 100%;
  &:hover {
    -webkit-box-shadow: 0px 5px 10px 3px #000000;
    box-shadow: 0px 5px 10px 3px #000000;
  }
  @media (max-width: 1600 px) {
    max-width: 40%;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    max-width: 40%;
    margin-bottom: 20px;
  }
`;

export const CardTitle = styled.div`
  color: ${COLOR.FONT_SECONDARY};
`;

export const CardDescription = styled.p`
  color: ${COLOR.FONT_SECONDARY};
  font-size: 0.7em;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  right: 6px;
  top: 9px;
  cursor: pointer;
  border: none;
  font-size: 20px;
`;
