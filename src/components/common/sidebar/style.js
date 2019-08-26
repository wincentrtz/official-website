import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const SidebarItem = styled.div`
  font-size: 1.2em;
  margin: 30px 0;
  color: ${props => (props.isActive ? COLOR.FONT_PRIMARY : "white")}
  text-align: right;
  transition: color 1s ease;
`;

export const SidebarItemNoValue = styled.div`
  background-color: ${props => (props.isActive ? COLOR.FONT_PRIMARY : "white")};
  min-height: 2px;
  padding-right: ${props => (props.isActive ? "30px" : "15px")};
  width: 0px;
  margin: 50px 0;
  transition: padding-right 1s ease;
`;
