import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const SidebarItem = styled.div`
  font-size: 1.2em;
  padding: 15px;
  color: ${props => (props.isActive ? COLOR.SECONDARY : "white")}
  text-align: right;
`;

export const SidebarItemNoValue = styled.div`
  backgroundcolor: ${COLOR.SECONDARY};
`;
