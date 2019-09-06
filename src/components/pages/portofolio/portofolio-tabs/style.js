import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TabButton = styled.div`
  color: ${props => (props.active ? COLOR.FONT_PRIMARY : "white")}
  padding: 40px;
  cursor: pointer;
`;
