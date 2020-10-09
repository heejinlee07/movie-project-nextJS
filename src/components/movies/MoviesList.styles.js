import styled from "styled-components";
import Truncate from "../../utils/truncate";

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid grey;
  margin: 10px;
  width: 600px;
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
  padding: 10px;
  height: 300px;
  width: 400px;
  max-width: 50%;
`;

export const MovieTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MovieGenres = styled.div`
  background-color: black;
  border-radius: 10px;
  color: white;
  margin-bottom: 10px;
`;

export const MovieYear = styled.div`
  margin-bottom: 15px;
`;

export const MovieSummary = styled.p`
  ${Truncate("250px")}
  overflow-x: hidden;
  height: 200px;
  margin-top: 20px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;

  &::-webkit-scrollbar {
    display: none;
  }
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
