import styled from "styled-components";

export const ButtonUi = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
  text-decoration: none;
  text-align: center;
  padding: ${(props) => props.padding || 5}px;
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
  border-radius: ${(props) => props.borderRadius || 4}px;
  background-color: ${(props) => props.bgColor};
  opacity: ${(props) => props.opacity || 1};
  border: 0;

  &:hover {
    background-color: black;
    color: white;
  }
`;
