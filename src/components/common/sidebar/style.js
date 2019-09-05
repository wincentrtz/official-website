import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const SidebarItem = styled.div`
  color: ${props => (props.isActive ? COLOR.FONT_PRIMARY : "white")}
  cursor: pointer
  font-size: 1.2em;
  margin: 30px 0;
  text-align: right;
  transition: color 1s ease;
`;

export const SidebarItemNoValue = styled.div`
  background-color: ${props => (props.isActive ? COLOR.FONT_PRIMARY : "white")};
  padding-right: ${props => (props.isActive ? "30px" : "15px")};
  cursor: pointer
  min-height: 2px;
  width: 0px;
  margin: 50px 0;
  transition: padding-right 1s ease;
`;
