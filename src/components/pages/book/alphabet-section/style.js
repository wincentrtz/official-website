import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const AlphabetContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0px 4vw;
`;
export const AlphabetTab = styled.div`
  color: ${props => (props.isActive ? COLOR.FONT_PRIMARY : "white")};
  cursor: pointer;
`;
