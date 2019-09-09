import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const AlphabetContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0px 4vw;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AlphabetTabWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  flex: 1;
`;

export const AlphabetTab = styled.div`
  color: ${props => (props.isActive ? COLOR.FONT_PRIMARY : "white")};
  cursor: pointer;
`;
