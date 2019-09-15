import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const SidebarContainer = styled.div`
  position: absolute;
  width: 3vw;
  top: 30%;
  right: 4%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarItem = styled.div`
  color: ${props => (props.isActive ? COLOR.FONT_PRIMARY : "white")}
  cursor: pointer
  font-size: 1.2em;
  margin: 30px 0;
  text-align: right;
  transition: color 1s ease;
  text-transform:capitalize;
`;

export const SidebarLineOnlyWrapper = styled.div`
  margin: 25px 0;
  padding: 15px 0;
  cursor: pointer;
`;

export const SidebarItemLineOnly = styled.div`
  background-color: ${props => (props.isActive ? COLOR.FONT_PRIMARY : "white")};
  padding-right: ${props => (props.isActive ? "30px" : "15px")};
  min-height: 2px;
  width: 0px;
  transition: padding-right 1s ease;
`;
