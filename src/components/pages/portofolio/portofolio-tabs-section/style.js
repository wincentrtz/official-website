import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TabButton = styled.div`
  color: ${props => (props.active ? COLOR.FONT_PRIMARY : "white")}
  padding: 2vw;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 0.7em;
  }
`;
