import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const CardWrapper = styled.div`
  margin: 20px;
  width: 300px;
  background-color: ${COLOR.SECONDARY};
  border-radius: 10px;
  height: 40vh;
  cursor: all-scroll;
`;

export const CardHeader = styled.div`
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  height: 18vh;
`;

export const CardImage = styled.img`
  width: 65%;
`;

export const CardBody = styled.div`
  padding: 0px 30px;
  text-align: left;
`;

export const CardTitle = styled.h4`
  color: ${COLOR.FONT_PRIMARY};
`;

export const CardDescription = styled.p`
  font-size: 0.7em;
`;
