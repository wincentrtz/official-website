import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const CardWrapper = styled.div`
  margin: 20px;
  width: 300px;
  background-color: ${COLOR.SECONDARY};
  border-radius: 10px;
  height: 40vh;
  cursor: all-scroll;
  @media (max-width: 768px) {
    width: 200px;
    height: 35vh;
  }
`;

export const CardHeader = styled.div`
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  height: 18vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 12vh;
  }
`;

export const CardImage = styled.img`
  width: 65%;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const CardBody = styled.div`
  padding: 0px 30px;
  text-align: left;
`;

export const CardTitle = styled.h4`
  color: ${COLOR.FONT_PRIMARY};
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const CardDescription = styled.p`
  font-size: 0.7em;
  @media (max-width: 768px) {
    font-size: 0.6em;
  }
`;
