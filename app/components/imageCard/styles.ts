import styled from "styled-components";

export const ContainerImage = styled.div`
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  & img {
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 100%;
    &:hover {
      opacity: 50%;
    }
  }
`;

export const AuthorImage = styled.figcaption`
  height: 40px;
  padding: 4px;
  display: flex;
  align-items: center;
  cursor: default;
  background-color: #ededed;
`;
