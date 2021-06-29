import styled from "styled-components";

export const Container = styled.div`
  padding: 16px 24px;
  text-align: center;
  background-color: #f9f9f9;
  box-sizing: border-box;
  min-height: 100vh;
  min-width: 100%;
`;

export const Title = styled.h1`
  position: relative;
  &::after {
    content: "";
    border: 2px solid #e3e3;
    position: absolute;
    bottom: -10px;
    width: 25%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
`;

export const Description = styled.div`
  margin: 24px;
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
