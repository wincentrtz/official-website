import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  position: relative;
  touch-action: none;
  transform: translate3d(0px, ${props => props.scrollHeight}px, 0px);
  transition: all 2s ease;
`;
