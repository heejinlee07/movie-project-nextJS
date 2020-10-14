import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid grey;
  margin: 10px;
  width: 800px;
  height: 450px;
  max-width: 100%;
  border-radius: 10px;
`;

export const MovieImg = styled.img`
  border-radius: 20px;
  padding: 10px;
  object-fit: contain;
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
export const MovieCount = styled.div``;

export const MovieLike = styled.div``;

export const MovieDownload = styled.div``;

export const MovieSummary = styled.div`
  font-size: 1.2rem;
  padding: 20px 0;
`;

export const MovieRating = styled.div``;

export const MoviesMores = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
`;
