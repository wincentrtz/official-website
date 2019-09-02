import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 8vh;
  bottom: 0;
  margin: auto;
  padding: 20px;
  text-align: center;
  z-index: 999;
  border-radius: 20px;
  transition: all 0.5s ease;
  background-color: ${COLOR.SECONDARY};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")}
  width: ${props => (props.isOpen ? "75vw" : "0%")};
  height: ${props => (props.isOpen ? "70vh" : "0%")};
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 70vh;
`;
