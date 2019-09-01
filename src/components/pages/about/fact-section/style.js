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
  @media (max-width: 1024px) {
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
    max-width: 30%;
    margin-bottom: 20px;
  }
`;

export const CardTitle = styled.div`
  color: ${COLOR.FONT_SECONDARY};
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CardDescription = styled.p`
  color: ${COLOR.FONT_SECONDARY};
  font-size: 0.7em;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 20px;
  text-align: center;
  z-index: 999;
  border-radius: 20px;
  transition: all 1s ease;
  background-color: ${COLOR.SECONDARY};
  visibility: ${props => (props.showModal ? "visible" : "hidden")}
  width: ${props => (props.showModal ? "80vw" : "0%")};
  height: ${props => (props.showModal ? "60vh" : "0%")};
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  right: 6px;
  top: 9px;
  cursor: pointer;
  border: none;
  font-size: 20px;
`;
