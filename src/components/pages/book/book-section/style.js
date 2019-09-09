import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const BookContainer = styled.div`
  display: flex;
  margin: 0px 4vw;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const BookCard = styled.div`
  width: 100%;
  max-width: 28vw;
  background-color: ${COLOR.PRIMARY}
  padding: 1vw;
  margin: 1vw;
  display: flex;
  border-radius: 10px;
`;

export const BookCardImage = styled.img`
  width: 20%;
  flex: 1;
`;

export const BookCardContent = styled.div`
  flex: 4;
  text-align: left;
  margin-left: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const BookTitle = styled.h4`
  margin: 0;
`;
export const BookAuthor = styled.h5`
  margin: 0;
`;
export const BookReleasedDate = styled.h5`
  margin: 0;
`;
