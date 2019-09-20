import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const ContactDetailContainer = styled.div`
  background-color: ${COLOR.SECONDARY};
  padding: 1vh 11vw 20vh 11vw;
`;

export const ContactListWrapper = styled.ul`
  list-style-type: none;
`;

export const ContactList = styled.li`
  color: ${COLOR.FONT_PRIMARY};
  margin: 10px 0px;
  &:before {
    content: "-  ";
    color: white;
  }
`;
