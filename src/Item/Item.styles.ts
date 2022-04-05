import styled from 'styled-components';
export const Wrapper = styled.div`
  display:flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  height: 100%;

  button {
    border-radius: 0 0 10px 10px;
  }
  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;