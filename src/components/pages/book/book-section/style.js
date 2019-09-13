import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const BookContainer = styled.div`
  display: flex;
  margin: 0px 4vw;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: scroll;
  height: 50vh;
`;

export const BookCard = styled.div`
  width: 100%;
  max-width: 28vw;
  background-color: ${COLOR.PRIMARY}
  padding: 1vw;
  margin: 1vw;
  display: flex;
  border-radius: 10px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const BookCardImage = styled.img`
  width: 20%;
  flex: 1;
  @media (max-width: 768px) {
    flex: 2;
    width: 30%;
  }
`;

export const BookCardContent = styled.div`
  flex: 4;
  text-align: left;
  margin-left: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  @media (max-width: 768px) {
    margin-left: 2vw;
  }
`;

export const BookTitle = styled.h4`
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.7em;
  }
`;

export const BookDescription = styled.div``;

export const BookAuthor = styled.h5`
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.5em;
  }
`;

export const BookReleasedDate = styled.h5`
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.5em;
  }
`;
