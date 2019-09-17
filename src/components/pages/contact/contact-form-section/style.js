import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const ContactFormContainer = styled.div`
  position: absolute;
  right: 20vw;
  width: 16vw;
  bottom: 36vh;
  padding: 8vh 2vw;
  background-color: ${COLOR.SECONDARY};
  box-shadow: 0px 5px 10px 3px #000000;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vh 0px;
`;

export const NameTextField = styled.input`
  background-color: transparent;
  border-style: none none solid none;
  border-color: white;
  color: white;
  &:focus {
    outline: none;
  }
  font-weight: bolder;
`;

export const EmailLabel = styled.label`
  color: ${COLOR.FONT_PRIMARY};
`;

export const MessageTextArea = styled.textarea`
  background-color: transparent;
  resize: none;
`;
