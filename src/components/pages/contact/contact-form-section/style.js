import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const ContactFormContainer = styled.div`
  position: absolute;
  right: 16vw;
  width: 20vw;
  bottom: 14vw;
  padding: 8vh 2vw 4vh 2vw;
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
  font-weight: bolder;
  &:focus {
    outline: none;
  }
`;

export const EmailLabel = styled.label`
  color: ${COLOR.FONT_PRIMARY};
`;

export const MessageTextArea = styled.textarea`
  background-color: transparent;
  resize: none;
  border-style: none none solid none;
  color: white;
  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${COLOR.FONT_PRIMARY};
  color: ${COLOR.PRIMARY};
  margin: 0 auto;
  margin-right: 0;
  border-radius: 5px;
  cursor: pointer;
  border-style: none;
  width: 10vw;
  font-weight: bolder;
  padding: 0.5vw 1vw;
  margin-top: 3vh;
`;
