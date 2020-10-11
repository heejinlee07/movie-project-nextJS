import styled from "styled-components";
import Truncate from "../../utils/truncate";

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid grey;
  margin: 10px;
  width: 600px;
  height: 370px;
  max-width: 100%;
  border-radius: 10px;
`;

export const MovieImg = styled.img`
  border-radius: 20px;
  padding: 10px;
  height: 350px;
  max-width: 40%;
`;

export const MovieDetails = styled.div`
  padding: 20px;
  width: 400px;
  height: 400px;
  max-width: 50%;
  /* overflow: hidden; */
`;

export const MovieTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin-right: 5px;
  }
`;

export const MovieGenre = styled.div`
  background-color: black;
  border-radius: 10px;
  color: white;
  margin-bottom: 10px;
  padding: 5px;
`;

export const MovieYear = styled.div`
  margin-bottom: 15px;
`;

export const MovieSummary = styled.div`
  ${Truncate("7")}
  padding: 0 0 1px 0;
`;

export const MoviesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  max-width: 10%;
  position: relative;
`;

export const MovieRating = styled.div``;

export const MoviesMores = styled.div`
  display: flex;
  position: absolute;
  top: 320px;
  right: 10px;
`;
