import styled from "styled-components";

export const Loading = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #e3e3; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
