import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const FactContainer = styled.div`
  margin: 0px 100px;
  text-align: center;
`;

export const TitleSection = styled.h3`
  color: ${COLOR.FONT_PRIMARY};
`;

export const DescriptionSection = styled.p`
  color: ${COLOR.FONT_SECONDARY};
  margin: 50px 100px;
  font-size: 0.8em;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardFact = styled.div`
  background-color: ${COLOR.SECONDARY};
  max-width: 20%;
  padding: 15px;
  border-radius: 10px;
`;

export const CardTitle = styled.div`
  color: ${COLOR.FONT_SECONDARY};
`;

export const CardDescription = styled.p`
  color: ${COLOR.FONT_SECONDARY};
  font-size: 0.7em;
  text-align: right;
`;
